import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import {addTask} from '../../JS/Actions/ListTasks'

const Addtask = () => {
    const [text,setText]=useState("")
    const dispatch=useDispatch()
    const handleAdd=(e)=>{
        e.preventDefault()
        if(text){
            dispatch(addTask({id:Math.random(), text, isDone:false}))
        }
        else{
            alert("can not add an empty task")
        }
    }
  return (
    <div>
      <Form onSubmit={handleAdd}>
        <Form.Control placeholder="enter task title" onChange={(e)=>setText(e.target.value)} value={text} ></Form.Control>
        <Button variant="primary" type="submit" onclick={handleAdd}>ADD</Button>
      </Form>
    </div>
  )
}

export default Addtask
