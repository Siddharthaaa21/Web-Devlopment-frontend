import React from 'react';
import {useState} from 'react';


//try using in state : react hooks for state management

export const TodoForm =({addTodo})=>{
    //is a prop.
    // importing that property from the todoWrapper.js
    const [value, setValue]=useState("")
    // useState is a react hook which is used for state management
     const handleSubmit = e=>{
        e.preventDefault();
        // e.preventDefault() is used to prevent the default behaviour of the browser
       addTodo(value)
       // passing the value to the addTodo function
       setValue("")
         // setting the value to empty string
     }

    return (
        
        <form className='TodoForm' onSubmit={handleSubmit}> 
        
      
        <input type="text" className='todo-input' 
        value={value} 
        placeholder='what is the task today'

        onChange={(e)=> console.log(e.target.value)}/>
    {/*  onChange={(e)=> console.log(e.taret.value)} is a like onchange in flutter ro see the state of the button lets say  console.log is for basically giving output e is for 
    event and placeholder is a hint text  */}
        <button type='submit' className='Todo-button'>Add</button>
        
        </form>
    /* type signifies the type is submit of the button 
        className attribute sets the css class name for the button 
        
        other types of buttons are menu reset   Open menu and click me */


    )
}
