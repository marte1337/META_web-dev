import { useState } from 'react';

export default function InputComponent() { 
  const [inputText, setText] = useState('hello'); 

  function handleChange(e) { 
    setText(e.target.value); 
  } 

  return ( 
    <div className="Field1">
      <h2>Input Field (useState)</h2> 
      <input value={inputText} onChange={handleChange} onClick={() => setText('')}/> 
      <p>You typed: {inputText}</p> 
      <button onClick={() => setText('hello again')}> 
        Reset 
      </button> 
      <button onClick={() => setText('')}> 
        Clear 
      </button> 
    </div> 
  ); 
} 