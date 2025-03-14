import { createContext } from "react";
import { Todo } from "../types";

type TodoContextType = {
  todos: Todo[];
  addTodo: (todo: Todo) => void;
};

export default createContext<TodoContextType>({} as TodoContextType);
