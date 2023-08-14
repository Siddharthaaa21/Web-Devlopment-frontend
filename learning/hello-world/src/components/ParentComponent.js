import React, { Component } from 'react'
import ChildComponent from './ChildComponent'

 class ParentComponent extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         parentName:'Parent'
      }
    }
    greetParent(){
        alert('HEllo ${this.state.parentName}')
    }// ${this.state.parentName} templa te literals is a feature of ES6 not 
    //react js ES6 is a version of javascript.
    
  render() {
    return (
      <div>
        <ChildComponent greetHandler={this.greetParent}/>
        {/* is an attribute  */}
      </div>
    )
  }
}

export default ParentComponent

//give a performance boast  redencring 50 elements !! 
//never mutate the state always a new object that reflects the new state