import React from 'react'
type InputTyp={
    value:any
}
export default function UserInput({value}:InputTyp) {
  return (
    <div>
        <form action="">
      <input type="text" value={value} />
      </form>
    </div>
  )
}
