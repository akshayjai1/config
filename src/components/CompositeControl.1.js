import React from 'react';
import TextControl from './TextControl';
import SelectControl from './SelectControls';

const CompositeControl1 = props => {
  const { name, label, type, children, values, handleChange } = props;
  let Control = null, Children = null;
  const firstRef = React.createRef();
  const handleFirstChange = event => {
    handleChange({
      value: firstRef.current.value
    })
  }
  const commonProps = {
    name,
    label,
    handleFirstChange,
    ref:firstRef
  }
  if(type === 'TextField') {
    Control = <TextControl {...commonProps}/>;
  } else if (type === 'DropDown') {
    Control = <SelectControl {...commonProps} values={values}/>;
  } 
  if(children !== undefined) {
    if(children.length) {
      Children = children.map((child, i) => <CompositeControl1 {...child} key={i} handleChange={handleChange}/>)
    } else {
      Children = <CompositeControl1 {...children}  handleChange={handleChange}/>
    }
  }
  return <React.Fragment>
    {Control}
    {Children}
  </React.Fragment>
}

export default CompositeControl1;