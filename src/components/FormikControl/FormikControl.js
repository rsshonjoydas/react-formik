import React from 'react';
import CheckboxGroup from './CheckboxGroup';
import Input from './Input';
import RadioButton from './RadioButton';
import Select from './Select';
import Textarea from './Textarea';

const FormikControl = (props) => {
  const { control, ...rest } = props;
  switch (control) {
    case 'input':
      return <Input {...rest} />;
    case 'textarea':
      return <Textarea {...rest} />;
    case 'select':
      return <Select {...rest} />;
    case 'radio':
      return <RadioButton {...rest} />;
    case 'checkbox':
      return <CheckboxGroup {...rest} />;
    case 'date':
    default:
      return null;
  }
};

export default FormikControl;
