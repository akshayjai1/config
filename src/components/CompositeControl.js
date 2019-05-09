import React from 'react';
import TextControl from './TextControl';
import SelectControl from './SelectControls';

const CompositeControl = props => {
  const { name, label, type, children, values} = props;
  let Control = null, Children = null;
  const commonProps = {
    name,
    label
  }
  if(type === 'TextField') {
    Control = <TextControl {...commonProps} />;
  } else if (type === 'DropDown') {
    Control = <SelectControl {...commonProps} />;
  } 
  if(children !== undefined) {
    if(children.length) {
      Children = children.map(child => <CompositeControl {...child}/>)
    } else {
      Children = <CompositeControl {...children} />
    }
  }
  return <React.Fragment>
    {Control}
    {Children}
  </React.Fragment>
}

export default CompositeControl;