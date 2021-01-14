import { useState, useEffect } from 'react';
import { useQuery } from '@apollo/client';

import { REPOSITORY_REVIEWS } from '../graphql/queries';

const useReviews = (variables) => {
  const [reviews, setReviews] = useState();

  const { loading, error, data, refetch } = useQuery(
    REPOSITORY_REVIEWS,
    {
      fetchPolicy: 'cache-and-network',
      variables: variables
    });

  useEffect(() => {
    if (!loading) {
      setReviews(data.repository.reviews);
    }
  }, [loading]);

  return { reviews, loading, refetch };
};

export default useReviews;