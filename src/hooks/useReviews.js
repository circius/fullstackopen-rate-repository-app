import { useState, useEffect } from 'react';
import { useQuery } from '@apollo/client';

import { REPOSITORY_REVIEWS } from '../graphql/queries';

const useReviews = (variables) => {
  const [reviews, setReviews] = useState();

  const { loading, fetchMore, data, refetch } = useQuery(
    REPOSITORY_REVIEWS,
    {
      fetchPolicy: 'network-only',
      variables: variables
    });

  const handleFetchMore = () => {
    const canFetchMore =
      !loading && data && data.repository.reviews.pageInfo.hasNextPage;

    if (!canFetchMore) {
      return;
    }

    fetchMore({
      query: REPOSITORY_REVIEWS,
      variables: {
        after: data.repository.reviews.pageInfo.endCursor,
        ...variables
      },
      updateQuery: (previousResult, { fetchMoreResult }) => {
        const nextResult = {
          repository: {
            ...fetchMoreResult.repository,
            reviews: {
              ...fetchMoreResult.repository.reviews,
              edges: [
                ...previousResult.repository.reviews.edges,
                ...fetchMoreResult.repository.reviews.edges
              ],
            }
          }
        };
        return nextResult;
      }
    }
    );
  };

  useEffect(() => {
    if (!loading) {
      setReviews(data.repository.reviews);
    }
  }, [loading]);

  return { reviews, loading, refetch, fetchMore: handleFetchMore };
};


export default useReviews;