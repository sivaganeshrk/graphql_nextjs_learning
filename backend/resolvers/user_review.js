import { userReview } from "../datasource/models/index.js";

export const userReviewResolver = {
  Mutation: {
    createUserReview: async (_, { payload }) => {
      payload.user_name = payload.user_name || "Anonymous";
      return await userReview.create(payload);
    },
    deleteUserReview: async (_, { id }) => {
      const deletedRow = await userReview.deleteOne({ id });

      if (deletedRow.deletedCount > 0) {
        return {
          success: true,
          message: "user_review removed",
          id: id,
        };
      } else {
        return {
          success: false,
          message: "user_review not found",
          id: id,
        };
      }
    },
  },
  Query: {
    userReviews: async (_, { book_id, paginationFilter = { page: 1, limit: 10 } }) => {
      const {page, limit} = paginationFilter
      const [reviews, totalReviews] = await Promise.all([
        userReview
          .find({ book_id })
          .skip((page - 1) * limit)
          .limit(limit)
          .sort({ createdAt: -1 }),
        userReview.countDocuments({book_id})
      ]);
      
      return {
        items: reviews,
        currentPage: page,
        currentLimit: limit,
        totalPage: limit > 0 ? Math.ceil(totalReviews / limit) : 0
      }
    },
  },
};
