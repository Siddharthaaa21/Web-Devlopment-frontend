import React, { Component } from 'react'

 class ClassCounter extends Component {
    increment =()=>{
        this.setState({        count:this.state.count+1
        })
    }
    constructor(props) {
        super(props)
      
        this.state = {
           count:0
        }
      }
      
  render() {
    const{count}=this.state;
 
    
    return (
        
      <div>
        <button onClick={this.increment}>Count = {this.state.count}</button>
        
      </div>
    )
  }
}

export default ClassCounter
