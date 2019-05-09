import React from 'react';
import CompositeControl from './components/CompositeControl';
import CompositeControl1 from './components/CompositeControl.1';

class Flexi extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  handleChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value
    })
  }
  handleChange1 = event => {
    this.setState(event);
  }
  onSubmit = () => {
    // Replace data with composing your form data
    const data = {
      ...this.state
    };
    console.log(data);
    // this.props.onSubmit(data); // dont edit this line
  };

  render() {
    const { items = []} = this.props.config
    return (
      <div>
        <br />
        {/* {items.map((item, i) => <CompositeControl key={i} {...item} handleChange={this.handleChange}/>)} */}
        <hr/>
        <br/>
        {items.map((item, i) => <CompositeControl1 key={i} {...item} handleChange={this.handleChange1}/>)}
        <button onClick={this.onSubmit} >Submit</button>
      </div>
    );
  }
}

export default Flexi;