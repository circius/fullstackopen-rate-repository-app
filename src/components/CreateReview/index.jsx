import React from 'react';
import { Formik } from 'formik';
import * as yup from 'yup';

import CreateReviewForm from './CreateReviewForm';

const CreateReview = () => {

  const onSubmit = (vals) => alert(`got ${Object.keys(vals).length} vals`);

  return <Formik
    initialValues={initialValues}
  >
    <CreateReviewForm onSubmit={onSubmit} />
  </Formik>;
};

const initialValues = {
  repoOwner: "",
  repoName: "",
  rating: "",
  review: ""
};

export default CreateReview;