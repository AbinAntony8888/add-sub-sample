import React from "react";
import UserInput from "./UserInput";
type Reslt = {
  outPut: number;
  output2:any;
  // Delete:()=>void;
  inputArray:any;
  item:any;
  index:any;
  setInputArray:any;
};
function Result({ outPut,output2 ,inputArray,item,index,setInputArray}: Reslt) {
  const Delete = (indx: any) => {
    console.log("haii..........");
    const delArray = [...inputArray];
    delArray.splice(indx, 1);
    setInputArray(delArray);
  };

  return (
    <div>
      <div>
        <h1>{outPut}</h1>
        <ol>
        {inputArray.map((item: string | number | readonly string[] | undefined, index: any) => (
          <li>
            <input type="checkbox" />
            <input value={item} />
            <button className="bg-[#e34e4e] mt-2 p-1" onClick={Delete}>
              Delete
            </button>
          </li>
        ))}
      </ol>


      </div>
    </div>
  );
}

export default Result;
