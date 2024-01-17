import React, { useContext, useState } from 'react'
import './taskform.css'
import {TaskContext} from '../context/TaskContext'
function TaskForm() {

    const {tasks, createTask} = useContext(TaskContext)
    const [title, setTitle] = useState('')
    const [description, setDescription] = useState('')

    const handleSubmit = (e) => {
        console.log(title + " " + description)
        e.preventDefault()
        createTask({
            title,
            description
        })
        setTitle('')
        setDescription('')
    }

    return (
        <div>
            <h3>Add a task</h3>
            <form onSubmit={handleSubmit}>
                <label htmlFor="title">Title:</label>
                <input id='title' name="title" value={title} onChange={(e) => setTitle(e.target.value)} />
                <label htmlFor="description">Description:</label>
                <textarea name="description" id='description' cols="25" rows="1" maxLength={115} value={description} onChange={(e) => setDescription(e.target.value)}></textarea>
                <button>Agregar</button>
            </form>
        </div>
    )
}

export default TaskForm