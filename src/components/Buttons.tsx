import React from "react";
type Butn = {
  add: () => void;
  sub: () => void;
  clearAl:()=>void;
};
export default function Buttons({ add, sub ,clearAl}: Butn) {
  return (
    <div>
      <button className="bg-[#1e641e] p-3 mr-5" onClick={add}>add</button>
      <button className="bg-[red] p-3" onClick={sub}>sub</button>
      <br />
      <button onClick={clearAl} className="bg-[red] text-white mt-4 p-1">clear all</button>        

    </div>
  );
}
