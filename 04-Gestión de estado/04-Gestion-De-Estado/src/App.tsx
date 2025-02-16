import { useState } from "react";

function App() {
  console.log("Renderizando...");
  const [count, setCount] = useState(0);
  const [sent, setSent] = useState(false);

  type Producto = { id: string; nombre: string }[];
  const [producto, setProducto] = useState<Producto>([
    { id: Math.random().toString(), nombre: "Iphone" },
  ]);
  const handleClick = () => {
    setCount(count + 1);
    setSent((prevstate) => !prevstate);
    console.log(sent);
  };

  const atTheEnd = () => {
    setProducto([
      ...producto,
      {
        id: Math.random().toString(),
        nombre: "Android",
      },
    ]);
  };

  const atTheBeggining = () => {
    setProducto([
      {
        id: Math.random().toString(),
        nombre: "Google",
      },
      ...producto,
    ]);
  };

  const eliminarUltimo = () => {
    setProducto(producto.slice(0, -1));
  };
  const eliminarPrimero = () => {
    setProducto(producto.slice(1));
  };
  const clean = () => {
    setProducto([]);
  };

  return (
    <>
      <button onClick={handleClick}>
        count is {count} Sent es {sent.toString()}{" "}
        {sent ? "Manu" : "Perrito Pablo"}
      </button>
      <br />
      <br />
      <button onClick={atTheEnd}>Agregar al final</button>
      <br />
      <br />
      <button onClick={atTheBeggining}>Agregar al principio</button>
      <br />
      <br />
      <button onClick={clean}>Limpiar</button>
      <br />
      <br />
      <button onClick={eliminarUltimo}>Eliminar ultimo</button>
      <br />
      <br />
      <button onClick={eliminarPrimero}>Eliminar Primero</button>
      <br />
      <br />
      {producto.map((prod) => (
        <p key={prod.id}>
          {prod.id} {prod.nombre}
        </p>
      ))}
    </>
  );
}

export default App;
