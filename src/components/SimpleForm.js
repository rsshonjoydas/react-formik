/* eslint-disable jsx-a11y/label-has-associated-control */
import React from 'react';

const SimpleForm = () => (
  <form>
    <label htmlFor="name">Name</label>
    <input type="text" id="name" name="name" />

    <label htmlFor="email" id="email" name="name">
      E-mail
    </label>
    <input type="email" id="email" name="email" />

    <label htmlFor="channel">Channel</label>
    <input type="text" id="channel" name="channel" />

    <button type="submit">Submit</button>
  </form>
);

export default SimpleForm;
