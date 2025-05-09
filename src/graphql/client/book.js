import { gql } from "@apollo/client";

export const GET_BOOK_LISTING = gql`
  query Books($paginationFilter: PaginationFilter, $filter: BookFilter) {
    books(paginationFilter: $paginationFilter, filter: $filter) {
      currentPage
      currentLimit
      items {
        rating {
          totalReview
          averageRating
        }
        id
        title
        author {
          id
          name
        }
      }
      totalPage
    }
  }
`;

export const GET_BOOK = gql`
  query Query(
    $id: id_ID_NotNull_minLength_26_maxLength_26!
    $bookId: book_id_ID_NotNull_minLength_26_maxLength_26!
    $paginationFilter: PaginationFilter
  ) {
    book(id: $id) {
      id
      title
      description
      published_date
      author {
        book_count
        born_date
        id
        name
        biography
      }
      rating {
        totalReview
        averageRating
      }
      createdAt
      updatedAt
    }
    userReviews(book_id: $bookId, paginationFilter: $paginationFilter) {
      items {
        comment
        id
        username
        rating
      }
      totalPage
      currentPage
      currentLimit
    }
  }
`;

export const UPDATE_BOOK = gql`
  mutation UpdateBook(
    $id: id_ID_NotNull_minLength_26_maxLength_26!
    $payload: updateBookInput!
  ) {
    updateBook(id: $id, payload: $payload) {
      id
    }
  }
`;

export const DELETE_BOOK = gql`
  mutation DeleteBook($id: id_ID_NotNull_minLength_26_maxLength_26!) {
    deleteBook(id: $id) {
      success
      id
    }
  }
`