import { useState } from "react";
import { Todo } from "./types";
import Dashboard from "./components/Dashboard";
import MainContent from "./components/MainContent";
import DashboardWithContext from "./components/DashboardWithContext";
import MainContentWithContext from "./components/MainContentWithContext";

function App() {
  const [todos, setTodo] = useState<Todo[]>([
    { id: 1, name: "Ordenar", completed: false },
    { id: 2, name: "Aspirar", completed: false },
  ]);

  const addTodo = (todo: Todo) => {
    setTodo([todo, ...todos]);
  };
  const [todosWithContext, setTodoWithContext] = useState<Todo[]>([
    { id: 1, name: "Ordenar", completed: false },
    { id: 2, name: "Aspirar", completed: false },
  ]);

  const addTodoWithContext = (todo: Todo) => {
    setTodoWithContext([todo, ...todosWithContext]);
  };

  return (
    <>
      <Dashboard amount={todos.length} />
      <MainContent todos={todos} addTodo={addTodo} />
      <br />
      <DashboardWithContext amount={todosWithContext.length} />
      <MainContentWithContext
        todos={todosWithContext}
        addTodo={addTodoWithContext}
      />
    </>
  );
}

export default App;
