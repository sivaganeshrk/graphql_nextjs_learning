import {gql} from 'apollo-server-express'
export default gql`
  type Author {
    id: ID!
    name: String!
    biography: String
    born_date: String!
    book_count: Int
    createdAt: String!
    updatedAt: String!
  }
  
  type AuthorList {
    authors: [Author]!
    totalPage: Int!
    currentPage: Int!
    currentLimit: Int!
  }
  
  input AuthorFilter {
    name: String
    born_after: String
    born_before: String
  }
  
  input CreateAuthorInput {
    name: String!
    biography: String
    born_date: String!
  }
  
  input UpdateAuthorInput {
    name: String
    biography: String
    born_date: String
  }
  
  extend type Query{
    authors(page: Int! = 1, limit: Int! = 10, filter: AuthorFilter = {}): AuthorList
    author(id: ID!): Author
  }

  extend type Mutation{
    createAuthor(payload: CreateAuthorInput!): Author
    updateAuthor(id: ID!, payload: UpdateAuthorInput!): Author
    deleteAuthor(id: ID!): DeleteResult
  }
`