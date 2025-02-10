import { useState } from "react";
import Button from "./Components/Button";
import Card, { CardBody } from "./Components/Card";
import List from "./Components/List";

function App() {
  const [isLoading, setIsLoading] = useState(false);
  const handleClick = () => setIsLoading(!isLoading);
  const [minions, setMinions] = useState(["Gru"]);
  const addButton = () => setMinions([...minions, "Minion"]);
  const removeButton = () => setMinions(minions.slice(0, -1));
  const list = [
    "Constancia",
    "Disciplina",
    "Rescilencia",
    "Perseverancia",
    "Paciencia",
  ];
  return (
    <>
      <Card>
        <CardBody title={"Hola Mundo!"} text={"Chao Mundo!"} />
        <Button isLoading={isLoading} onClick={handleClick}>
          Hola Mundo!
        </Button>
      </Card>
      <br />
      <List data={list} />
      <br />
      <Button onClick={addButton}>Agregar</Button>
      <Button onClick={removeButton} buttonType={"danger"}>
        Eliminar
      </Button>
      <br />
      <List data={minions} />
    </>
  );
}

export default App;
