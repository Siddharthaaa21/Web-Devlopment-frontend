import React, { Component } from 'react'
import LifecycleB from './LifecycleB'

 class LifecycleA extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         name: 'Siddhartha'
      }
      console.log('LifecycleA constructor') //to understand the flow of execution 
    }
    
    static getDericedStateFromProps(props,state){
        //props and state are the parameters passed 
        console.log('LifecycleA getDerivedStateFromProps')
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
      <div>
        LifecycleA

        
      </div>
     
      <LifecycleB/>  
       {/*child component  */}
      </div>
    )
  }
}

export default LifecycleA

// output: 
// LifecycleA constructor
// LifecycleA getDerivedStateFromProps
// render lifecycleA
// componentDidMount


// not after adiing the child component the output will be 
// LifecycleA constructor   
// LifecycleA getDerivedStateFromProps
// render lifecycleA
//Lifecycleb constructor  
//Lifecycleb getDerivedStateFromProps
//render lifecycleb
//componentDidMount for b and then 
//componentDidMount for a


