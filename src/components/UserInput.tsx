import React, { ChangeEvent, useState } from "react";
type InputTyp = {
  item: string,
  index:number;
};
export default function UserInput({item,index}:InputTyp) {
  const [input, setInput] = useState<string>("");
  const [inputArray, setInputArray] = useState<string[]>([]);

  // const handleChange=(event: ChangeEvent<HTMLInputElement>): void =>{
  const handleChange = (event: any): void => {
    setInput(event.target.value);
  };
  // const handleSubmit=(event:  React.FormEvent<HTMLFormElement>):void=>{
  const handleSubmit = (event: any): void => {
    event.preventDefault();
    setInputArray([...inputArray, input]);
    setInput("");
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

      <ol>
        {inputArray.map((item, index) => (
          <li>
          {/* //  key={index}>{item}  */}
          <input type="checkbox" />
          <input value={item} />
          <button className="bg-[#e34e4e] mt-2 p-1" >Delete</button>
           </li>
        ))}
      </ol>

    </div>
  );
}
