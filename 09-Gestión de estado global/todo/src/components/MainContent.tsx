import useTitles from "../hooks/useTitles";
import TodoList from "./TodoList";

type Props = {};

const MainContent = ({}: Props) => {
  const { todosTitle } = useTitles();
  console.log("MainContent");
  return (
    <>
      <h2>{todosTitle}</h2>
      <TodoList />
    </>
  );
};

export default MainContent;
