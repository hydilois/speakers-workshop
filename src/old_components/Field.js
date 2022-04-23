/** @format */

import React from 'react';

const Field = ({ value, onChange, label }) => {
  return (
    <div>
      <div className='ui icon input'>
        <i className='search icon'></i>
        <input
          type='text'
          onChange={(e) => onChange(e.target.value)}
          placeholder={label}
          value={value}
        />
      </div>
      <br />
      {value}
    </div>
  );
};

export default Field;
