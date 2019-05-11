import React from 'react';

const TextControl = (props,ref) => {
  const { name, label, handleChange, className='', identifier = ''} = props;
  return <div>
    <label htmlFor={name}>{`${identifier} - ${label}`}</label>
    <input type="text" name={name} onChange={handleChange} ref={ref}/>
  </div>
}

export default React.forwardRef(TextControl);