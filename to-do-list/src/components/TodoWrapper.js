import React, { useState } from 'react';
import { TodoForm } from './TodoForm';
import { v4 as uuidv4 } from 'uuid';
import { Todo } from './Todo';
import { EditTodoForm } from './EditTodoform';
uuidv4();//initialising and calling it.//same thing they are 

export const TodoWrapper = (selectedDay) => {
  const toggleComplete = id => {
    setTodo(todos.map(todo => todo.id === id ? { ...todo, completed: !todo.completed } : todo));
  }//=== returns boolenan value //
  const [todos, setTodo] = useState([])
  //use state is used for state management to add react hooks well have to do 

  const addTodo = todo => {

    setTodo([...todos,
    {
      id: uuidv4(), task: todo,

      completed: false, isEditing: false
    }]);
    console.log(todos)

  };
  const editTask = (task, id) => {
    setTodo(todos.map(todo => todo.id === id ? { todo, task, isEditing: !todo.isEditing } : todo))
  }
  const deleteTodo = id => {
    setTodo(todos.filter(todo => todo.id !== id))
    //filter is a function which makes a new array which excludes the id which is passed in the function
  }
  const editTodo = id => {
    setTodo(todos.map(todo => todo.id === id ? { todo, isEditing: !todo.isEditing } : todo))
  }
  // is a function  addTodo which takes todo as a parameter
  // since we need to set todos andadding ids which is called uuidv4 and the taks is to todo
  // passing in by default completed is false and is editing is false 
  // this is the function which will add the todo to the list
  return (
    <div className='TodoWrapper'>
      <h1>Todo List</h1>
      {/* TodoForm component for adding new todos */}
      <TodoForm addTodo={addTodo,selectedDay} />

      {/* Iterate over the todos array and render Todo components */}
      {todos.map((todo, index) => (
        todo.isEditing ? (
          <EditTodoForm editTodo={editTask} task={todo} />
        ) : (
          <Todo
            task={todo}
            key={index}
            toggleComplete={toggleComplete}
            deleteTodo={deleteTodo}
            editTodo={editTodo}
          />
        )
      ))}

    </div>
  )

}
//isEditing is a property which is set to false by default
