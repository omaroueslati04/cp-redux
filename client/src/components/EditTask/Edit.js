import React, { useState } from 'react'
import { useDispatch } from 'react-redux';
import { editTask } from '../../JS/Actions/ListTasks';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { Form } from 'react-bootstrap/lib/Navbar';

const Edit = ({task}) => {
    const[show,setShow]=useState(false);
    const handleClose=()=>setShow(false);
    const handleShow=()=>setShow(true);
    const[newTask,setNewTask]=useState(task.text)
    const dispatch=useDispatch()
    
    const handleEdit=()=>{
        dispatch(editTask(task.id, newtask))
        handleClose()
    }
  return (
      <div
      className="modal show"
      style={{ display: 'block', position: 'initial' }}
    >
      <Button variant="primary" onclick={handleShow}>edit </Button>
      <Modal show={show} onHide={handleClose}>
      <Modal.Header closeButton>
        <Modal.Title>edit</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form.Control placeholder="edit task" value={newTask} onChange={(e)=>setNewTask(e.target.value)}></Form.Control>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={handleClose}>close</Button>
        <Button variant="primary" onClick={handleEdit}>save changes</Button>
      </Modal.Footer>
      </Modal>
    </div>
    
  )
}

export default Edit
