import React, { useContext } from 'react'
import './task.css'
import { TaskContext } from '../context/TaskContext'

function Task({ task }) {

  const { deleteTask } = useContext(TaskContext);

  const handleDelete = (e) => {
    deleteTask(task.id)
  }
  return (
    <div className='card' key={task.id}>
      <h3>{task.title}</h3>
      <p>{task.description}</p>
      <button onClick={handleDelete}>Delete</button>
    </div>
  )
}

export default Task