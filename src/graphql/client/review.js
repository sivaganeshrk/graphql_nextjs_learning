import { gql } from "@apollo/client";

export const CREATE_REVIEW = gql`
  mutation CreateUserReview($payload: UserReviewInput) {
    createUserReview(payload: $payload) {
      id
    }
  }
`;
