import { gql } from "@apollo/client";

export const GET_AUTHORS_DROPDOWN = gql`
  query Items($paginationFilter: PaginationFilter) {
    authors(paginationFilter: $paginationFilter) {
      items {
        id
        name
      }
    }
  }
`;

export const GET_AUTHORS_LISTING = gql`
  query Authors($paginationFilter: PaginationFilter, $filter: AuthorFilter) {
    authors(paginationFilter: $paginationFilter, filter: $filter) {
      currentLimit
      currentPage
      totalPage
      items {
        id
        book_count
        name
        born_date
      }
    }
  }
`;

export const GET_AUTHOR = gql`
  query Author(
    $authorId: id_ID_NotNull_minLength_26_maxLength_26!
    $paginationFilter: PaginationFilter
    $filter: BookFilter
  ) {
    author(id: $authorId) {
      biography
      book_count
      born_date
      id
      name
    }
    books(paginationFilter: $paginationFilter, filter: $filter) {
      items {
        id
        title
        rating {
          averageRating
          totalReview
        }
      }
      currentPage
      currentLimit
      totalPage
    }
  }
`;

export const DELETE_AUTHOR = gql`
  mutation Mutation($author_id: id_ID_NotNull_minLength_26_maxLength_26!) {
    deleteAuthor(id: $author_id) {
      id
    }
  }
`;

export const UPDATE_AUTHOR = gql`
  mutation UpdateAuthor(
    $payload: UpdateAuthorInput!
    $author_id: id_ID_NotNull_minLength_26_maxLength_26!
  ) {
    updateAuthor(payload: $payload, id: $author_id) {
      id
    }
  }
`;

export const CREATE_AUTHOR = gql`
  mutation Mutation($payload: CreateAuthorInput!) {
    createAuthor(payload: $payload) {
      id
    }
  }
`;
