import { Form, Formik } from 'formik';
import React from 'react';
import * as Yup from 'yup';
import FormikControl from './FormikControl';

const FormikContainer = () => {
  const initialValues = {
    email: '',
    description: '',
  };
  const validationSchema = Yup.object({
    email: Yup.string().required('Required'),
    description: Yup.string().required('Required'),
  });
  const onSubmit = (values) => console.log('Form data', values);
  return (
    <Formik initialValues={initialValues} validationSchema={validationSchema} onSubmit={onSubmit}>
      {() => (
        <Form>
          <FormikControl control="input" type="email" label="Email" name="email" />
          <FormikControl control="textarea" label="Description" name="description" />
          <button type="submit">Submit</button>
        </Form>
      )}
    </Formik>
  );
};

export default FormikContainer;
