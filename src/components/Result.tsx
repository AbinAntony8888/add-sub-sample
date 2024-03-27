import React from "react";
import UserInput from "./UserInput";
type Reslt = {
  outPut: number;
};
function Result({ outPut }: Reslt) {

  return (
    <div>
      <div>
        <h1>{outPut}</h1>
      </div>
      <UserInput item={""} index={0}/>
      
    </div>
  );
}

export default Result;
