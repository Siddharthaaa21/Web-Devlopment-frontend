import React, { Component } from 'react'
import RegComp from './RegComp'
import PureComp from './components/PureComp'

export class ParentComp extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
            name:'siddhartha'
      }
    }
    componentDidMount(){
        setInterval(()=>{
            this.setState({
                name: 'Siddharthaa'

            })
        },2000
        )
    }
    
  render() {
    console.log('parenttttt')

    return (
      <div>
        parent comp 
        <RegComp name={this.state.name}/>
        <PureComp name={this.state.name}/>

      </div>
    )
  }
}

export default ParentComp
