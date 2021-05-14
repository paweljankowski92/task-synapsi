import React, { Component } from 'react';

class Password extends Component {

  access = () => {
    console.log('działa access')
  }

render() {
  return (
    <div>
      <h1>Autorization</h1>
      <input type="text" placeholder="wpisz hasło..." />
      <button onClick={this.access}>Uzyskaj dostęp</button>
    </div>
  )
}
}

export default Password;
