import { useState } from 'react';
import TodoForm from './components/TodoForm'
import { v4 as uuid } from 'uuid';
import type { Todo } from './types/Todo';
import TodoList from './components/TodoList';
import './App.css'


const App: React.FC = () => {
  const [ todos, setTodos ] = useState<Todo[]>(() => {
    const storedTodos= localStorage.getItem("todos");
    return storedTodos ? JSON.parse(storedTodos) : [];
  })
  const addTodo = (text: string) => {
    const newTodo: Todo = {
      id: uuid(),
      text,
      completed: false,
    };

    const updatedTodos = [ ...todos, newTodo];
    console.log("updatedTodos -->", updatedTodos);
    setTodos(updatedTodos);
    localStorage.setItem("todos", JSON.stringify(updatedTodos));
  };

  const handleAddTodo = (text: string) => {
    console.log('New Todo:', text);
  };
      <TodoForm onAddTodo={handleAddTodo} />

  const deleteTodo = (id: string) => {
    const updatedTodos = todos.filter((todo) => todo.id != id);
    setTodos(updatedTodos);
    localStorage.setItem("todos", JSON.stringify(updatedTodos));
  }

  const toggleComple = (id: string) => {
    const updatedTodos = todos.map((todo) => todo.id === id ? {...todo, completed: !todo.completed} : todo);
    setTodos(updatedTodos);
    localStorage.setItem("todos", JSON.stringify(updatedTodos));
  }

  return (
    <div>
      <h1>Todo List</h1>
      <TodoForm onAddTodo={addTodo} />
      <TodoList todos={todos} onDeleteTodo={deleteTodo} onToggleComplete={toggleComple} />
    </div>
  )
}

export default App
