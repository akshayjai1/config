import React from 'react';

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
    return (
      <form>
        {/* Do your stuff here */}
        <button onClick={this.onSubmit} />
      </form>
    );
  }
}

export default Flexi;