import { gql } from 'apollo-boost';
import { repositoryForCard } from './fragments';

export const ALL_REPOSITORIES = gql`
  query {
    repositories{
      edges {
        node {
          ...repositoryForCard
        }
      }
    }
  }
  ${repositoryForCard}
`;
