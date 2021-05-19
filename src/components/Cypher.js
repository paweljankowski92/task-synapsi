import React from 'react';

const Cypher = (props) => {

const cipherCode = 3;

function encode (char) {
  const letterCode = char.charCodeAt(0);
  const codedChar = String.fromCharCode(letterCode + cipherCode)
  return codedChar
}

function decode (char) {
  const letterCode = char.charCodeAt(0);
  const codedChar = String.fromCharCode(letterCode - cipherCode)
  return codedChar
}

const cypherText = [...props.text].map(char => encode(char)).join('');
const unCypherText = [...props.text].map(char => decode(char)).join('');


return (
  <div>
    <textarea className="textarea">
      {props.textCode ? cypherText : unCypherText }
    </textarea>
  </div>
)
}

export default Cypher;
