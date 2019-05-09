import React from 'react';
import CompositeControl from './components/CompositeControl';

class Flexi extends React.Component {
  constructor(props) {
    super(props);
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
        {items.map(item => <CompositeControl {...item}/>)}
        <button onClick={this.onSubmit} />
      </form>
    );
  }
}

export default Flexi;