import React from "react";
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faPenToSquare} from '@fortawesome/free-solid-svg-icons';
import {faTrash} from '@fortawesome/free-solid-svg-icons'; 
import './TodoWrapper';
          
export const Todo = ({ task, toggleComplete, deleteTodo, editTodo }) => {
    return (
      <div className='Todo'>
        <p
          onClick={() => toggleComplete(task.id)}
          className={task.completed ? 'completed' : ''}
        >
          {task.task}
          {/* task is a prop received from the parent component */}
        </p>
        <div>
          <FontAwesomeIcon icon={faPenToSquare} onClick={() => editTodo(task.id)} />
          <FontAwesomeIcon icon={faTrash} onClick={() => deleteTodo(task.id)} />
          {/* icons usage */}
        </div>
      </div>
    );
  };
  