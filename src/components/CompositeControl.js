import React from 'react';
import TextControl from './TextControl';
import SelectControl from './SelectControls';

const CompositeControl = props => {
  const { name, label, type, children, values, handleChange } = props;
  let Control = null, Children = null;
  const firstRef = React.createRef();
  const commonProps = {
    name,
    label,
    handleChange,
    ref:firstRef
  }
  // const handleFirstChange = event => {
  //   handleChange({
  //     value
  //   })
  // }
  if(type === 'TextField') {
    Control = <TextControl {...commonProps}/>;
  } else if (type === 'DropDown') {
    Control = <SelectControl {...commonProps} values={values}/>;
  } 
  if(children !== undefined) {
    if(children.length) {
      Children = children.map((child, i) => <CompositeControl {...child} key={i} handleChange={handleChange}/>)
    } else {
      Children = <CompositeControl {...children}  handleChange={handleChange}/>
    }
  }
  return <React.Fragment>
    {Control}
    {Children}
  </React.Fragment>
}

export default CompositeControl;