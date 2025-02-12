import { useState } from "react";
import Alert from "./Components/Alert";

const App = () => {
  const [status, setStatus] = useState(true);
  const toggleStatus = () => setStatus(!status);
  const message = ["Send!", "Waiting!"];
  return (
    <>
      <Alert status={status} onClick={toggleStatus}>
        {message}
      </Alert>
    </>
  );
};

export default App;
