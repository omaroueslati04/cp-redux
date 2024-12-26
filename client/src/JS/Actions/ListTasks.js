import { ADD_TASK, DELETE_TASK, DONE_TASK, EDIT_TASK } from "../ActionTypes/ListTasks"

export const addTask=(newtask)=>{
    return{
        type:ADD_TASK,
        payload:newtask
    }
}
export const deleteTask=(id)=>{
    return{
        type:DELETE_TASK,
        payoad:id
    }
}
export const doneTask=(id)=>{
    return{
        type:DONE_TASK,
        payload:id
    }
}
export const editTask=(id,newtask)=>{
    return{
        type:EDIT_TASK,
        payload:{id,newtask}
    }
}