### Cutom Hook

```Typescript
import { useEffect, useState } from "react";

type User = {
  id: string;
  name: string;
};
export default function useUsers() {
  const [users, setUsers] = useState<User[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string>();

  useEffect(() => {
    const controller = new AbortController();
    const { signal } = controller;
    async function hook() {
      const url = "https://jsonplaceholder.typicode.com/users";
      try {
        const response = await fetch(url, { signal });
        if (!response.ok) throw new Error(`${response.status}`);
        const data: User[] = await response.json();
        setUsers(data);
        setError(undefined);
      } catch (error) {
        setError((error as Error).message);
      } finally {
        setLoading(false);
      }
    }
    hook();

    return () => controller.abort();
  }, []);
  return { users, loading, error };
}

```

```Typescript
import useUsers from "./hooks/useUsers";

function App() {
  const { users, loading, error } = useUsers();
  if (loading) {
    return <p>Loading...</p>;
  }

  if (error && !loading) {
    return <p>Ha ocurrido un error {error}</p>;
  }

  return (
    <>
      <ul>
        {users.map((user) => (
          <li key={user.id}>{user.name}</li>
        ))}
      </ul>
    </>
  );
}

export default App;

```

### Mejorando el Hook

```Typescript
import { useEffect, useState } from "react";

export default function useFetchData<T>(url: string) {
  const [data, setData] = useState<T[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string>();

  useEffect(() => {
    const controller = new AbortController();
    const { signal } = controller;
    async function hook() {
      try {
        const response = await fetch(url, { signal });
        if (!response.ok) throw new Error(`${response.status}`);
        const data: T[] = await response.json();
        setData(data);
        setError(undefined);
      } catch (error) {
        setError((error as Error).message);
      } finally {
        setLoading(false);
      }
    }
    hook();

    return () => controller.abort();
  }, []);
  return { data, loading, error };
}

```

```Typescript
import useFetchData from "./hooks/useFetchData";

type User = {
  id: string;
  name: string;
};

function App() {
  const url = "https://jsonplaceholder.typicode.com/users";
  const { data: users, loading, error } = useFetchData<User>(url); // data: users is an alias
  if (loading) {
    return <p>Loading...</p>;
  }

  if (error && !loading) {
    return <p>Ha ocurrido un error {error}</p>;
  }

  return (
    <>
      <ul>
        {users.map((user) => (
          <li key={user.id}>{user.name}</li>
        ))}
      </ul>
    </>
  );
}

export default App;

```

### Agrengando elementos

Optimistic ui

```Typescript

```

```Typescript

```

```Typescript

```
