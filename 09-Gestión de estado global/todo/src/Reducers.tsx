import { useReducer, useState } from "react";

type Props = {};

type Action = { type: string };

type Reducer = (state: number, action: Action) => number;

const reducer: Reducer = (state, action) => {
  switch (action.type) {
    case "INCREMENT":
      return state + 1;
    case "DECREMENT":
      return state - 1;
    case "RESET":
      return 0;
  }
  return state;
};

const Reducers = ({}: Props) => {
  const [state, dispatch] = useReducer(reducer, 0); // Puede ser cualquier nombre el segundo valor, lo toma igual pero por convención se usa dispatch o emit
  return (
    <>
      <h1>Counter = {state}</h1>
      <button onClick={() => dispatch({ type: "INCREMENT" })}>
        Incrementar
      </button>
      <button onClick={() => dispatch({ type: "DECREMENT" })}>Reducir</button>
      <button onClick={() => dispatch({ type: "RESET" })}>Reset</button>
    </>
  );
};

export default Reducers;
