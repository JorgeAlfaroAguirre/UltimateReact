import useTodos from "../hooks/useTodos";
import useUser from "../hooks/useUser";

type Props = {};

const Dashboard = ({}: Props) => {
  console.log("Dashboard");
  const { todos } = useTodos();
  const { user, toggleLogin } = useUser();
  return (
    <>
      <div>
        {user.name} Number of Todos {todos.length}
      </div>
      <button onClick={() => toggleLogin()}>Cambio</button>
    </>
  );
};

export default Dashboard;
