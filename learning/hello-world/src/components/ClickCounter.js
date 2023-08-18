import React, { Component } from 'react'
import UpdatedComponent from'./withCounter'
 class ClickCounter extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         count:0
      }
    } 
    incrementCount=()=>{
        this.setState(prevState_checker=>{
            return{count:prevState_checker.count+1}
        })
        //since we need the argument sets previous value therefore it wont return a normal object
        //will take a fucntion which gets prevous state and return new state
    }
  render() {
    const{count }=this.state
    // extract the con=unt value and display as the part of heading 

    return (
      <div>
        <button onClick={this.incrementCount}>Click {count} times</button>
        {/* <ClickCounter/> */}
      </div>
    )
  }
}

export default UpdatedComponent(ClickCounter) 
//class component

//how to use the same counter funtionailty ;;;; use in app component but if counter component are scattered then ? there has to be shared using concepts of higher order component