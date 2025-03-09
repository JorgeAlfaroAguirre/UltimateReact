import { useState } from "react";
import { Todo } from "./types";
import Dashboard from "./components/Dashboard";
import MainContent from "./components/MainContent";

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
      <Dashboard amount={todos.length} />
      <br />
      <MainContent todos={todos} addTodo={addTodo} />
    </>
  );
}

export default App;
