import React, {useState} from 'react'

function HooksCounter() {
  const [count,setcount] =useState(0)
  //sets count to 0 
  //array destructureing
  //accepts values of initial and current value of the State ad also updates it 
  return (
    <div>
      <button onClick={()=>setcount(count+1)}>count hooks ={count}</button>
    </div>
  )
}
//array destructuring and using them in render funtion 
//accepts and set counts value


//rules
//first time the state value is created is set to 0 whihc is default here.
//only call hooks at the top level 
//only call from react funtional component
//

export default HooksCounter
