import React from 'react'
import './style.css' 
const heading={
  fontSize:'50px',
  color:'pink'
}
function Stylesheets() {
  return (
    <div className='Stylesheets'>
        <h1 style={heading}>hi</h1>
        {/* similarily we do for error and success in the login esign in page working on currently */}
        {/* two tyle of css files one.css and one.module.css 
        both imported differently and used diffrently on is used as directly className=' '*and ohter one is used as style.name of the file*/}

      
    </div>
  )
}

export default Stylesheets
