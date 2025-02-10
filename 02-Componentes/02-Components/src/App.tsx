import Card, { CardBody } from "./Components/Card";
import List from "./Components/List";
import Titulo from "./Components/Titulo";

function App() {
  const list = [
    "Constancia",
    "Disciplina",
    "Rescilencia",
    "Perseverancia",
    "Paciencia",
  ];
  return (
    <>
      <Titulo />
      <Card>
        <CardBody title={"Hola Mundo!"} text={"Chao Mundo!"} />
      </Card>
      <List data={list} />
    </>
  );
}

export default App;
