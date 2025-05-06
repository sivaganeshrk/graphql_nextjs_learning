import {gql} from 'apollo-server-express'
import authorSchema from "./author.js"
import bookSchema from "./book.js"
import userReviewSchema from "./user_review.js"

const baseSchema = gql`
  type DeleteResult {
    success: Boolean!
    message: String
    id: ID
  }
  
  input DateFilter {
    after: String
    before: String
  }
  
  type Query {
    _empty: String
  }
  
  type Mutation {
    _empty: String
  }
`
export default [baseSchema, authorSchema, bookSchema, userReviewSchema]