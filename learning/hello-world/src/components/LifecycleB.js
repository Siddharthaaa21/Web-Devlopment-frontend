import React, { Component } from 'react'

 class LifecycleB extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         name: 'Siddhartha'
      }
      console.log('LifecycleB constructor') //to understand the flow of execution 
    }
    
    static getDericedStateFromProps(props,state){
        //props and state are the parameters passed 
        console.log('LifecycleB getDerivedStateFromProps')
        return null
        // funtions should return null or state object everytime

    }
    componentDidMount(){
        console.log('componentDidMount')
        //what it does is it is called once the compoent is mounted mounted means it is inserted into the dom and but what is dom ? it is the document object which is created by the browser. and this is to modify dom node 

    }
  render() {
    console.log('render lifecycleA')
    return (
      <div>
        LifecycleB
        
      </div>
    )
  }
}

export default LifecycleB

// output: 
// LifecycleA constructor
// LifecycleA getDerivedStateFromProps
// render lifecycleA
// componentDidMount

