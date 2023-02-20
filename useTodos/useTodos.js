import { useReducer, useEffect } from "react";
import { todoReducer } from "../components/reducer/todoReducer";
export const useTodos = () => {

  const initialState = [{
    id: new Date().getTime(),
    description: 'Learn React JS',
    done: false
  }];

  const init = () => {
    const storedTodos = localStorage.getItem('todos');
    return storedTodos !== null ? JSON.parse(storedTodos) : JSON.parse(initialState);
  }

  const [todos, dispatch] = useReducer(todoReducer, initialState, init);

  useEffect(() => {
    localStorage.setItem('todos', JSON.stringify(todos));
  }, [todos])

  const handleNewTodo = todo => {
    const action = {
      type: 'Add TODO',
      payload: todo
    }
    dispatch(action)
  }

  const handleRemoveTodo = id => {
    dispatch({
      type: 'Remove TODO',
      payload: id
    });
  }

  const handletoggleTodo = id => {
    dispatch({
      type: 'Toggle TODO',
      payload: id
    })
  }

  const todosCount = () => todos.length;
  const todosPendingCount = () => todos.filter(todo => !todo.done).length;

  return {
    init,
    initialState,
    handleNewTodo,
    handleRemoveTodo,
    handletoggleTodo,
    todos,
    todosCount,
    todosPendingCount
  }
}