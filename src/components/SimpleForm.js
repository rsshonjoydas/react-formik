/* eslint-disable jsx-a11y/label-has-associated-control */
import { useFormik } from 'formik';
import React from 'react';

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

// * input form validation function
const validate = (values) => {
  const errors = {};

  if (!values.name) {
    errors.name = 'Required';
  }

  if (!values.email) {
    errors.email = 'Required';
  } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
    errors.email = 'Invalid email format';
  }

  if (!values.channel) {
    errors.channel = 'Required';
  }

  return errors;
};

const SimpleForm = () => {
  const formik = useFormik({
    initialValues,
    onSubmit,
    validate,
  });

  console.log('Form errors', formik.errors);
  return (
    <form onSubmit={formik.handleSubmit}>
      {/* // TODO: Name Field and validation using Formik */}
      <div className="formControl">
        <label htmlFor="name">Name</label>
        <input
          type="text"
          id="name"
          name="name"
          onChange={formik.handleChange}
          value={formik.values.name}
        />
        {formik.errors.name ? <div className="error">{formik.errors.name}</div> : null}
      </div>

      {/* // TODO: E-mail Field and validation using Formik */}
      <div className="formControl">
        <label>E-mail</label>
        <input
          type="email"
          id="email"
          name="email"
          onChange={formik.handleChange}
          value={formik.values.email}
        />
        {formik.errors.email ? <div className="error">{formik.errors.email}</div> : null}
      </div>

      {/* // TODO: Channel Field and validation using Formik */}
      <div className="formControl">
        <label htmlFor="channel">Channel</label>
        <input
          type="text"
          id="channel"
          name="channel"
          onChange={formik.handleChange}
          value={formik.values.channel}
        />
        {formik.errors.channel ? <div className="error">{formik.errors.channel}</div> : null}
      </div>

      <button type="submit">Submit</button>
    </form>
  );
};
export default SimpleForm;
