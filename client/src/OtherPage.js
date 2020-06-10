import React from 'react';
import { Link } from 'react-router-dom';

export default () => {
  return (
    <div>
      I'm some other page
      <br></br>
      <Link to="/">Go back to home page!</Link>
    </div>
  );
};
