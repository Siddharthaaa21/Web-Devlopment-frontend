import React from 'react'
import Person from './Person'

function NameList() {
    const names =["Bruce","Clark","Diana"]
    const personist = names.map(name => <h2 key={name}>{name}</h2>);  return (
    <div>
      {/* key prop has to be unique warning could be incountered two children with same namws so to solve this we could use name and index atogethere
      <h2>{names[0]}</h2>
        <h2>{names[1]}</h2>
            <h2>{names[2]}</h2> */}
            {/* making use of map methode to render the kust name map methode us a js mathode so {they havw to be used in these braces} */}
            {/* { 
              names.map(name_var=> <h2> {name_var}</h2> )
            } */}
            {/* {nameList} */}
            <Person personist={personist} />
            {personist} 
            
    </div> 
  )
}

export default NameList
