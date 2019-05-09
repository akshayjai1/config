import React from 'react';

const TextControl = (props) => {
  const { name, label, } = props;
  return <div>
    <label htmlFor={name}>{label}</label>
    <input type="text" name={name}/>
  </div>
}

export default TextControl;