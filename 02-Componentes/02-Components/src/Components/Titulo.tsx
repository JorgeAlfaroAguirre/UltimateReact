function Titulo() {
  const name = "Luna";
  if (name) {
    return (
      <div className="alert alert-danger" role="alert">
        <h1>Hola {name}!</h1>
      </div>
    );
  }
  return <h1>Hola desconocido!</h1>;
}

export default Titulo;
