import React, { useEffect, useState } from 'react'

function HookCounterOne() {
    const[count,setcount]=useState(0)
    useEffect(()=>{
        document.title=`You clicked ${count} times`
    })
  return (
    <div>
      <button onClick={()=> setcount(count+1)}>click {count} times</button>
    </div>
  )
}

export default HookCounterOne
