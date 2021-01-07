import { useState, useEffect } from 'react';
import { useQuery } from '@apollo/client';

import { REPOSITORY_REVIEWS } from '../graphql/queries';

const useReviews = (id) => {
  const [reviews, setReviews] = useState();

  const { loading, error, data, refetch } = useQuery(
    REPOSITORY_REVIEWS,
    {
      fetchPolicy: 'cache-and-network',
      variables: { id: id }
    });

  useEffect(() => {
    if (!loading) {
      setReviews(data.repository.reviews);
    }
  }, [loading]);

  return { reviews, loading, refetch };
};

export default useReviews;