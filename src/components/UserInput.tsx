import React, { ChangeEvent, useState } from "react";
type InputTyp = {
  item: string;
  index: number;
};
export default function UserInput() {
  const [input, setInput] = useState<string>("");
  const [inputArray, setInputArray] = useState<string[]>([]);

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
  const Delete = (indx: any) => {
    console.log("haii..........");
    const delArray = [...inputArray];
    delArray.splice(indx, 1);
    setInputArray(delArray);
  };
  const clearAll=()=>{
    setInputArray([]);
  }

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
            <button className="bg-[#e34e4e] mt-2 p-1" onClick={Delete}>
              Delete
            </button>
          </li>
        ))}
      </ol>
      <button onClick={clearAll} className="bg-[red] text-white mt-4 p-1">clear all</button>
    </div>
  );
}
