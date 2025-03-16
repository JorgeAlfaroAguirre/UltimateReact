import { useState } from "react";
import { Todo } from "./types";
import Dashboard from "./components/Dashboard";
import MainContent from "./components/MainContent";
import TodosContext from "./contexts/TodosContext";

function App() {
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
        <Dashboard />
        <MainContent />
      </TodosContext.Provider>
    </>
  );
}

export default App;
