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