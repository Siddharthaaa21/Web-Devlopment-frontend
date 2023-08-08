import React from 'react'

function Colums() {
    const items=[]
  return (
    <React.Fragment>
        {/* {items.map(item => (
            <React.Fragment key ={items.id}>
            <h1>title</h1>
            <p>{item.title}</p>
            </React.Fragment>

        ))} */}
        

      <td>  name </td>
      <td>Siddhartha</td>
    </React.Fragment>
  )
}

export default Colums


//will give a console warning now that tr cannot be inside div tag so we will use react.fragment to remove the warning