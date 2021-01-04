import { gql } from 'apollo-boost';

import { RepositoryDetails } from './fragments';

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

export const AUTHORIZED_USER = gql`
query {
    authorizedUser {
      username
  }
}
`;