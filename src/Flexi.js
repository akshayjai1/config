import React from 'react';
// import CompositeControl from './components/CompositeControl';
import ICompositeControl from './components/ICompositeControl';

class Flexi extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }


  handleIChange = event => {
    this.setState(event);
  }
  onSubmit = (event) => {
    // Replace data with composing your form data
    const data = {
      ...this.state
    };
    event.preventDefault();
    console.log(data);
    this.props.onSubmit(data); // dont edit this line
  };
  renderComposite = (item, i) => {
    return <ICompositeControl key={i} index={`${i+1}`} {...item} handleChange={this.handleIChange}/>
  }
  render() {
    const { items = []} = this.props.config
    return (
      <form>
        {items.map(this.renderComposite)}
        <button onClick={this.onSubmit} className="submit">Submit</button>
      </form>
    );
  }
}

export default Flexi;