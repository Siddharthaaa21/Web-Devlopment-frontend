import React, { Component } from 'react'

 class Eventbind extends Component {
  constructor(props){
    super(props)
    this.state={
      message: 'hello'
    }
  }
  clickHandler(){
    this.setState({
      message:'goodbye'
  })
  console.log(this)
}
  render() {

    return (
      <div>
        {this.state.message}
        <button ocClick={this.clickHandler.bind(this)}>click</button>
        {/* first approach to uses binfing methode. */}
{/* second apporach uses arrow function body
<button onClick={()=> this.clickhander()}><button/> */}
      </div>
    )
  }
}

export default Eventbind
