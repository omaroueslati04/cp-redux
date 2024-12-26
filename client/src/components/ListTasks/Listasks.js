import React, { useState } from 'react'
import { useSelector } from "react-redux";


const Listasks = () => {
const list= useSelector(state=>state.listReducer.listTasks)
const[status,setStatus]=useState("all")
    return (
    <div>
        <Button onClick={()=>setStatus("All")}>all</Button>
        <Button onClick={()=>setStatus("DONE")}>DONE</Button>
        <Button onClick={()=>setStatus("UNDONE")}>UNDONE</Button>
        { status==="DONE" ?
        list.fliter((el)=>el.isDone===true)
    .map((el)=><Task task={el} key={el.id}/>):
    status==='UNDONE' ? 
    list.fliter((el)=>el.isDone===false)
    .map((el)=><Task task={el} key={el.id}/>):
    list.map(el=><Task task={el} key={el.id}></Task>)}

    </div>
  )
}

export default Listasks
