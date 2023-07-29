import React from 'react'
import './style.css'

export default function CustomclassName(props_className) {
    let className =props_className.primary ? 'primary' : 'non-primary'
  return (
    <div>
        <h1 className={className}>hello </h1>
      
    </div>
  )
}
