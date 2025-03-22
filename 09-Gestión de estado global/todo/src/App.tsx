import Dashboard from "./components/Dashboard";
import MainContent from "./components/MainContent";
import TitlesProvider from "./providers/TitlesProvider";
import TodosProvider from "./providers/TodosProvider";
import UserProvider from "./providers/UserProvider";

function App() {
  console.log("App");
  return (
    <>
      <TodosProvider>
        <UserProvider>
          <TitlesProvider>
            <Dashboard />
            <MainContent />
          </TitlesProvider>
        </UserProvider>
      </TodosProvider>
    </>
  );
}

export default App;
