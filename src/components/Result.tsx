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
      <UserInput value={"React js sample............"}/>
    </div>
  );
}

export default Result;
