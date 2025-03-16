# Gestión de estado Global

## Prop Driling

App.tsx

```TypeScript
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
      <MainContent todos={todos} addTodo={addTodo} />

    </>
  );
}

export default App;

```

Dashboard.tsx

```Typescript
type Props = { amount: number };

const Dashboard = ({ amount }: Props) => {
  return <>Number of Todos {amount}</>;
};

export default Dashboard;
```

MainContent.tsx

```Typescript
import { Todo } from "../types";
import TodoList from "./TodoList";

type Props = {
  todos: Todo[];
  addTodo: (todo: Todo) => void;
};

const MainContent = ({ todos, addTodo }: Props) => {
  return (
    <>
      <h2>Todos</h2>
      <TodoList todos={todos} addTodo={addTodo} />
    </>
  );
};

export default MainContent;

```

## Context

App.tsx

```TypeScript
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

```

Dashboard.tsx

```Typescript
import { useContext } from "react";
import TodosContext from "../contexts/TodosContext";

type Props = {};

const Dashboard = ({}: Props) => {
  const { todos } = useContext(TodosContext);
  return <>Number of Todos {todos.length}</>;
};

export default Dashboard;

```

MainContent.tsx

```Typescript
import { useContext } from "react";
import TodosContext from "../contexts/TodosContext";

type Props = {};

const Dashboard = ({}: Props) => {
  const { todos } = useContext(TodosContext);
  return <>Number of Todos {todos.length}</>;
};

export default Dashboard;

```

## Custom Provider

Patron componente de alto orden:

```Typescript
import Dashboard from "./components/Dashboard";
import MainContent from "./components/MainContent";
import TodosProvider from "./providers/TodosProvider";

function App() {
  return (
    <>
      <TodosProvider>
        <Dashboard />
        <MainContent />
      </TodosProvider>
    </>
  );
}

export default App;
```

```TypeScript
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
```
