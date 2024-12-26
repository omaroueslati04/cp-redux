import React from 'react'
import { useDispatch } from 'react-redux'
import { deleteTask, doneTask } from '../../JS/Actions/ListTasks'

const Task = ({Task}) => {
    const dispatch=useDispatch()
  return (
    <div className='task-container'>
        <span className={Task.isDone ? "done" : null}>{Task.text}</span>
        <Edit task={task}></Edit>
        <Button variant='primary' onclick={()=>dispatch(deleteTask(task.id))}>delete</Button>
        <Button variant='primary' onclick={()=>dispatch(doneTask(task.id))}>{task.isDone ? "undone":"done"} </Button>

      
    </div>
  )
}

export default Task
