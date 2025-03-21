import useHttpData from "./hooks/useHttpData";

type User = {
  id?: string | number;
  name: string;
};

function App() {
  const url = "https://jsonplaceholder.typicode.com/users";
  const {
    data: users,
    loading,
    error,
    addData: addUser,
    deleteData: deleteUser,
    updateData: updateData,
  } = useHttpData<User>(url); // data: users is an alias
  if (loading) {
    return <p>Loading...</p>;
  }

  if (error && !loading) {
    return <p>Ha ocurrido un error {error}</p>;
  }

  return (
    <>
      <ul>
        <button onClick={() => addUser({ name: "Dagadito" })}>
          Agregar Usuario
        </button>
        <button onClick={() => deleteUser(1)}>Eliminar Usuario</button>
        <button onClick={() => updateData({ id: 1, name: "Dani" })}>
          Actualizar
        </button>
        {users.map((user) => (
          <li key={user.id}>
            {user.id} {user.name}
          </li>
        ))}
      </ul>
    </>
  );
}

export default App;
