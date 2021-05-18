import React, { Component } from 'react';
import Cypher from './Cypher';


class Textarea extends Component {

    state = {
      text: '',
      changeText: false,
    }

    code = () => {
      const textarea = document.getElementById('txtarea');
      const value = textarea.value;
      console.log('wpisana wartosc', value);
      // console.log('działa code');
      if(value !== ''){
      this.setState({
        text: value,
        changeText: true,
      })
    } else {
      alert('Wpisz coś ziomuś, żeby zakodować')
      this.setState({
        text: '',
        changeText: false
      })
    }
    }

    uncode = () => {
      console.log('działa uncode')
    }

    clearArea = () => {
      const textarea = document.getElementById('txtarea');
      const value = textarea.value;
        this.setState({
          changeText: false
        })

    }

  render() {
  return (
    <div>
        <h1>Pole do zakodowania i odkodowania</h1>
        <textarea onChange={this.clearArea} id="txtarea" /><br />
        <button onClick={this.code}>Zakoduj</button>
        <button onClick={this.uncode}>Odkoduj</button>
        {!this.state.changeText  ? null : <Cypher text={this.state.text} />}
    </div>
  );
}
}

export default Textarea;
