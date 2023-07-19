import React from 'react';

// function Greet() {
//     return <h1>Hello Siddhartha</h1>
// }
// export default Greet
//  first funtional component 
//prefered way to write functional component is arrow function
const Greet=(props)=>{

    //another way to use props will be  const Greet=({name,Heroname})=>{ return <h1>Hello {name} is {Heroname}</h1>}
    //another one could be const Greet = props =>{const {name.Heroname}=props return <h1>Hello {name} is {Heroname}</h1>
    console.log(props) 
    return<h1>Hello {props.name} is {props.Heroname}</h1>}
export default Greet
// we can change name inside qpp.js from Greet tp any other in the import and custom funtion tag
//can add export default Greet in the function itself like 
// export const Greet=()=> <h1>Hello Siddhartha</h1>