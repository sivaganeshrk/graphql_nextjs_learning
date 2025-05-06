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
    items: [Author]!
    totalPage: Int!
    currentPage: Int!
    currentLimit: Int!
  }
  
  input AuthorFilter {
    name: String @constraint(minLength: 3)
    born_date: DateFilter
  }
  
  input CreateAuthorInput {
    name: String! @constraint(minLength: 4)
    biography: String @constraint(minLength: 4)
    born_date: String! @constraint(pattern: "^(\\\\d{4})-(\\\\d{2})-(\\\\d{2})$")
  }
  
  input UpdateAuthorInput {
    name: String @constraint(minLength: 4)
    biography: String
    born_date: String @constraint(pattern: "^(\\\\d{4})-(\\\\d{2})-(\\\\d{2})$")
  }
  
  extend type Query{
    authors(paginationFilter: PaginationFilter, filter: AuthorFilter = {}): AuthorList
    author(id: ID! @constraint(minLength: 26, maxLength: 26)): Author
  }

  extend type Mutation{
    createAuthor(payload: CreateAuthorInput!): Author
    updateAuthor(id: ID! @constraint(minLength: 26, maxLength: 26), payload: UpdateAuthorInput!): Author
    deleteAuthor(id: ID! @constraint(minLength: 26, maxLength: 26)): DeleteResult
  }
`