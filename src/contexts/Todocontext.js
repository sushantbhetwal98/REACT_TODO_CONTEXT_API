import { createContext, useContext } from "react";

export const TodoContext = createContext({
  todos: [
    {
      id: 1,
      todo: "Test Todo",
      isCompleted: false,
    },
  ],
  addTodo: (todo) => {},
  updateTodo: (id, todo) => {},
  deleteTodo: (id) => {},
  toggleComplete: (id) => {},
});

export const TodoProvider = TodoContext.Provider;

// so that we must not import useContext and TodoContext
export const useTodo = () => {
  return useContext(TodoContext);
};
