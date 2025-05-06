import { Op, fn, col } from "sequelize";
import { Author, Book } from "../datasource/models/index.js";

export const authorResolver = {
  Mutation: {
    createAuthor: async (_, { payload }) => await Author.create(payload),
    updateAuthor: async (_, {id,payload}) => {
      const [count, authors] = await Author.update(
        payload,
        {
          where: { id },
          returning: true,
        }
      );
      if(count > 0){
        return authors[0].toJSON()
      }

      throw new Error("Author not found")
    },
    deleteAuthor: async(_, {id}) =>{
      const deletedRow = await Author.destroy({
        where:{
          id
        }
      })

      if(deletedRow > 0){
        return {
          success: true,
          message: "author removed",
          id: id
        }
      } else {
        return {
          success: false,
          message: "author not found",
          id
        }
      }
    }
  },
  Query: {
    author: async (_, { id }) => await Author.findByPk(id),
    authors: async (_, { page, limit, filter = {} }) => {
      const where = {};

      if (filter.name) {
        where.name = { [Op.iLike]: `%${filter.name}%` };
      }

      if (filter.born_before || filter.born_after) {
        where.born_date = {};
        if (filter.born_after) {
          where.born_date[Op.gte] = new Date(filter.born_after);
        }
        if (filter.born_before) {
          where.born_date[Op.lte] = new Date(filter.born_before);
        }
      }

      const authors = await Author.findAll({
        where,
        limit,
        offset: (page - 1) * limit,
        order: [['createdAt', 'DESC']],
        group: ['Author.id'],
        subQuery: false,
        include: [{
          model: Book,
          as: 'books',
          attributes: [],
        }],
        attributes: {
          include: [
            [fn('COUNT', col('books.id')), 'book_count']
          ]
        },
      });
      const totalAuthors = await Author.count({where})
      

      return {
        authors: authors.map(author => {
          const json = author.toJSON ? author.toJSON() : author;
      
          return {
            ...json,
            book_count: parseInt(json.book_count, 10) || 0
          };
        }),
        totalPage: limit > 0 ? Math.ceil(totalAuthors / limit) : 0,
        currentPage: page,
        currentLimit: limit
      }
    },
  },
};
