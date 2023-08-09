import React, { Component } from 'react'
import PureComp from './components/PureComp'

export class RegComp extends Component {
  render() {
    console.log('reggg')
    return (
      <div>
        reg comp {this.props.name}
        

        {/* <PureComp/> */}
        
      </div>
    )
  }
}

export default RegComp

//
