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
