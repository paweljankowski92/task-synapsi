import React, { Component } from 'react';


class Textarea extends Component {

    code = () => {
      console.log('działa code')
    }

    uncode = () => {
      console.log('działa uncode')
    }

  render() {
  return (
    <div>
        <h1>Pole do zakodowania i odkodowania</h1>
        <textarea /><br />
        <button onClick={this.code}>Zakoduj</button>
        <button onClick={this.uncode}>Odkoduj</button>
    </div>
  );
}
}

export default Textarea;
