import React, { Component } from 'react'

  class Eventbind extends Component {
    constructor(props) {
        super(props){
            this.state={
                message:'hello'
            }
        }
        clickHandler(){
            // this.setState({
            //     message: 'goodbye'
            // })
            console.log.(this)
        }
  render() {
    return (
      <div>
        <button onlClick={this.clickHandlerd}
        
      </div>
    )
  }
}
export default Eventbind
