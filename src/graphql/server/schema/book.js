import {gql} from '@apollo/client'
export default gql`
  type Rating {
    averageRating: Float!
    totalReview: Int!
  }
  type Book {
    id: ID!
    title: String!
    description: String
    published_date: String!
    author: Author!
    reviews: [UserReview]!
    rating: Rating!
    createdAt: String!
    updatedAt: String!
  }

  type BookList {
    items: [Book]!
    totalPage: Int
    currentPage: Int
    itemLimit: Int
  }
  
  input BookFilter {
    title: String @constraint(minLength: 3)
    published_date: DateFilter
    author_id: ID @constraint(minLength: 26, maxLength: 26)
  }
  
  input createBookInput {
    title: String! @constraint(minLength: 3)
    description: String 
    published_date: String! @constraint(pattern: "^(\\\\d{4})-(\\\\d{2})-(\\\\d{2})$")
    author_id: ID! @constraint(minLength: 26, maxLength: 26)
  }

  input updateBookInput {
    title: String @constraint(minLength: 3)
    description: String 
    published_date: String @constraint(pattern: "^(\\\\d{4})-(\\\\d{2})-(\\\\d{2})$")
    author_id: ID @constraint(minLength: 26, maxLength: 26)
  }

  extend type Query{
    books(paginationFilter: PaginationFilter, filter: BookFilter): BookList
    book(id: ID! @constraint(minLength: 26, maxLength: 26)): Book
  }

  extend type Mutation{
    createBook(payload: createBookInput!): Book
    updateBook(id: ID! @constraint(minLength: 26, maxLength: 26), payload: updateBookInput!): Book
    deleteBook(id: ID! @constraint(minLength: 26, maxLength: 26)): DeleteResult
  }
`