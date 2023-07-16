import React,{useState} from 'react';

export const TodoForm =()=>{

    return (
        
        <form className='TodoForm'> 
        
      
        <input type="text" className='Todo-input' 
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
xx