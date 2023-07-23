import React from "react";
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faPenToSquare} from '@fortawesome/free-solid-svg-icons';
import {faTrash} from '@fortawesome/free-solid-svg-icons'; 
import './TodoWrapper';
          
export const Todo = ({task}) => {
    return (
        <div className='Todo'>
            <p onClick={()=> toggleComplete(task.id)} className={'${task.completed ? 'completed': ""}}> 
                         {task.task}
              {/* //task is a prop from 
              */}
            </p>
            <div>
             <FontAwesomeIcon icon={faPenToSquare}/>
             <FontAwesomeIcon icon={faTrash}/>
             {/* icons usage */}
            </div>
        </div>
            
            
        
    )
}