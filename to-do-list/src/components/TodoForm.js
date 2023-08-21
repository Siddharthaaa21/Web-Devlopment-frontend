import React from 'react';
import {useState} from 'react';
import './TodoWrapper';






export const TodoForm =({addTodo,day})=>{
  
    const [value, setValue]=useState("")
     const handleSubmit = e=>{
        e.preventDefault();
       addTodo(value)
      
       setValue("")
         
     }
     //try using in state : react hooks for state management
       //is a prop.
    // importing that property from the todoWrapper.js
         // useState is a react hook which is used for state management

             // e.preventDefault() is used to prevent the default behaviour of the browser

      // passing the value to the addTodo function
     // setting the value to empty string

    return (
        
        <form className='TodoForm' onSubmit={handleSubmit}> 
        
      
        <input type="text" className='todo-input' value={value} 
        placeholder='What are the task for ' day={day}
        onChange={(e)=> setValue(e.target.value)}/>
    
        <button type='submit' className='Todo-button'>Commit</button>
       </form>
         /*  onChange={(e)=> console.log(e.taret.value)} is a like onchange in flutter ro see the state of the button lets say  console.log is for basically giving output e is for 
    event and placeholder is a hint text  */
    /* type signifies the type is submit of the button 
        className attribute sets the css class name for the button 
        
        other types of buttons are menu reset   Open menu and click me */


    )
}
