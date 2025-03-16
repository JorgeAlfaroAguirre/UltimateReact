import { ReactNode, useState } from "react";
import TodosContext from "../contexts/TodosContext";
import { Todo } from "../types";

type Props = {
  children: ReactNode;
};
export default function TodosProvider({ children }: Props) {
  const [todos, setTodo] = useState<Todo[]>([
    { id: 1, name: "Ordenar", completed: false },
    { id: 2, name: "Aspirar", completed: false },
  ]);

  const addTodo = (todo: Todo) => {
    setTodo([todo, ...todos]);
  };

  return (
    <>
      <TodosContext.Provider value={{ todos, addTodo }}>
        {children}
      </TodosContext.Provider>
    </>
  );
}
