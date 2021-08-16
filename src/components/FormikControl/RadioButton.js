import { ErrorMessage, Field } from 'formik';
import React from 'react';
import TextError from './TextError';

const RadioButton = (props) => {
  const { label, name, options, ...rest } = props;
  return (
    <div className="formControl">
      <label htmlFor="">{label}</label>
      <Field name={name} {...rest}>
        {({ field }) => {
          console.log('object', field);
          return options.map((option) => (
            <React.Fragment key={option.key}>
              <input
                type="radio"
                name=""
                id={option.value}
                {...field}
                value={option.value}
                checked={field.value === option.value}
              />
              <label htmlFor={option.value}>{option.key}</label>
            </React.Fragment>
          ));
        }}
      </Field>
      <ErrorMessage name={name} component={TextError} />
    </div>
  );
};

export default RadioButton;
