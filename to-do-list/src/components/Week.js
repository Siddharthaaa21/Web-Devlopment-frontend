import React, { Component } from 'react'
import { TodoWrapper } from './TodoWrapper';

 class Week extends Component {
     constructor(props) {
       super(props)
     
       this.state = {
        daysOftheWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'],
        selectedDay:null,  
       }
     }
     handleClick=(day)=>{
        this.setState({selectedDay:day});
        // <TodoWrapper/>
     }
  render() {
    const {daysOftheWeek,selectedDay}=this.state

    return (
      <div>
        <h2> weekly order of work</h2>
        {/* <TodoWrapper /> */}
        <div>

            {daysOftheWeek.map((day,index)=>(
                      
                      

            <button 
            key={index}
            onClick={()=>this.handleClick(day)}
            
            className={selectedDay===day ? 'active': ''}>
                {day}
            </button>
            ))}
        </div>
        {selectedDay&&(
            <div>
                {/* <h3> task for {selectedDay}</h3> */}
                <TodoWrapper selectedDay={selectedDay} />
                </div>

        )}
        
      </div>
    )
  }
}

export default Week
