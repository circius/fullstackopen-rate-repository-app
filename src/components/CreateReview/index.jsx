import React from 'react';
import { Formik } from 'formik';
import * as yup from 'yup';

import CreateReviewForm from './CreateReviewForm';
import useCreateReview from '../../hooks/useCreateReview';

const CreateReview = () => {
  const [createReview] = useCreateReview();

  const onSubmit = (vals) => createReview(vals);

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
    .matches(/^[\w\d-]+$/, 'invalid repo name: only numbers, digits and `-`!')
    .required('need to know which repo to review'),
  repoOwner: yup
    .string()
    .matches(/[\w\d-]/, 'invalid github username')
    .required('need to know who owns the repo'),
  rating: yup
    .number()
    .min(0)
    .max(100)
    .required("a review must have a rating"),
  review: yup
    .string()
});

export default CreateReview;