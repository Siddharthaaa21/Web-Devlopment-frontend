import React from 'react';
import {TodoForm} from './TodoForm';
export const TodoWrapper =()=>{
    const addTodo = text =>{
    return (
        <div className='TodoWrapper'>


            <TodoForm addTodo={addTodo}/>
            {/* add todo is a funciton well create here  */}
        </div>
        
    )
}
