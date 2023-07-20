import React from 'react'
import Greet from './Greet'

function FunctionClick() {
    const clickHandler=()=>{
       console.log('pressed')
    }
  return (
    <div>
      <button onClick={clickHandler}>click</button>
      {/*clickHnadker is a fucntion not a fucntion call so do not add clickHAndle() */}

    </div>
  )
}

export default FunctionClick
