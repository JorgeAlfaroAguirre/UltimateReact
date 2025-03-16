import { useContext } from "react";
import TodoList from "./TodoList";
import TodosContext from "../contexts/TodosContext";

type Props = {};

const MainContentWithContext = ({}: Props) => {
  const { todosWithContext, addTodoWithContext } = useContext(TodosContext);
  return (
    <>
      <h2>Todos With Context</h2>
      <TodoList todos={todosWithContext} addTodo={addTodoWithContext} />
    </>
  );
};

export default MainContentWithContext;
