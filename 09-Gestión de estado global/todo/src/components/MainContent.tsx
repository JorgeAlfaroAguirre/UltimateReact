import { useContext } from "react";
import TodoList from "./TodoList";
import TodosContext from "../contexts/TodosContext";

type Props = {};

const MainContent = ({}: Props) => {
  const { todos, addTodo } = useContext(TodosContext);

  return (
    <>
      <h2>Todos</h2>
      <TodoList todos={todos} addTodo={addTodo} />
    </>
  );
};

export default MainContent;
