
import FRInput from './FRInput'
import React, { Component } from 'react'

export class FRParentInput extends Component {
    constructor(props){
        super(props)
        this.inputRef=React.createRef()
    }
    clickHandler=()=>{
        this.inputRef.current.focus()
    }

  render() {
    return (
      <div>
        <FRInput ref={this.inputRef}/>
        {/* ref is forwaders fron parent to native input component  */}
        <button onClick={this.clickHandler}>focus input</button>
      </div>
    )
  }
}

export default FRParentInput
