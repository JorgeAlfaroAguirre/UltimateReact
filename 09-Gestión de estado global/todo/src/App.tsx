import Dashboard from "./components/Dashboard";
import MainContent from "./components/MainContent";
import TodosProvider from "./providers/TodosProvider";
import UserProvider from "./providers/UserPRovider";

function App() {
  console.log("App");
  return (
    <>
      <TodosProvider>
        <UserProvider>
          <Dashboard />
          <MainContent />
        </UserProvider>
      </TodosProvider>
    </>
  );
}

export default App;
