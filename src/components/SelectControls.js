import React from 'react';

const SelectControl = (props, ref) => {
  const { name, label, values =[], handleChange, identifier = '' } = props;
  
  const options = values.map((value, index)=><option key={index} value={value}>{value}</option>);

  return <div>
    <label htmlFor={name}>{`${identifier} - ${label}`}</label>
    <select name={name} onChange={handleChange} ref={ref}>
      <option value=''>Select</option>
      {options}
    </select>
  </div>
}

export default React.forwardRef(SelectControl);