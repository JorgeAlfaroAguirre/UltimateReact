# Ultimate React

## Crear un proyecto

npm create vite

## Snippet para crear componentes

Snippet ts (typescript) + rf (react functional) + ce (component export) = tsrfce

## Llamada a Bootstrap

npm i bootstrap@5.3.3

import "bootstrap/dist/css/bootstrap.min.css";

# Resumen de react

```typescript
import { useEffect, useState } from "react";

function App() {
  const [count, setCount] = useState(0);
  useEffect(() => {
    console.log(count);
  }, [count]); // Se ejecuta cada vez que count cambia
  const handleClick = () => {
    setCount((prevCount) => prevCount + 1); // Usar el valor previo para evitar problemas con estados asincrónicos
  };

  return (
    <>
      <button onClick={handleClick}>+1</button>
      {count}
    </>
  );
}

export default App;
```
