import React from 'react'
import './tasklist.css'
import Task from './Task'
import {useContext} from 'react'
import {TaskContext} from '../context/TaskContext.jsx'
function TaskList() {

  const {tasks} = useContext(TaskContext);

  return (
    <div className="task-container">
        {tasks.map((task, index) => (
          <Task key={index} task={task} />
        ))}
      </div>
  )
}

export default TaskList