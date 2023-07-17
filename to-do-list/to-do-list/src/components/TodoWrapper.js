import React from 'react';
import {useState} from 'react';
import {TodoForm} from './TodoForm';
import {v4 as uuidv4} from 'uuid';
uuidv4();//initialising and calling it.//same thing they are 

export const TodoWrapper =()=>{
    const [todos, setTodos]=useState([])
    //use state is used for state management to add react hooks well have to do 
    
    const addTodo = todo =>{
        // is a function  addTodo which takes todo as a parameter
            setTodo([...todos,
            {id: uuidv3(), task: todo,
                // since we need to set todos andadding ids which is called uuidv4 and the taks is to todo
                // passing in by default completed is false and is editing is false 
            completed: false, isEditing: false}])
            console.log(todos)

        }
        // this is the function which will add the todo to the list
    return (
        <div className='TodoWrapper'>


            <TodoForm addTodo={addTodo}/>
            {/* addTodo is a property and is equal to the funtion add todo */}
            {/* add todo is a funciton well create here  */}
        </div>
        
    )
}
