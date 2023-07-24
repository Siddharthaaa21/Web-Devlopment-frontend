import React from 'react';
import {useState} from 'react';




export const EditTodoForm =({editTodo,task})=>{
  
    const [value, setValue]=useState(task.task)
     const handleSubmit = e=>{
        e.preventDefault();
       editTodo(value,task.id)
      
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
        placeholder='update'
        onChange={(e)=> setValue(e.target.value)}/>
    
        <button type='submit' className='Todo-button'>Updating</button>
       </form>
         /*  onChange={(e)=> console.log(e.taret.value)} is a like onchange in flutter ro see the state of the button lets say  console.log is for basically giving output e is for 
    event and placeholder is a hint text  */
    /* type signifies the type is submit of the button 
        className attribute sets the css class name for the button 
        
        other types of buttons are menu reset   Open menu and click me */


    )
}
