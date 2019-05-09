import React from 'react';

const SelectControl = props => {
  const { name, label, values =[], handleChange } = props;
  const options = values.map((value, index)=><option key={index} value={value}>{value}</option>);
  return <div>
    <label htmlFor={name}>{label}</label>
    <select name={name} onChange={handleChange}>
      <option value=''>Select</option>
      {options}
    </select>
  </div>
}

export default SelectControl;