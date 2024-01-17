import React from 'react'
import { createContext } from 'react'
import { tasks as data } from '../tasks.js'
import { useState, useEffect } from "react";


export const TaskContext = createContext();
export function TaskContextProvider(props) {

    const [tasks, setTasks] = useState([])

    useEffect(() => {
        setTasks(data)
    }, [])
    
    function createTask(task){
        setTasks([...tasks, {
            title:task.title,
            id: tasks.length,
            description: task.description
        }])
    }

    function deleteTask(id){
        setTasks(tasks.filter(task => task.id !== id))
    }


    return (
        <TaskContext.Provider value={{
            tasks,
            createTask,
            deleteTask
        }}>
            {props.children}
        </TaskContext.Provider>
    )
}

