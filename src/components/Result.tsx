import React from 'react'
type Reslt={
    outPut:number
}
function Result({outPut}:Reslt) {
  return (
    <div>
      <div>
        <h1>{outPut}</h1>
        </div>
    </div>
  )
}

export default Result
