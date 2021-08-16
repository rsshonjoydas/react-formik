import { Form, Formik } from 'formik';
import React from 'react';
import * as Yup from 'yup';
import FormikControl from './FormikControl';

const FormikContainer = () => {
  const dropdownOptions = [
    { key: 'Select an option', value: '' },
    { key: 'Option 1', value: 'options1' },
    { key: 'Option 2', value: 'options2' },
    { key: 'Option 3', value: 'options3' },
  ];

  const radioOptions = [
    { key: 'Option 1', value: 'rOptions1' },
    { key: 'Option 2', value: 'rOptions2' },
    { key: 'Option 3', value: 'rOptions3' },
  ];

  const checkboxOptions = [
    { key: 'Option 1', value: 'cOptions1' },
    { key: 'Option 2', value: 'cOptions2' },
    { key: 'Option 3', value: 'cOptions3' },
  ];

  const initialValues = {
    email: '',
    description: '',
    selectOption: '',
    radioOption: '',
    checkboxOption: [],
  };
  const validationSchema = Yup.object({
    email: Yup.string().required('Required'),
    description: Yup.string().required('Required'),
    selectOption: Yup.string().required('Required'),
    radioOption: Yup.string().required('Required'),
    checkboxOption: Yup.array().required('Required'),
  });
  const onSubmit = (values) => console.log('Form data', values);
  return (
    <Formik initialValues={initialValues} validationSchema={validationSchema} onSubmit={onSubmit}>
      {() => (
        <Form>
          <FormikControl control="input" type="email" label="Email" name="email" />
          <FormikControl control="textarea" label="Description" name="description" />
          <FormikControl
            control="select"
            label="Select a topic"
            name="selectOption"
            options={dropdownOptions}
          />
          <FormikControl
            control="radio"
            label="Radio Topic"
            name="radioOption"
            options={radioOptions}
          />
          <FormikControl
            control="checkbox"
            label="Checkbox Topic"
            name="checkboxOption"
            options={checkboxOptions}
          />
          <button type="submit">Submit</button>
        </Form>
      )}
    </Formik>
  );
};

export default FormikContainer;
