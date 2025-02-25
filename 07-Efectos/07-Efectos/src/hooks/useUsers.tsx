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
    const url = "https://jsonplaceholder.typicode.com/users";

    fetch(url)
      .then((response) => {
        if (!response.ok) throw new Error(`${response.status}`);
        return response.json() as Promise<User[]>;
      })
      .then((data) => setUsers(data))
      .catch((error: Error) => setError(error.message))
      .finally(() => setLoading(false));
  }, []);
  return { users, loading, error };
}
