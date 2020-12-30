import { gql } from 'apollo-boost';
import { repositoryForCard } from './fragments';

export const allRepositories = gql`
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
