import React, { Component } from 'react';
import Password from './Password';
import './App.css';

class App extends Component {

  render() {

    return (
      <div className="App">
        <header className='background'>
          <h1 className='title'>
            <span><a href="#">My Cypher Code</a></span>
          </h1>
        </header>
        <Password />
      </div>
    );
  }
}

export default App;
