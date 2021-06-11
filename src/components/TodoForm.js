import React, { useState, useEffect, useRef } from 'react'

export const TodoForm = (props) => {
    const [task, setTask] = useState(props.edit ? props.edit.value
        : '');

    const inputRef = useRef(null)

    useEffect(()=>{
        // I haven't learnt useEffect hook
        // but to put it simply it focuses the edit icon into the input area after reloading
        inputRef.current.focus()
    })

    const handleInput = e => {
        // it enables user to write the input as the task and useState has blocked it above
        setTask(e.target.value)
    }

    const preventSubmit = (e) => { 
        e.preventDefault();
        // on clicking the submit bottom the below line either creates of updates the todo with the given value
        props.onSubmit({
            id: Math.floor(Math.random() * 10000),
            text: task
        });

        // the below line removes the input text from the input bar after submission
        setTask('')
    };

    return (
        <div>
            <form 
            onSubmit={preventSubmit}
            className= 'todo-form'
            >
                {props.edit ? (<>
                <input
                type='text'
                className='todo-input edit'
                name='add-task'
                placeholder= 'Update Your Todo'
                value= {task}
                onChange = {handleInput}
                ref= {inputRef} />
                <button className="todo-button">Update</button>
                </>
                ) : (<>
                    <input
                    type='text'
                    className='todo-input'
                    name='add-task'
                    placeholder= 'Add a todo'
                    value= {task}
                    onChange = {handleInput}
                    ref= {inputRef} />
                    <button className="todo-button">Add Todo</button>
                    </>)}
                    
            </form>

        </div>
        )
}