import useTodos from "../hooks/useTodos";

type Props = {};

const Dashboard = ({}: Props) => {
  const { todos } = useTodos();
  return <>Number of Todos {todos.length}</>;
};

export default Dashboard;
