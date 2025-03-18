import useTodos from "../hooks/useTodos";

type Props = {};
const TodoList = ({}: Props) => {
  console.log("TodoList");
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
