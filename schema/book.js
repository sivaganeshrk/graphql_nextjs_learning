import {gql} from 'apollo-server-express'
export default gql`
  type Book {
    id: ID!
    title: String!
    description: String
    published_date: String!
    author: Author!
    reviews: [UserReview]!
    averageRating: Float!
    createdAt: String!
    updatedAt: String!
  }

  type BookList {
    books: [Book]!
    totalPage: Int
    currentPage: Int
    itemLimit: Int
  }
  
  input BookFilter {
    title: String
    published_date: DateFilter
    author_id: ID
  }
  
  input createBookInput {
    title: String!
    description: String
    published_date: String!
    author_id: ID!
  }

  input updateBookInput {
    title: String
    description: String
    published_date: String
    author_id: ID
  }

  extend type Query{
    books(page: Int! = 1, limit: Int! = 10, filter: BookFilter): BookList
    book(id: ID!): Book
  }

  extend type Mutation{
    createBook(payload: createBookInput!): Book
    updateBook(id: ID!, payload: updateBookInput!): Book
    deleteBook(id: ID!): DeleteResult
  }
`