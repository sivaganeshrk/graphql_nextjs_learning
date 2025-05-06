import {gql} from 'apollo-server-express'
export default gql`
  type Book {
    id: ID!
    title: String!
    description: String
    published_date: String!
    author: Author!
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
    published_before: String
    published_after: String
  }
  
  input BookInput {
    title: String!
    description: String
    published_date: String!
    author_id: ID!
  }

  extend type Query{
    books(page: Int = 1, limit: Int = 10, filter: BookFilter): BookList
    book(id: ID!): Book
  }

  extend type Mutation{
    createBook(input: BookInput!): Book
    updatedBook(id: ID!, input: BookInput!): Book
    deleteBook(id: ID!): DeleteResult
  }
`