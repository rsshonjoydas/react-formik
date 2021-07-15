import { ErrorMessage, FastField, Field, FieldArray, Form, Formik } from 'formik';
import React from 'react';
import * as Yup from 'yup';
import TextError from './TextError';

// * initial values of input field
const initialValues = {
  name: 'RS Shonjoy',
  email: '',
  channel: '',
  comments: '',
  address: '',
  social: {
    facebook: '',
    twitter: '',
  },
  phoneNumbers: ['', ''],
  phNumbers: [''],
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
  comments: Yup.string().required('Required'),
});

// * Field level validation
const validateComments = (value) => {
  let error;
  if (!value) {
    error = 'Required';
  }
  return error;
};

const SimpleForm = () => (
  <Formik initialValues={initialValues} validationSchema={validationSchema} onSubmit={onSubmit}>
    {(formik) => {
      console.log('Formik props', formik);
      return (
        <Form>
          {/* // TODO: Name Field and validation using Formik */}
          <div className="formControl">
            <label htmlFor="name">Name</label>
            <Field type="text" id="name" name="name" />
            {/* // * ErrorMessage use props method */}
            <ErrorMessage name="name" component={TextError} />
          </div>

          {/* // TODO: E-mail Field and validation using Formik */}
          <div className="formControl">
            <label>E-mail</label>
            <Field type="email" id="email" name="email" />
            <ErrorMessage name="email">
              {/* // * ErrorMessage use Render props method */}
              {(errorMsg) => <div className="error">{errorMsg}</div>}
            </ErrorMessage>
          </div>

          {/* // TODO: Channel Field and validation using Formik */}
          <div className="formControl">
            <label htmlFor="channel">Channel</label>
            <Field type="text" id="channel" name="channel" placeholder="YouTube channel name" />
            <ErrorMessage name="channel" component={TextError} />
          </div>

          {/* //TODO: Comments Field using Formik */}
          <div className="formControl">
            <label htmlFor="comments">Comments</label>
            <Field as="textarea" id="comments" name="comments" validate={validateComments} />
            <ErrorMessage name="comments" component={TextError} />
          </div>

          {/* //TODO: Address Field using Formik */}
          <div className="formControl">
            <label htmlFor="address">Address</label>
            <FastField name="address">
              {(props) => {
                console.log('Field render');
                const { field, meta } = props;
                return (
                  <div>
                    <input type="text" id="address" {...field} />
                    {meta.touched && meta.error ? <div>{meta.error}</div> : null}
                  </div>
                );
              }}
            </FastField>
          </div>

          {/* //TODO: Social Field using Formik */}
          <div className="formControl">
            <label htmlFor="facebook">Facebook profile</label>
            <Field type="text" id="facebook" name="social.facebook" />
          </div>
          <div className="formControl">
            <label htmlFor="twitter">Twitter profile</label>
            <Field type="text" id="twitter" name="social.twitter" />
          </div>

          {/* //TODO: Phone Number Field using Formik */}
          <div className="formControl">
            <label htmlFor="primaryPh">Primary phone number</label>
            <Field type="text" id="primaryPh" name="phoneNumbers[0]" />
          </div>
          <div className="formControl">
            <label htmlFor="secondaryPh">Secondary phone number</label>
            <Field type="text" id="secondaryPh" name="phoneNumbers[1]" />
          </div>

          {/* // TODO: Phone Numbers Field */}
          <div className="formControl">
            <label>List of phone numbers</label>
            <FieldArray name="phNumbers">
              {(fieldArrayProps) => {
                const { push, remove, form } = fieldArrayProps;
                const { values } = form;
                const { phNumbers } = values;
                console.log('Form errors', form.errors);
                return (
                  <div>
                    {phNumbers.map((phNumber, index) => (
                      <div key={index}>
                        <Field name={`phNumbers[${index}]`} />
                        {index > 0 && (
                          <button type="button" onClick={() => remove(index)}>
                            {' '}
                            -{' '}
                          </button>
                        )}
                        <button type="button" onClick={() => push('')}>
                          {' '}
                          +{' '}
                        </button>
                      </div>
                    ))}
                  </div>
                );
              }}
            </FieldArray>
          </div>

          <button type="button" onClick={() => formik.validateField('comments')}>
            Validate comments
          </button>
          <button type="button" onClick={() => formik.validateForm()}>
            Validate all
          </button>
          <button type="button" onClick={() => formik.setFieldTouched('comments')}>
            Visit comments
          </button>
          <button
            type="button"
            onClick={() =>
              formik.setTouched({
                name: true,
                email: true,
                channel: true,
                comments: true,
              })
            }
          >
            Visit fields
          </button>
          <button type="submit" disabled={!(formik.dirty && formik.isValid)}>
            Submit
          </button>
        </Form>
      );
    }}
  </Formik>
);
export default SimpleForm;
