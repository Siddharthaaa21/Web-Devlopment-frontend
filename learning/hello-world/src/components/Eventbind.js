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
        <button onClick={this.clickHandler.bind(this)}>click</button>

        {/* first approach to uses binfing methode. */}
{/* second apporach uses arrow function body
bind methode is the third approach which is the best approach and usedquite often. also the bind is the best approach for passing the parameter to the event handler. 
<button onClick={()=> this.clickhander()}><button/> */}
      </div>
    )
  }
}

export default Eventbind
