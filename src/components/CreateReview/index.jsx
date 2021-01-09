import React from 'react';
import { Formik } from 'formik';
import * as yup from 'yup';

import CreateReviewForm from './CreateReviewForm';

const CreateReview = () => {

  const onSubmit = (vals) => alert(`got ${Object.keys(vals).length} vals`);

  return <Formik
    initialValues={initialValues}
    validationSchema={validationSchema}
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

const validationSchema = yup.object().shape({
  repoName: yup
    .string()
    .required('need to know which repo to review'),
  repoOwner: yup
    .string()
    .required('need to know who owns the repo'),
  rating: yup
    .number()
    .required("a review must have a rating"),
  review: yup
    .string()
});

export default CreateReview;