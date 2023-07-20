import React, { Component } from 'react'
class Welcome extends Component {
    //properties are used using this keywork no need to call props
    // class to become component we need to extend it to component class from react
    //second thing is we need to define render method which returns html
    render() {
        return <h1>hi {this.props.name}and i k that {this.props.Heroname}</h1>
        //can be directly use name and Heroname instead of this.props.name and this.props.Heroname by const {name,Heroname}=this.props 
    }
}
export default Welcome;
// they require ; at the end of the statement unlike the functional component for eg Greet.js
// make use of props in the class component so we need to use this.props
//cannot assign to read only property name of object '#<Object>'
