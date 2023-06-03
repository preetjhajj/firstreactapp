import React, { useState } from 'react'
import './style.css'

const Todo = () => {
    const[todoIn, setTodoIN] = useState("")
    const todoInput = () => {
        return todoIn
    }
    console.log(todoInput)
    return ( 
        <>
        <div className='todo-wrap__outer'>
            <h2 className='text-center'>Todo List</h2>
            <div className='todo__list'>
                <input type="text" placeholder='Type text' className='typetext' value={todoIn} onChange={(e)=>setTodoIN(e.target.value)}/>
                <div className='showitems'>
                    <div className='eachitems'>
                        <h3>apple</h3>
                        <div className='todobtn-add'>+</div>
                        <div className='todobtn-trash'>del</div>
                    </div>
                </div>
                <button className='addbtn' onClick={()=>todoInput()}>Add Text</button>
                <div className='showname'>
                    <button className='removeall'>Checklist</button>
                </div>
            </div>
        </div>
        </>
    )
}

export default Todo