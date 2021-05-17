import React, { Component } from 'react';
import Password from './Password';
import './App.css';

class App extends Component {

  render() {

    return (
      <div className="App">
        <h1>Cypher code</h1>
        <Password />
      </div>
    );
  }
}

export default App;
