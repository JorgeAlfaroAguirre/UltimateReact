# Gestión de Estado

## 01. Introducción

- El hook de useState se actualiza por lote. Si tenemos más de una useState, va a esperar que todos se ejecuten y luego va a re-renderizar el componente.
- El hook de useState nunca debe estar dentro de un if, dentro de un for, debe estar lo más a la izquierda posible y en el primer nivel del componente.
- El estado se guarda fuera de los componentes.

## 02. Actualización por Lote

- Con strickmode se renderizan 2 veces los componentes, para evitar errores.
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
