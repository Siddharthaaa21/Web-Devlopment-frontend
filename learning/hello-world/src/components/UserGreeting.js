import React, { Component } from 'react'

 class UserGreeting extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         isLoggedIn: true
      }
    }
    
    
  render() {
    return (
      <div>
    {/* using ternary operator here */}
    {!this.state.isLoggedIn ? <div>Welcome Guest</div>:<div>Welcome Siddhartha</div>}
    {/* using if else operator 
    let message{
        if(this.state.isLoggedIn){
            message=<div>Welcome Siddhartha</div>
        }
        else{
            message=<div>Welcome Guest</div>
        }
        returrn <div>{message}</div>
    } */}
    {/* conditonal operator approach 
    return (
        this.state.isLoggedIn ? (<div> welocme siddhartha</>):(another item )
    ) */}
    {/* this.state.isLoggedIn &&<div>welcome siddhartha<div/> */}
        
       
       
        
      </div>
    )
  }
}

export default UserGreeting
