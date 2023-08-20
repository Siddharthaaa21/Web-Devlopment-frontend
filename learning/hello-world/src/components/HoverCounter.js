import React, { Component } from 'react'
import UpdatedComponent from './withCounter'

 class HoverCounter extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
        count:0
         
      }
    }
    // incrementCount=()=>{
    //     this.setState(previousState=>{
    //         return{count:previousState.count+1 }
    //     })
    //     return 
    // }
    
  render() {
    const{count,incrementCount}=this.props
    return (
        
      <div>
        <h2 onMouseOver={incrementCount}>  Hovered {count} times</h2>
      </div>
    )
  }
}

export default UpdatedComponent(HoverCounter)
