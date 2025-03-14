import { Todo } from "../types";
import TodoList from "./TodoList";

type Props = {
  todos: Todo[];
  addTodo: (todo: Todo) => void;
};

const MainContentWithContext = ({ todos, addTodo }: Props) => {
  return (
    <>
      <h2>Todos With Context</h2>
      <TodoList todos={todos} addTodo={addTodo} />
    </>
  );
};

export default MainContentWithContext;
