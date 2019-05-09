import React from 'react';

const TextControl = (props,ref) => {
  const { name, label, handleChange} = props;
  return <div>
    <label htmlFor={name}>{label}</label>
    <input type="text" name={name} onChange={handleChange} ref={ref}/>
  </div>
}

export default React.forwardRef(TextControl);