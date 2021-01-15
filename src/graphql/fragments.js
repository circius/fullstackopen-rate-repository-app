import { gql } from 'apollo-boost';

export const RepositoryDetails = gql`
  fragment RepositoryDetails on Repository {
    id,
    fullName,
    reviewCount,
    ratingAverage,
    forksCount,
    stargazersCount,
    description,
    language,
    ownerAvatarUrl
  }
`;

export const RepositoryReviews = gql`
  fragment RepositoryReviews on Repository {
    id,
    fullName,
    reviews (first: $first, after: $after) {
      pageInfo {
        hasNextPage
        endCursor
      }
      edges {
        node {
          id
          text
          rating
          createdAt
          user {
            id
            username
          }
        }
      }
    }
  }
`;