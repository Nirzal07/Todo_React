import './App.css';
import React, { useState } from 'react'
import { TodoList } from './components/TodoList';
import { Todo } from './components/Todo';

function App() {
  return (
    <div className="todo-app">
      <TodoList />
    </div>
  );
}

export default App;
