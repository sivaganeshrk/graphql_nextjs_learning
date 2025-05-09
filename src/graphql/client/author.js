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
