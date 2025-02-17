import ControlledForm from "./components/ControlledForm";
import Form from "./components/Form";
import UncontrolledForm from "./components/UncontrolledForm";

function App() {
  return (
    <>
      <div className="container">
        <Form />
        <UncontrolledForm />
        <ControlledForm />
      </div>
    </>
  );
}

export default App;
