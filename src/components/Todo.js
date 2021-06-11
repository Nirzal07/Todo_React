import React, { useState } from 'react'
import {IoMdClose} from 'react-icons/io'
import {FaEdit} from 'react-icons/fa'
import { TodoForm } from './TodoForm';


export function Todo({todos, completeTodo, removeTodo, updateTodo}) {
    const [edit, setEdit] = useState({
        id: null,
        value: ''
    }); 

    const submitUpdate = value => {
        // when the todo is edited and submit is pressed
        // update todo is defined in TodoList because TodoList component deals with the list of todo item
        // and updateTodo needs to update the existing todo
        updateTodo(edit.id, value);

        // resets the update 
        setEdit({
            id: null,
            value: ''
        });
    };

    if (edit.id) {
        return <TodoForm edit= {edit} onSubmit= {submitUpdate} />
    }

    let output = todos.map((todo, index) => (
        <>
        <div
            className= {todo.isComplete ? 'todo-row complete' : 'todo-row'}
            key={index}
            >
                <div key= {todo.id} onClick= {() => completeTodo(todo.id)}>
                    {todo.text}
                </div>
                <div className='icons'>
                    < IoMdClose onClick= {() => removeTodo(todo.id)}
                    className = 'delete-icon'
                    />
                    < FaEdit onClick= {() => setEdit({id: todo.id, value: todo.text})}
                    className = 'edit-icon'/>
                </div>
        </div>
        </>
    ));
    return output
}

// line 41 gives the id and text of the todo to be edited which triggers the setEdit function
// which creates a TodoList Component with value as todo.text as in line 41 itself
// Also the TodoForm for this one re-renders below the addtodo TodoForm