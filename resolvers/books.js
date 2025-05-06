import { Op } from "sequelize";
import { Author, Book, userReview } from "../datasource/models/index.js";
export const bookResolver = {
  Mutation: {
    createBook: async (_, { payload }) => await Book.create(payload),
    updateBook: async (_, { id, payload }) => {
      const [count, books] = await Book.update(payload, {
        where: { id },
        returning: true,
      });

      if (count > 0) {
        return books[0].toJSON();
      }

      throw new Error("Book not found");
    },
    deleteBook: async (_, { id }) => {
      const deletedRow = await Book.destroy({
        where: { id },
      });

      if (deletedRow > 0) {
        return {
          success: true,
          message: "book removed",
          id,
        };
      } else {
        return {
          success: false,
          message: "book not found",
          id,
        };
      }
    },
  },
  Query: {
    book: async (_, { id }) => await Book.findByPk(id),
    books: async (_, { paginationFilter = { page: 1, limit: 10 }, filter = {} }) => {
      const {page,limit} = paginationFilter
      const where = {};

      if (filter.title) {
        where.title = { [Op.iLike]: `%${filter.title}%` };
      }

      if (filter.published_date) {
        where.published_date = {};

        if (filter.published_date.after) {
          where.published_date[Op.gte] = new Date(filter.published_date.after);
        }

        if (filter.published_date.before) {
          where.published_date[Op.lte] = new Date(filter.published_date.before);
        }
      }

      if (filter.author_id) {
        where.author_id = { [Op.eq]: filter.author_id };
      }

      const {rows: books, count: totalBooks} = await Book.findAndCountAll({
        where,
        limit,
        offset: (page - 1) * limit,
        order: [["published_date", "DESC"]],
        include: [{
          model: Author,
          as: 'author'
        }]
      });

      return {
        items: books,
        totalPage: limit > 0 ? Math.ceil(totalBooks / limit): 0,
        currentPage: page,
        currentLimit: limit
      }
    },
  },
  Book: {
    author: async(book) => {
      if(!book.author) {
        return await Author.findByPk(book.author_id)
      }
      return book.author
    },
    reviews: async (book) =>
      userReview.find({ book_id: book.id }).sort({ createAt: -1 }),
    averageRating: async (book) => {
      const result = await userReview.aggregate([
        {$match: { book_id: book.id}},
        {
          $group: {
            _id: "$book_id",
            averageRating: { $avg: '$rating'}
          }
        }
      ])

      if(result.length > 0){
        return result[0].averageRating.toFixed(1)
      } else {
        return 0
      }
    }
  }
};
