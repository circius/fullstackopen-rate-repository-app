import React from 'react';
import { Formik } from 'formik';
import * as yup from 'yup';

import CreateReviewForm from './CreateReviewForm';

const CreateReview = () => {
  return <Formik
    initialValues={initialValues}
  >
    <CreateReviewForm />
  </Formik>;
};

const initialValues = {
  repoOwner: "",
  repoName: "",
  rating: "",
  review: ""
};

export default CreateReview;