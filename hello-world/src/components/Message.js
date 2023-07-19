import React, { Component } from "react";


class Message extends Component {
    constructor(){
        super()// used for calling the constructor of the parent class
        this.state={
            message:'welcome visitor'
        }
    }
    changeMessage(){
        this.setState({
            message:'thank you for subscribing'
        })
    }
    render() {
        return (
            <div>
            <h1>
                {this.state.message}
                {/* so this is the use of state.message! */}
                
                {/*  now try to add a subscribe button  */}
            </h1>
            <button onClick={() => this.changeMessage()}>
                     subscribe</button>
         
            </div>
        );
    }
}

export default Message;
// step one to create a component state insie the class constructor
//  usidn super key word! and use statte object 
