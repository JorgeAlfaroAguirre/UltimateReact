import { useState } from "react";

function App() {
  let numero = 0;
  const [count, setCount] = useState(0);
  const [sent, setSent] = useState(false);
  const handleClick = () => {
    numero++;
    setCount((count) => count + 1);
    setSent(!sent);
    console.log("Renderizando...", count, sent, numero);
  };

  return (
    <>
      <button onClick={handleClick}>count is {count}</button>
    </>
  );
}

export default App;
