import React from 'react';

const SelectControl = (props, ref) => {
  const { name, label, values =[], handleChange } = props;
  
  const options = values.map((value, index)=><option key={index} value={value}>{value}</option>);

  // React.useEffect(()=> {
  //   handleChange({
  //     target: {
  //       name,
  //       value: ''
  //     }
  //   });
  // },[])

  return <div>
    <label htmlFor={name}>{label}</label>
    <select name={name} onChange={handleChange} ref={ref}>
      <option value=''>Select</option>
      {options}
    </select>
  </div>
}

export default React.forwardRef(SelectControl);