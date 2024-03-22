import React, { useState } from 'react'
// type InputTyp={
//     value:any
// }
export default function UserInput() {
    const[input,setInput]=useState("iuio")
    let newNum=({event}:{event:any})=>{
        setInput(event.target.value)
    }
  return (
    <div>
        <form action="">
      <input className='bg-[#d8d5d5] border-' type="text" defaultValue={"hai iam abin.........."}/>
      </form>
    </div>
  )
}
