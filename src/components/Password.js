import React, { Component } from 'react';
import Textarea from './Textarea';


class Password extends Component {

  state = {
    password: false,
    access: false,
  }



  access = () => {
    const input = document.getElementById('pass');
    const password = this.state.password;
    
    if(password === true){
      this.setState({
        access: true,
      })
    } else {
      alert("Nieprawidłowe hasło. Podpowiedź: Producent oprogramowania w Poznaniu")
    }
    input.value = '';

  }

  handleText = (e) => {
    const value = e.target.value;
    console.log(value)
    if(value === '!syn@psi.xyz'){
      this.setState({
        password: true,
      })
  }
}

render() {
  return (
    <div>
      <h1>Autorization</h1>
      <input id="pass" type="password" placeholder="wpisz hasło..." onChange={this.handleText}/>
      <button onClick={this.access}>Uzyskaj dostęp</button>
      {!this.state.access ? null :
        <div><p className='correct'>Hasło prawidłowe, zapraszam do zapoznania się z generatorem szyfru :)</p><Textarea />
        </div>
      }
    </div>
  )
}
}

export default Password;
