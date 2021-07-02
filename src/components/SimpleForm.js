import { Formik, Form, Field, ErrorMessage } from 'formik';
import React from 'react';
import * as Yup from 'yup';

// * initial values of input field
const initialValues = {
  name: 'RS Shonjoy',
  email: '',
  channel: '',
};

// * onsubmit button handler
const onSubmit = (values) => {
  console.log('Form data', values);
};

// * input form validation schema
const validationSchema = Yup.object({
  name: Yup.string().required('Required'),
  email: Yup.string().email('Invalid email format').required('Required'),
  channel: Yup.string().required('Required'),
});

const SimpleForm = () => (
  <Formik initialValues={initialValues} validationSchema={validationSchema} onSubmit={onSubmit}>
    <Form>
      {/* // TODO: Name Field and validation using Formik */}
      <div className="formControl">
        <label htmlFor="name">Name</label>
        <Field type="text" id="name" name="name" />
        <ErrorMessage name="name" />
      </div>

      {/* // TODO: E-mail Field and validation using Formik */}
      <div className="formControl">
        <label>E-mail</label>
        <Field type="email" id="email" name="email" />
        <ErrorMessage name="email" />
      </div>

      {/* // TODO: Channel Field and validation using Formik */}
      <div className="formControl">
        <label htmlFor="channel">Channel</label>
        <Field type="text" id="channel" name="channel" placeholder="YouTube channel name" />
        <ErrorMessage name="channel" />
      </div>

      <button type="submit">Submit</button>
    </Form>
  </Formik>
);
export default SimpleForm;
