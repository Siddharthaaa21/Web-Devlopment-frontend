import React, { Component } from 'react'
import Input from './Input'

 class focus_input extends Component {
    constructor(props){
        super(props)
     this.componetRef=React.createRef() 
      }
      clickHandler=()=>{
        this.componetRef.current.focusInput()

      }
  render() {
    return (
      <div>
        <input ref={this.componetRef}/>
        <button onClick={this.clickHandler} >focus</button>
      </div>
    )
  }
}

export default focus_input
