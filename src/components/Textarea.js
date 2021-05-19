import React, { Component } from 'react';
import Cypher from './Cypher';
import './Textarea.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLock } from '@fortawesome/free-solid-svg-icons';
import { faLockOpen } from '@fortawesome/free-solid-svg-icons';


class Textarea extends Component {

    state = {
      text: [],
      changeText: false,
      textCode: false,
    }

    code = () => {
      const textarea = document.getElementById('txtarea');
      const value = textarea.value;

      if(value !== ''){
      this.setState({
        text: value,
        changeText: true,
        textCode: true,
      })
    } else {
      alert('Zaby zakodować, wpisz dowolny ciąg znaków, liter lub cyfr')
      this.setState({
        text: '',
        changeText: false,
        textCode: false,
      })
    }
    }

    uncode = () => {
      const textarea = document.getElementById('txtarea');
      const value = textarea.value;

      if(value !== ''){
      this.setState({
        text: value,
        changeText: true,
        textCode: false,
      })
    } else {
      alert('Aby odkodować, wklej zaszyfrowany kod')
      this.setState({
        text: '',
        changeText: false,
      })
    }
    }

    clearArea = () => {
        this.setState({
          changeText: false
        })

    }

  render() {
  return (
    <div>
        <h2 className="title2">Now, I encourage you to see the cipher generator.</h2>
        <div className="columns">
          <div className="cypher">
            <textarea className='textarea' onChange={this.clearArea} id="txtarea" /><br />
          <div className='buttons'>
          <button className='btn' onClick={this.code}>
              <FontAwesomeIcon className="icon" icon={faLock} />
          </button>
              <button className ='btn' onClick={this.uncode}>
              <FontAwesomeIcon className="icon" icon={faLockOpen} />
            </button>
          </div>
          </div>
          <div className="result">
            {!this.state.changeText  ? <textarea disabled className="textarea"></textarea> : <Cypher
              text={this.state.text}
              textCode={this.state.textCode}
              />}
        </div>
    </div>
  </div>
  );
}
}

export default Textarea;
