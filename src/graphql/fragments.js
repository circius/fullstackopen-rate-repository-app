import { gql } from 'apollo-boost';

export const repositoryForCard = gql`
  {
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