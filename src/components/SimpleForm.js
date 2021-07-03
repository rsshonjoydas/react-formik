import { Formik, Form, Field, ErrorMessage } from 'formik';
import React from 'react';
import * as Yup from 'yup';

// * initial values of input field
const initialValues = {
  name: 'RS Shonjoy',
  email: '',
  channel: '',
  comments: '',
  address: '',
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

      {/* //TODO: Comments Field using Formik */}
      <div className="formControl">
        <label htmlFor="comments">Comments</label>
        <Field as="textarea" id="comments" name="comments" />
      </div>

      {/* //TODO: Address Field using Formik */}
      <div className="formControl">
        <label htmlFor="address">Address</label>
        <Field name="address">
          {(props) => {
            const { field, meta } = props;
            console.log('Render props', props);
            return (
              <div>
                <input type="text" id="address" {...field} />
                {meta.touched && meta.error ? <div>{meta.error}</div> : null}
              </div>
            );
          }}
        </Field>
      </div>

      <button type="submit">Submit</button>
    </Form>
  </Formik>
);
export default SimpleForm;
