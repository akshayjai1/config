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
  
  const handleChildrenChange = childrenValue => {
    debugger;
    let newState;
    if(!state.children){
      newState = update(state,{
        children:{$set:[childrenValue]}
      })
    } else {
      newState = update(state,{
        children:{$push:[childrenValue]}
      })

    }
    setState(newState);
    handleChange(newState)
  }
  const handleChildChange = childValue => {
    debugger;
    const newState = update(state,{
      children: {
          $set: childValue
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
  return <div className="outer">
    {Control}
    <div className="inner">
    {Children}
    </div>
  </div>
}

export default CompositeControl1;