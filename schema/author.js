import {gql} from 'apollo-server-express'
export default gql`
  type Author {
    id: ID!
    name: String!
    biography: String
    born_date: String!
    books: [Book]!
    createdAt: String!
    updatedAt: String!
  }
  
  type AuthorList {
    authors: [Author]!
    totalPage: Int
    currentPage: Int
    itemLimit: Int
  }
  
  input AuthorFilter {
    name: String!
  }
  
  input AuthorInput {
    name: String!
    biography: String
    born_date: String!
  }
  
  extend type Query{
    authors(page: Int = 1, limit: Int = 10, filter: AuthorFilter): AuthorList
    author(id: ID!): Author
  }

  extend type Mutation{
    createAuthor(input: AuthorInput!): Author
    updateAuthor(id: ID!, input: AuthorInput!): Author
    deleteAuthor(id: ID!): DeleteResult
  }
`