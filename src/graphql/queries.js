import { gql } from 'apollo-boost';

import { RepositoryDetails, RepositoryReviews } from './fragments';

export const ALL_REPOSITORIES = gql`
  query {
    repositories {
      edges {
        node {
          ...RepositoryDetails
        }
      }
    }
  }
  ${RepositoryDetails}
`;

export const REPOSITORY_DETAILS = gql`
query ($id: ID!) {
  repository(id: $id) {
    ...RepositoryDetails
    url
  }
}
${RepositoryDetails}
`;

export const REPOSITORY_REVIEWS = gql`
query ($id: ID!) {
  repository(id: $id) {
    ...RepositoryReviews
  }
}
${RepositoryReviews}
`;

export const AUTHORIZED_USER = gql`
query {
    authorizedUser {
      username
  }
}
`;