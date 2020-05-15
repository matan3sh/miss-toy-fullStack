import React from 'react';
import spinner from '../../assets/img/spinner.gif';

export const Spinner = () => (
  <React.Fragment>
    <img
      src={spinner}
      alt='Loading...'
      style={{ width: '200px', margin: 'auto', display: 'block' }}
    />
  </React.Fragment>
);
