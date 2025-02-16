# Gestión de Estado

## 01. Introducción

### Se crea una nueva app, con npm create vite

App.tsx

```Typescript
import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  )
}

export default App
```

### Eliminar todos los estilos y dejar solo el useState

App.tsx

```Typescript
import { useState } from "react";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <button onClick={() => setCount((count) => count + 1)}>
        count is {count}
      </button>
    </>
  );
}

export default App;
```

main.tsx

```Typescript
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.tsx";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <App />
  </StrictMode>
);

```

### Comentarios

- No importa cuantas veces se actualice el useState, mejor dicho, no importa cuantas lineas tenga el useState, se actualizara una sola vez, porque el useState se actualiza por lote. Esto quiere decir que si tiene 3 lineas que requieran actualización, primero se actualizaran los 3 y luego se re-renderizara el componente.
- El hook de useState nunca debe estar dentro de un if, dentro de un for, debe estar lo más a la izquierda posible y en el primer nivel del componente.
- El estado siempre se guarda fuera de los componentes. Vamos a poder crear x componentes con el mismo estado.

## 02. Actualización por Lote

- Con strickmode se renderizan 2 veces los componentes, para evitar errores.

  App.tsx

  ```Typescript
  import { useState } from "react";

  function App() {
    console.log("Renderizando...");
    const [count, setCount] = useState(0);

    const handleClick = () => {
      setCount(count + 1);
    };

    return (
      <>
        <button onClick={handleClick}>count is {count}</button>
      </>
    );
  }

  export default App;
  ```

  main.tsx

  ```Typescript
  import { StrictMode } from "react";
  import { createRoot } from "react-dom/client";
  import App from "./App.tsx";

  createRoot(document.getElementById("root")!).render(
    //<StrictMode> //Si sacamos el StrickMode se rendizara sólo una vez
      <App />
    //</StrictMode>
  );

  ```

- Tomar en cuenta:

  ```typescript
  // setSent(!sent); // Mala practica
  setSent((x) => !x); // Puede ser cualquier cosa, como estado previo
  ```

## 03. Anidación de hooks

- Los hooks no deben estar dentro de un if, como en este caso:

  ```typescript
  import { useState } from "react";

  function App() {
    let numero = 0;
    const [count, setCount] = useState(0);
    const handleClick = () => {
      const [sent, setSent] = useState(false);
      numero++;
      // setSent(!sent); // Mala practica
      setSent((x) => !x); // Puede ser cualquier cosa, como estado previo
      if (true) {
        setCount((count) => count + 1);
      }
      console.log("Renderizando...", count, sent, numero);
    };

    return (
      <>
        <button onClick={handleClick}>count is {count}</button>
      </>
    );
  }

  export default App;
  ```

  Esto arroja el siguiente error:

  ```
    Uncaught react-dom_client.js?v=c912d256:4266 Uncaught Error: Invalid hook call. Hooks can only be called inside of the body of a function component. This could happen for one of the following reasons:
    1. You might have mismatching versions of React and the renderer (such as React DOM)
    2. You might be breaking the Rules of Hooks
    3. You might have more than one copy of React in the same app
    See https://react.dev/link/invalid-hook-call for tips about how to debug and fix this problem.
    at handleClick (App.tsx:7:29)
  ```

## 04. Estado en memoria

## 05. Sugerencias de estado

## 06. StrickMode

- Componentes o funciones puras: son siempre las que otorgan el mismo valor, recibiendo los mismos parametros. No es pura la fecha actual, poque cambia cada vez que la ejecutas.
- Efecto: un llamado al servidor por ejemplo, la funcion de llamar al servidor y actualizar el estado del componente.

## 07. Mutabilidad VS Inmutabilidad

## 08. Detalles de useState

## 09. Actualizando objetos

## 10. Propidades anidadas

## 11. Trabajar con arrays

## 12. Donde vive el estado

## 13. Comportiendo el estado

## 14. Ejercicios
