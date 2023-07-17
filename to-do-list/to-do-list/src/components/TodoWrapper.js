import React from 'react';
import {TodoForm} from './TodoForm';
export const TodoWrapper =()=>{
    const [todos, setTodos]=useState([])
    const addTodo = todo =>{
        
            setTodo([...todos,{id: uuidv3(), task: todo,
            completed: false, isEditing: false}])

        }
        // this is the function which will add the todo to the list
    return (
        <div className='TodoWrapper'>


            <TodoForm addTodo={addTodo}/>
            {/* add todo is a funciton well create here  */}
        </div>
        
    )
}
