import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import Result from './components/Result';
import Buttons from './components/Buttons';

function App() {
  const[count,setCount]=useState(0)
  const addNumber=()=>{
    setCount(count+1)
  }
  const subNumber=()=>{
    setCount(count-1)
  }
  return (
    <div className="App">
      <br />
     <Result outPut={count}/>
     <br />
     <Buttons add={addNumber} sub={subNumber}/>
    </div>
  );

}

export default App;
