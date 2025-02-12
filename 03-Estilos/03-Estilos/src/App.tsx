import { useState } from "react";
import Alert from "./Components/Alert";
import { IoIosSend } from "react-icons/io";

const App = () => {
  const [status, setStatus] = useState(true);
  const toggleStatus = () => setStatus(!status);
  const message = ["Alert!", "Success!"];
  return (
    <>
      <Alert status={status} onClick={toggleStatus}>
        {message} <IoIosSend />
      </Alert>
    </>
  );
};

export default App;
