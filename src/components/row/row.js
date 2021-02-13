import React from 'react';
import ErrorButton from '../error-button';

const Row = ({ left, right }) => {
  const classes = 'col-md-6 align-items-center d-flex';
  return (
    <div className="row mb2">
      <div className={classes}>{left}</div>
      <div className={classes}>{right}</div>
    </div>
  );
};
export default Row;
