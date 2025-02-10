function Titulo() {
  const name = "Luna";
  if (name) {
    return <h1>Hola {name}!</h1>;
  }
  return <h1>Hola desconocido!</h1>;
}

export default Titulo;
