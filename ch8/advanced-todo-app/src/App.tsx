import './App.css'
import { useEffect, useState } from 'react';
import type { Todo } from './types/Todo';
import TodoForm from "./components/TodoForm"
import {TodoList} from "./components/TodoList"
import { addTodoApi, deleteTodoApi, gerAllTodos, toggleTodoApi } from './services/todoService';
// import { v4 as uuid } from 'uuid'; -> 더이상 안쓴다.

function App() {
  const [ todos, setTodos ] = useState<Todo[]>([]);
  const [ isLoading, setIsLoding ] = useState<boolean>(true);

  useEffect(()=>{
    const fetchTodosFromServer = async () : Promise<void> => {
      try {
        setIsLoding(true);
        const serverTodos = await gerAllTodos();
        setTodos(serverTodos);
      } catch (error) {
        console.log('서버에서 데이터를 가지고 오는 데 실패했습니다. :', error);
      } finally {
        setIsLoding(false);
      }
    };
    fetchTodosFromServer();
  }, []);

  const handleAddTodo = async (text: string): Promise<void> => {
    try {
      setIsLoding(true);
      const newTodo = await addTodoApi(text);
      setTodos(prevTodos => [...prevTodos, newTodo]);
      setIsLoding(false);
    } catch (error) {
      console.log('todo를 추가하는 데 실패했습니다: ', error)
    }
  }

  const handletoggleComplete = async (id: number): Promise<void> => {
    try {
      const todoToToggle = todos.find(todo => todo.id === id);
      if(!todoToToggle) return;
      const updatedTodo = await toggleTodoApi(id, todoToToggle.completed);
      setTodos(prevTodo =>
        prevTodo.map(todo => (todo.id === id ? updatedTodo : todo))
      );
    } catch (error) {
      console.log("완료 상태 변경에 실패했습니다. : ", error)
    }
  }

  const handleDeleteTodo = async (id: number): Promise<void> => {
    try {
      await deleteTodoApi(id);
      setTodos(prevTodos => prevTodos.filter(todo => todo.id !== id));
    } catch (error) {
      console.log("todo를 지우는데 실패했습니다. : ", error)
    }
  }

  return (
    <div>
      <h1>Todo List</h1>
      <TodoForm onAddTodo={handleAddTodo}/>
      {
        isLoading ? (
          <p>목록을 불러오는 중입니다...</p>
        ) : (
          <TodoList todos={todos} onToggleComplete={handletoggleComplete} onDeleteTodo={handleDeleteTodo}/>
        )
      }
    </div>
  )
}

export default App