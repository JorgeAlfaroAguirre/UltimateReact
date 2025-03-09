import { Todo } from "../types";

type Props = {
  todos: Todo[];
  addTodo: (todo: Todo) => void;
};
const TodoList = ({ todos, addTodo }: Props) => {
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
          <li>
            {t.name} {t.completed ? "Terminada" : "Pendiente"}
          </li>
        ))}
      </ul>
    </>
  );
};

export default TodoList;
