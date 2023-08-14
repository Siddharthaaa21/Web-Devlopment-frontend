import React, { Component } from 'react'

export class RefsDemo extends Component {
    constructor(props){
        super(props)
        this.inputRef=React.createRef()
    }
    
    componentDidMount(){
        this.inputRef.current.focus()
        console.log(this.inputRef)
    }
    clickHandler=()=>{
        alert(this.inputRef.current.value)
    }
    // current is a property to get vurrent value 
    //creating ref method approach 
    //another stop is to add componentDidMount 
    
  render() {
    return (
      <div>
        <input type='text' ref={this.inputRef}/>
        <button onClick={this.clickHandler} >click</button>
        {/* to add docus lable here   */}

      </div>
    )
  }
}

export default RefsDemo
