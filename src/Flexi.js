import React from 'react';
import CompositeControl from './components/CompositeControl';

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
  onSubmit = () => {
    // Replace data with composing your form data
    const data = {};
    this.props.onSubmit(data); // dont edit this line
  };

  render() {
    const { items = []} = this.props.config
    return (
      <form>
        {items.map((item, i) => <CompositeControl key={i} {...item} handleChange={this.handleChange}/>)}
        <button onClick={this.onSubmit} />
      </form>
    );
  }
}

export default Flexi;