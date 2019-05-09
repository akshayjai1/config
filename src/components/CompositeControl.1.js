import React from 'react';
import TextControl from './TextControl';
import SelectControl from './SelectControls';
import update from 'immutability-helper';
const CompositeControl1 = props => {
  const { name, label, type, children, values, handleChange } = props;
  
  let Control = null, Children = null;
  
  const firstRef = React.createRef();

  const [state, setState] = React.useState({
    // [name+"-1"]:firstRef.current.value || '',
    [name+"-1"]:'',
  },[])
  
  const handleChildrenChange = event => {
    debugger;
    const newState = update(state,{
      children:{$push:[{
        value:event.target.value
      }]}
    })
    setState(newState);
    handleChange(newState)
  }
  const handleChildChange = event => {
    debugger;
    const newState = update(state,{
      children: {
        [event.target.name]:{
          $set: event.target.value
        }
      }
    });
    setState(newState);
    handleChange(newState);
  }
  const handleFirstChange = event => {
    debugger;
    const newState = update(state,{
      [name+"-1"]:{
        $set:event.target.value
      }
    });
    setState(newState);
    handleChange(newState);

  }
  const commonProps = {
    name,
    label,
    handleChange: handleFirstChange,
    ref:firstRef
  }
  if(type === 'TextField') {
    Control = <TextControl {...commonProps}/>;
  } else if (type === 'DropDown') {
    Control = <SelectControl {...commonProps} values={values}/>;
  } 
  if(children !== undefined) {
    if(children.length) {
      Children = children.map((child, i) => <CompositeControl1 {...child} key={i} handleChange={handleChildrenChange}/>)
    } else {
      Children = <CompositeControl1 {...children}  handleChange={handleChildChange}/>
    }
  }
  return <React.Fragment>
    {Control}
    {Children}
  </React.Fragment>
}

export default CompositeControl1;