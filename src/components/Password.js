import React, { Component } from 'react';
import Textarea from './Textarea';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheckSquare } from '@fortawesome/free-solid-svg-icons';
import './Password.css';


class Password extends Component {

  state = {
    password: false,
    access: false,
  }



  access = () => {
    const input = document.getElementById('pass');
    const activeDiv = document.getElementById('active');
    const password = this.state.password;


    if(password === true){
      this.setState({
        access: true,
      })
      activeDiv.style.display = 'none';
    } else {
      alert("Incorrect password. Tip: Software producer in Poznan")
    }
    input.value = '';

  }

  handleText = (e) => {
    const value = e.target.value;
    const passwordValue = '!syn@psi.xyz';
    if(value === passwordValue){
      this.setState({
        password: true,
      })
  } else {
    this.setState({
      password: false,
    })
  }
}

render() {
  return (
    <div>
      <div id="active">
        <h1>Authorization</h1>
        <input id="pass" type="password" placeholder="enter the password..." onChange={this.handleText}/>
        <button id="button" onClick={this.access}>Get access</button>
      </div>
      {!this.state.access ? null :
      <div><p className='correct'>Success!
        <FontAwesomeIcon icon={faCheckSquare} />
        </p><Textarea className="textarea" />
    </div>}
    </div>
  )
}
}

export default Password;
