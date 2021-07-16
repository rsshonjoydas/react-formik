import React from 'react';

const TextError = (props) => {
  const { children } = props;
  return <div className="error">{children}</div>;
};

export default TextError;
