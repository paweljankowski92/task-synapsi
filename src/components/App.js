import React, { Component } from 'react';
import Textarea from './Textarea';
import Password from './Password';
import './App.css';

class App extends Component {
  state = {
    
  }

  render() {
    return (
      <div className="App">
        <h1>Cypher code</h1>
        <Password />
        <Textarea />
      </div>
    );
  }
}

export default App;
