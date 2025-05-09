import {gql} from '@apollo/client'

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
    items: [UserReview]!
    totalPage: Int!
    currentPage: Int!
    currentLimit: Int!
  }

  input UserReviewInput {
    book_id: String! @constraint(minLength: 26, maxLength: 26)
    reviewerName: String
    rating: Float! @constraint( min:1, max:5 )
    comment: String
  }
  
  extend type Query {
    userReviews(book_id: ID!, paginationFilter: PaginationFilter): UserReviewListing
  }
  
  extend type Mutation {
    createUserReview(payload: UserReviewInput): UserReview
    deleteUserReview(id: ID! @constraint(minLength: 26, maxLength: 26)): DeleteResult
  }
`