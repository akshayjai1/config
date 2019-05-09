import React from 'react';

const TextControl = (props) => {
  const { name, label, handleChange} = props;
  return <div>
    <label htmlFor={name}>{label}</label>
    <input type="text" name={name} onChange={handleChange}/>
  </div>
}

export default TextControl;