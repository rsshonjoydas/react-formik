import { Form, Formik } from 'formik';
import React from 'react';
import * as Yup from 'yup';
import FormikControl from './FormikControl';

const FormikContainer = () => {
  const initialValues = {
    email: '',
  };
  const validationSchema = Yup.object({
    email: Yup.string().required('Required'),
  });
  const onSubmit = (values) => console.log('Form data', values);
  return (
    <Formik initialValues={initialValues} validationSchema={validationSchema} onSubmit={onSubmit}>
      {() => (
        <Form>
          <FormikControl control="input" type="email" label="Email" name="email" />
          <button type="submit">Submit</button>
        </Form>
      )}
    </Formik>
  );
};

export default FormikContainer;