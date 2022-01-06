import React, { createContext } from "react";
import { Todo } from "../models/Todo";
import { TodoContextType } from "./TodoContextType";

export const TodoContext = createContext<TodoContextType>({
  todos: [
    { id: 1, title: "Estudar React", done: true },
    { id: 2, title: "Estudar Java", done: false },
  ],
  addTodo: () => {},
  removeTodo: () => {},
  toggle: () => {},
});

const TodoProvider = (props: any) => {
  const addTodo = (title: string) => {
    console.log(`Adicionou ${title}`);
  };

  const removeTodo = (todo: Todo) => {
    console.log(`Removeu ${todo.title}`);
  };

  const toggle = (todo: Todo) => {
    console.log(`Alterou ${todo.title}`);
  };

  return (
    <TodoContext.Provider
      value={{
        todos,
        addTodo,
        removeTodo,
        toggle,
      }}
    >
      {props.children}
    </TodoContext.Provider>
  );
};

export default TodoProvider;
