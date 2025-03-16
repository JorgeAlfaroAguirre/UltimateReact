import { useContext } from "react";
import TodosContext from "../contexts/TodosContext";

type Props = {};

const Dashboard = ({}: Props) => {
  const { todos } = useContext(TodosContext);
  return <>Number of Todos {todos.length}</>;
};

export default Dashboard;
