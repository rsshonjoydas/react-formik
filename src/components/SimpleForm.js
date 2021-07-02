import { useFormik } from 'formik';
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

const SimpleForm = () => {
  const formik = useFormik({
    initialValues,
    onSubmit,
    validationSchema,
  });

  console.log('Visited fields', formik.touched);
  return (
    <form onSubmit={formik.handleSubmit}>
      {/* // TODO: Name Field and validation using Formik */}
      <div className="formControl">
        <label htmlFor="name">Name</label>
        <input type="text" id="name" name="name" {...formik.getFieldProps('name')} />
        {formik.touched.name && formik.errors.name ? (
          <div className="error">{formik.errors.name}</div>
        ) : null}
      </div>

      {/* // TODO: E-mail Field and validation using Formik */}
      <div className="formControl">
        <label>E-mail</label>
        <input type="email" id="email" name="email" {...formik.getFieldProps('email')} />
        {formik.touched.email && formik.errors.email ? (
          <div className="error">{formik.errors.email}</div>
        ) : null}
      </div>

      {/* // TODO: Channel Field and validation using Formik */}
      <div className="formControl">
        <label htmlFor="channel">Channel</label>
        <input type="text" id="channel" name="channel" {...formik.getFieldProps('channel')} />
        {formik.touched.channel && formik.errors.channel ? (
          <div className="error">{formik.errors.channel}</div>
        ) : null}
      </div>

      <button type="submit">Submit</button>
    </form>
  );
};
export default SimpleForm;
