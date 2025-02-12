import { useState } from "react";
import Button from "./Components/Button";
import Button2 from "./Components/Button2";

const App = () => {
  const [isLoading1, setIsLoading1] = useState(false);
  const [isLoading2, setIsLoading2] = useState(false);
  const handleClick1 = () => setIsLoading1(!isLoading1);
  const handleClick2 = () => setIsLoading2(!isLoading2);
  return (
    <>
      <Button onClick={handleClick1} isLoading={isLoading1}>
        Hola Mundo!
      </Button>
      <Button2 onClick={handleClick2} isLoading={isLoading2}>
        Chao Mundo!
      </Button2>
    </>
  );
};

export default App;
