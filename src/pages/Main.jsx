import { useEffect, useState } from 'react'
import TodoList from '../Components/Todo/TodoList';
import useTodos from '../hooks/useTodos';
import { useGetUserById, useUser } from '../hooks/useUser';
import { useQueryClient } from '@tanstack/react-query';
let rereder = 0

const Main = () => {
  const [userId, setUserId] = useState(null); 
  const queryClient = useQueryClient();
  const { todos, addTodo, deleteTodo } = useTodos();
  const { users } = useUser();
  let fetchUserByIdQuery = useGetUserById(userId);

  console.log(fetchUserByIdQuery, "fetchUserByIdQuery");
  console.log(rereder++, "rerenderrrrrrrrrr");
  const handleAddTodo = newTodoText => {
    addTodo(newTodoText);
  };

  
  const handleDeleteTodo = todoId => {
    deleteTodo(todoId);
  };

  const handleFetchUserById = async (userId) => {
    setUserId(userId);
  };

  return (
    <div className="min-h-screen">
      <h1>Main Component</h1>  
      <div>
        <h1>Todo App</h1>
        <TodoList todos={todos} onDelete={handleDeleteTodo} />
        <button onClick={() => handleAddTodo('New Todo')}>Add Todo</button>
        <br />
        <button  onClick={() => handleFetchUserById(3)}>Get user by id</button>
      </div>
    </div>
  )
}

export default Main;