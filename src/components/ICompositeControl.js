import React from 'react';
import TextControl from './TextControl';
import SelectControl from './SelectControls';
import update from 'immutability-helper';
const ICompositeControl = props => {
  const { name, label, type, children, values, handleChange, parentName,index='' } = props;
  let Control = null, Children = null, identifier = index;
  const firstRef = React.createRef();

  const [state, setState] = React.useState({
    [name]:{
      [name]:null,
      children:null
    },
  },[])
  
  const handleChildrenChange = (childrenValue,parent) => {
    let intermediateState = state;
    let currentParentParameter = Object.values(childrenValue)[0].parentName
    if(!state[currentParentParameter].children){
      intermediateState = update(state, {
        [parent]: {
          "children": {
            $set: {}
          }
        }
      });
    }
    const newState = update(intermediateState,{
      [currentParentParameter]: {
        "children": {
          $merge: {
              ...childrenValue
            }
          }
        }      
    });
    setState(newState);
    handleChange(newState,parent,parentName)
  }
  const handleChildChange = (childValue, parent) => {
    let currentParentParameter = Object.values(childValue)[0].parentName
    const newState = update(state,{
      [currentParentParameter]: {
          $merge: {
            "children":Object.values(childValue)[0]
          }
        }      
    });
    setState(newState);
    handleChange(newState,parent,parentName);
  }
  const handleFirstChange = event => {
    const name = event.target.name;
    const value = event.target.value;
    const newState = update(state,{
      [name]:{
        $merge:{
          [name]: value,
          parentName
        }
      }
    });
    setState(newState);
    handleChange(newState,parentName);

  }
  const commonProps = {
    name,
    label,
    handleChange: handleFirstChange,
    ref:firstRef,
    identifier
  }
  if(type === 'TextField') {
    Control = <TextControl {...commonProps}/>;
  } else if (type === 'DropDown') {
    Control = <SelectControl {...commonProps} values={values}/>;
  } 
  if(children !== undefined) {
    if(Array.isArray(children)) {
      Children = children.map((child, i) => <ICompositeControl parentName={name} {...child} key={i} handleChange={handleChildrenChange} index={`${identifier}._${i+1}`}/>)
    } else {
      Children = <ICompositeControl {...children} parentName={name} handleChange={handleChildChange}
        index={`${identifier}.${1}`}
      />
    }
  }
  return <div className="outer">
    {Control}
    <div className="inner">
    {Children}
    </div>
  </div>
}

export default ICompositeControl;