import {gql} from '@apollo/client'
import authorSchema from "./author.js"
import bookSchema from "./book.js"
import userReviewSchema from "./user_review.js"
import { constraintDirectiveTypeDefs } from 'graphql-constraint-directive';

const baseSchema = gql`
  ${constraintDirectiveTypeDefs}
  type DeleteResult {
    success: Boolean!
    message: String
    id: ID
  }
  
  input DateFilter {
    after: String @constraint(pattern: "^(\\\\d{4})-(\\\\d{2})-(\\\\d{2})$")
    before: String @constraint(pattern: "^(\\\\d{4})-(\\\\d{2})-(\\\\d{2})$")
  }

  input PaginationFilter {
    page: Int @constraint(min:1)
    limit: Int @constraint(min:10)
  }
  
  type Query {
    _empty: String
  }
  
  type Mutation {
    _empty: String
  }
`
export default [baseSchema, authorSchema, bookSchema, userReviewSchema]