import React, { useState } from 'react'

function HooksCounterTwo() {
  const initialCount=0
  const[count,setcount]=useState(initialCount)
    
  return (
    <div>
      Count: {count}
      <button onClick={()=> setcount(initialCount)}>Reset</button>
    <button onClick={()=>setcount(count +1)}>Increase</button>

      <button onClick={()=> setcount(count -1)}>Decrease </button>

      
    </div>
  )
}

export default HooksCounterTwo
