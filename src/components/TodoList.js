import React, {useState} from 'react'
import { TodoForm } from './TodoForm'
import { Todo } from './Todo'
 
export const TodoList = () => {
    // Here todos and setTodos are passed as state because everytime 
    //our newTodos array is updated we need to reload and show the newTodos 
    const [todos, setTodos] = useState([])

    const addTodo = todo => {
        // this function adds the newly created todo into the todolist
        if (!todo.text || /^\s*$/.test(todo.text)) {
            // this conditional checks whether the new todo is empty or not 
            // and incase it is empty it returns nothing
            return;
        }

        const newTodos = [todo, ...todos]; // this is the todolist and keeps updating as new todos are passed

        setTodos(newTodos); // everytime the newTodos is updated it is reloaded and rendered because of this
    };

    const updateTodo = (todoId, newValue) => {
        if (!newValue.text || /^\s*$/.test(newValue.text) ){
            return;
        }
        
        // the below line loops through the todos and updates it if user has edited it
        setTodos(prev => prev.map(item => (item.id === todoId ? newValue :item)))

    }


    const removeTodo = id => {
        // the line below filters the todo item and removes the item where close button is pressed
        const removeArr = [...todos].filter(todo => todo.id !== id);
        // setTodos is updated and the component is reloaded after removing the removed item
        setTodos(removeArr)
    }

    const completeTodo = id => {
        // very simple function
        // it selects the todo item with given id and toggles its isComplete state and nothing more
        // it doesn't adds or removes the older items
        let updatedTodos = todos.map(todo => {
            if (todo.id===id){
                todo.isComplete = !todo.isComplete
            }
            return todo;
        });
        setTodos(updatedTodos);
    };
    return (
        <div>
            <h1>What's the plan for today?</h1>
            <TodoForm onSubmit={addTodo} />
            <Todo todos = {todos} completeTodo = {completeTodo} removeTodo = {removeTodo} updateTodo = {updateTodo} />
        </div>
    );
}