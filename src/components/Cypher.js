import React from 'react';


const Cypher = (props) => {

const cipherCode = 3;

function encrypt (letter) {
  const letterCode = letter.charCodeAt(0);
  console.log('lettercode', letterCode);
  const codedLetter = String.fromCharCode(letterCode + cipherCode)
  console.log('codedletter', codedLetter);
  return codedLetter

}

function decode (letter) {
  const letterCode = letter.charCodeAt(0);
  const codedLetter = String.fromCharCode(letterCode - cipherCode)
  console.log(codedLetter);
  return codedLetter
}

const cypherAll = encrypt(props.text);
console.log('array cypher', cypherAll)


return (
  <div>
    <h1>Szyfrowanko</h1>
    <textarea>{cypherAll}</textarea>
  </div>
)
}


export default Cypher;
