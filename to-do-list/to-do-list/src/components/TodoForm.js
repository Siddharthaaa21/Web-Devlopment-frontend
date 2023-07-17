import React from 'react';
import {useState} from 'react';


//try using in state : react hooks for state management

export const TodoForm =({addTodo})=>{
    // importing that property from the todoWrapper.js
    const [value, setValue]=useState("")
     const handleSubmit = e=>{
        e.preventDefault();
        // e.preventDefault() is used to prevent the default behaviour of the browser
       addTodo(value)
       setValue("")
     }

    return (
        
        <form className='TodoForm' onSubmit={handleSubmit}> 
        
      
        <input type="text" className='Todo-input' 
        value={value} 
        placeholder='what is the task today'

        onChange={(e)=> console.log(e.target.value)}/>
    {/*  onChange={(e)=> console.log(e.target.value)} is a like onchange in flutter ro see the state of the button lets say  console.log is for basically giving output e is for 
    event and placeholder is a hint text  */}
        <button type='submit' className='Todo-button'>Add</button>
        {/* type signifies the type is submit of the button 
        className attribute sets the css class name for the button 
        
        other types of buttons are menu reset   Open menu and click me */}
        </form>


    )
}
