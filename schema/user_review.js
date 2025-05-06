import {gql} from 'apollo-server-express'

export default gql`
  type UserReview {
    id: ID!
    book_id: String!
    username: String!
    rating: Float!
    comment: String
    createdAt: String!
  }
  
  type UserReviewListing {
    reviews: [UserReview]!
    totalPage: Int!
    currentPage: Int!
    currentLimit: Int!
  }

  input UserReviewInput {
    book_id: String!
    reviewerName: String
    rating: Float!
    comment: String
  }
  
  extend type Query {
    userReviews(book_id: ID!, page: Int = 1, limit: Int! = 10): UserReviewListing
  }
  
  extend type Mutation {
    createUserReview(payload: UserReviewInput): UserReview
    deleteUserReview(id: ID!): DeleteResult
  }
`