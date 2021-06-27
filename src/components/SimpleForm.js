/* eslint-disable jsx-a11y/label-has-associated-control */
import { useFormik } from 'formik';
import React from 'react';

const SimpleForm = () => {
  const formik = useFormik({
    initialValues: {
      name: 'RS Shonjoy',
      email: '',
      channel: '',
    },
  });

  console.log('Form values', formik.values);
  return (
    <form>
      <label htmlFor="name">Name</label>
      <input
        type="text"
        id="name"
        name="name"
        onChange={formik.handleChange}
        value={formik.values.name}
      />

      <label>E-mail</label>
      <input
        type="email"
        id="email"
        name="email"
        onChange={formik.handleChange}
        value={formik.values.email}
      />

      <label htmlFor="channel">Channel</label>
      <input
        type="text"
        id="channel"
        name="channel"
        onChange={formik.handleChange}
        value={formik.values.channel}
      />

      <button type="submit">Submit</button>
    </form>
  );
};
export default SimpleForm;
