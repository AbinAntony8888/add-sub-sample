import React from "react";
type Butn = {
  add: () => void;
  sub: () => void;
};
export default function Buttons({ add, sub }: Butn) {
  return (
    <div>
      <button className="bg-[green] p-3 mr-5" onClick={add}>add</button>
      <button className="bg-[red] p-3" onClick={sub}>sub</button>
    </div>
  );
}
