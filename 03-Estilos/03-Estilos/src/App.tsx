import { useState } from "react";
import Button from "./Components/Button/Index";

const App = () => {
  const [isLoading, setIsLoading] = useState(false);
  const handleClick = () => setIsLoading(!isLoading);
  return (
    <>
      <Button onClick={handleClick} isLoading={isLoading}>
        Hola Mundo!
      </Button>
    </>
  );
};

export default App;
