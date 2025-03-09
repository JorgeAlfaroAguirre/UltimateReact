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
