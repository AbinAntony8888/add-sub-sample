import React, { ChangeEvent, useState } from "react";
type InputTyp = {

  input:any;
  setInput:any;
  inputArray:any;
  setInputArray:any;
};
export default function UserInput({input,setInput,inputArray,setInputArray}:InputTyp) {
 

  const handleChange = (event: any): void => {
    setInput(event.target.value);
  };
  const handleSubmit = (event: any): void => {
    event.preventDefault();
    if (input !== "") {
      setInputArray([...inputArray, input]);
      setInput("");
    }
  };
  return (
    <div>
      <form action="" onSubmit={handleSubmit}>
        <br />
        <input
          className="bg-[#d8d5d5] mr-3"
          type="text"
          value={input}
          onChange={handleChange}
        />
      </form>

    </div>
  );
}
