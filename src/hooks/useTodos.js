import { useState } from "react";

const useTodos = () => {
  const [todos, setTodos] = useState([]);
  const [newTodo, setNewTodo] = useState("");

  const addTodo = () => {
    if (newTodo.trim() === "") return;

    const newTodoItem = {
      id: todos.length + 1,
      title: newTodo,
      completed: false,
    };
    setTodos([...todos, newTodoItem]);
    setNewTodo("");
  };

  const deleteTodo = (todoId) => {
    setTodos(todos.filter((todo) => todo.id !== todoId));
  };

  const toggleTodoCompletion = (todoId) => {
    setTodos(
      todos.map((todo) =>
        todo.id === todoId ? { ...todo, completed: !todo.completed } : todo
      )
    );
  };

  const editTodoTitle = (todoId, newTitle) => {
    setTodos(
      todos.map((todo) =>
        todo.id === todoId ? { ...todo, title: newTitle } : todo
      )
    );
  };

  return {
    todos,
    newTodo,
    setNewTodo,
    addTodo,
    deleteTodo,
    toggleTodoCompletion,
    editTodoTitle,
  };
};

export default useTodos;
