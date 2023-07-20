import React, { Component } from 'react'

 class Counter extends Component {
    constructor(props){
        super(props)
        this.state={
            count:0
        }
    }
    increment(){
        this.setState((prevState,props)=>({//what it does is it will print the previous value of count
            count:this.state.count+1//this is asynchronous
        }))//cannot call this.state.count directly since it is asynchronous
        console.log(this.state.count+1)//what it does is it will print the previous value of count
      
    }
  render() {
    return (
      <div>
        count-{this.state.count}
        <button onClick={()=>this.increment()}>increment</button>
        
      </div>
    )
  }
}

export default Counter 
