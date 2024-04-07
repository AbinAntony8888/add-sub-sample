import React, { useState } from 'react';
// import logo from './logo.svg';
import './App.css';
import Result from './components/Result';
import Buttons from './components/Buttons';
import UserInput from './components/UserInput';

function App() {
  const[count,setCount]=useState(0)
  const [input, setInput] = useState<string>("");
  const [inputArray, setInputArray] = useState<string[]>([]);
  const addNumber=()=>{
    setCount(count+1)
  }
  const subNumber=()=>{
    setCount(count-1)
  }
  
  const clearAll=()=>{
    setInputArray([]);
  }
  return (
    <div className="App">
       <br />
     <Buttons add={addNumber} sub={subNumber} clearAl={clearAll}/>
      <br />
      <UserInput  setInput={setInput} inputArray={inputArray}
      setInputArray={setInputArray} input={input} />
     <Result outPut={count} output2={input} inputArray={inputArray} item={""} index={0} setInputArray={setInputArray} />
     <br />

   
   
    
    </div>
  );

}

export default App;
