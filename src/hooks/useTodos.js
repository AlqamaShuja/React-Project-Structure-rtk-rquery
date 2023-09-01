import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query';

const fetchTodos = async () => {
  // Simulate fetching todos from an API
  return [
    { id: 1, text: 'Buy groceries' },
    { id: 2, text: 'Read a book' },
    // Add more todos here
  ];
};

const addTodo = async newTodoText => {
    console.log(newTodoText, "newTodoText");
  // Simulate adding a new todo
  // Return the newly created todo
};

const deleteTodo = async todoId => {
  // Simulate deleting a todo
  // Return the deleted todo ID
};

const useTodos = () => {
  const queryClient = useQueryClient();

  const { data: todos } = useQuery({ queryKey:['todos'], queryFn: fetchTodos });

  const addMutation = useMutation(addTodo, {
    onSuccess: () => {
      // Invalidate and refetch the todos query after adding a todo
      queryClient.invalidateQueries('todos');
    },
  });

  const deleteMutation = useMutation(deleteTodo, {
    onSuccess: () => {
      // Invalidate and refetch the todos query after deleting a todo
      queryClient.invalidateQueries('todos');
    },
  });

  return {
    todos,
    addTodo: addMutation.mutate,
    deleteTodo: deleteMutation.mutate,
  };
};

export default useTodos;
