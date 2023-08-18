import React, { Component } from 'react'

 class HoverCounter extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
        count:0
         
      }
    }
    incrementCount=()=>{
        this.setState(previousState=>{
            return{count:previousState.count+1 }
        })
        return 
    }
    
  render() {
    const{count}=this.state
    return (
        
      <div>
        <h2 onMouseOver={this.incrementCount}>Hovered {count} times</h2>
      </div>
    )
  }
}

export default HoverCounter
