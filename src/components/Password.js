import React, { Component } from 'react';
import Textarea from './Textarea';


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
      alert("Nieprawidłowe hasło. Podpowiedź: Producent oprogramowania w Poznaniu")
    }
    input.value = '';

  }

  handleText = (e) => {
    const value = e.target.value;
    // console.log(value)
    if(value === 'a'){
      this.setState({
        password: true,
      })
  }
}

render() {
  return (
    <div>
      <div id="active">
        <h1>Autorization</h1>
        <input id="pass" type="password" placeholder="wpisz hasło..." onChange={this.handleText}/>
        <button id="button" onClick={this.access}>Uzyskaj dostęp</button>
      </div>
      {!this.state.access ? null :
      <div><p className='correct'>Hasło prawidłowe, zapraszam do zapoznania się z generatorem szyfru :)</p><Textarea />
    </div>}
    </div>
  )
}
}

export default Password;
