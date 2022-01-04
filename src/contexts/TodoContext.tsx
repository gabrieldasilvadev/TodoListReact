import React from "react";
import { createContext } from "vm";
import { TodoContextType } from "./TodoContextType";

export const TodoContext = () =>
  createContext<TodoContextTypepe>({
    todos: [],
    addTodo: () => {},
    removeTodo: () => {},
    toddle: () => {},
  });
