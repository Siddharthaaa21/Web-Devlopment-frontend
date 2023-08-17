import React from 'react'
import  ReactDOM  from 'react-dom'

function PortalDemo() {
  return ReactDOM.createPortal(
   
      <h1>portals demo</h1>,
   document.getElementById('portal-creations')

  )
}

export default PortalDemo
// first step: methode takes two parameters
// jsx to render 
// dom node to mount element on to 

//why we need portal 
// having to deal with parent comp css when child is pop ups or etc 
