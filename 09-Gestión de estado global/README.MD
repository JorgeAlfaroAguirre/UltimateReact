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

## Custom Hook

useTodos.ts

```TypeScript
import { useContext } from "react";
import TodosContext from "../contexts/TodosContext";

export default function useTodos() {
  return useContext(TodosContext);
}

```

Dashboard.tsx

```TypeScript
import useTodos from "../hooks/useTodos";

type Props = {};

const Dashboard = ({}: Props) => {
  const { todos } = useTodos();
  return <>Number of Todos {todos.length}</>;
};

export default Dashboard;

```

MainContent.tsx

```TypeScript
import TodoList from "./TodoList";

type Props = {};

const MainContent = ({}: Props) => {
  return (
    <>
      <h2>Todos</h2>
      <TodoList />
    </>
  );
};

export default MainContent;
```

useTodos.ts

```TypeScript
import useTodos from "../hooks/useTodos";

type Props = {};
const TodoList = ({}: Props) => {
  const { todos, addTodo } = useTodos();
  return (
    <>
      <button
        onClick={() =>
          addTodo({
            id: Math.random(),
            name: "Dormir",
            completed: true,
          })
        }
      >
        Agregar
      </button>
      <ul>
        {todos.map((t) => (
          <li key={t.id}>
            {t.name} {t.completed ? "Terminada" : "Pendiente"}
          </li>
        ))}
      </ul>
    </>
  );
};

export default TodoList;

```

### Split Provider

App.tsx

```TypeScript
import Dashboard from "./components/Dashboard";
import MainContent from "./components/MainContent";
import TodosProvider from "./providers/TodosProvider";
import UserProvider from "./providers/UserPRovider";

function App() {
  console.log("App");
  return (
    <>
      <TodosProvider>
        <UserProvider>
          <Dashboard />
          <MainContent />
        </UserProvider>
      </TodosProvider>
    </>
  );
}

export default App;

```

UserContext.ts

```TypeScript
import { createContext } from "react";

type UserContextType = {
  user: { name: string };
  toggleLogin: () => void;
};

export default createContext<UserContextType>({} as UserContextType);

```

UserProvider.tsx

```TypeScript
import { ReactNode, useState } from "react";
import UserContext from "../contexts/UserContext";

type Props = {
  children: ReactNode;
};

export default function UserProvider({ children }: Props) {
  const [user, setUser] = useState<{ name: string }>({ name: "Sofia" });
  const toggleLogin = () => {
    setUser({ name: user.name === "Sofia" ? "Catalina" : "Sofia" });
  };
  return (
    <UserContext.Provider value={{ user, toggleLogin }}>
      {children}
    </UserContext.Provider>
  );
}
```

useUser.ts

```TypeScript
import { useContext } from "react";
import UserContext from "../contexts/UserContext";

export default function useUser() {
  return useContext(UserContext);
}

```

Dashboard.tsx

```TypeScript
import useTodos from "../hooks/useTodos";
import useUser from "../hooks/useUser";

type Props = {};

const Dashboard = ({}: Props) => {
  console.log("Dashboard");
  const { todos } = useTodos();
  const { user, toggleLogin } = useUser();
  return (
    <>
      <div>
        {user.name} Number of Todos {todos.length}
      </div>
      <button onClick={() => toggleLogin()}>Cambio</button>
    </>
  );
};

export default Dashboard;

```
