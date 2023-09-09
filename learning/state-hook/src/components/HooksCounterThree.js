import React,{useState} from 'react'

function HooksCounterThree() {
    const[name,setName]=useState({firstName: ' ', lastName: ' '})
    //set name and initial name !
  return (
    <div>\
        <div>
        <input type="Text"
        value={name.lastName}
        onChange={e=>setName ({...name,firstName: e.target.value})}/>
        </div>
        <div>
        <input type="Text"
        value={name.firstName}
        onChange={e=>setName({...name,lastName:e.target.value})}
        />
        </div>
        <h2>first name is {name.firstName} </h2>
        <h2> second name is {name.lastName}</h2>
        {/* //since the results are mergeing so therefor will use spread operator to merge the result */}


      
    </div>
  )
}

export default HooksCounterThree

