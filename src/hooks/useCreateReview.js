import { useHistory } from 'react-router-dom';
import { useMutation } from "@apollo/react-hooks";

import { CREATE_REVIEW } from '../graphql/mutations';

const useCreateReview = () => {
  const [mutate, result] = useMutation(CREATE_REVIEW);
  const history = useHistory();

  const createReview = async ({ repoOwner, repoName, rating, review }) => {
    const response = await mutate({
      variables: {
        repositoryName: repoName,
        ownerName: repoOwner,
        rating: Number(rating),
        text: review
      }
    });
    console.log('reponse:', response);

    history.push('/');
  };

  return [createReview, result];
};

export default useCreateReview;