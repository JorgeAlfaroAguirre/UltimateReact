import TodoList from "./TodoList";

type Props = {};

const MainContent = ({}: Props) => {
  return (
    <>
      <h2>Todos</h2>
      <TodoList />
    </>
  );
};

export default MainContent;
