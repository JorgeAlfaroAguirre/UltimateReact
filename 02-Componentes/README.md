# Bootstrap

## Instalación:

```
npm i bootstrap@5.3.3
```

## Primeros pasos

### 1. Borremos todo lo que sasle en App.css, debería salirte algo asi, si tienes el servidor andando:

```bash
10:19:41 a. m. [vite] hmr update /src/App.css (x3)
```

### 2. En el archivo main.tsx, haz la importanción de bootstrap:

```typescript
import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "bootstrap/dist/css/bootstrap.min.css";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
```

### 3. Vamos a tomar el title de la lección anterior, lo vamos a poner en nuestro app Components, y vamos a ponerle una alerta para exagerar el resultado y poder ver claramente como queda con Bootstrap:

```typescript
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
```

### 4. Crear el primer componente "Card":

- Vamos a boostrap y buscamos card.

  ```html
  <div class="card" style="width: 18rem;">
    <img src="..." class="card-img-top" alt="..." />
    <div class="card-body">
      <h5 class="card-title">Card title</h5>
      <p class="card-text">
        Some quick example text to build on the card title and make up the bulk
        of the card's content.
      </p>
      <a href="#" class="btn btn-primary">Go somewhere</a>
    </div>
  </div>
  ```

- Creamos un directorio en src que se llame Components.
- Adentro creamos el archivo Card.tsx, usando la convención PascalCase o UpperCamelCase, aqui tenemos que cambiar donde dice class, por className, dejarlo todo dentro del return, y deberia funcionar.

  ```typescript
  function Card() {
    return (
      <div className="card">
        <div className="card-body">
          <h5 className="card-title">Card title</h5>
          <p className="card-text">
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </p>
          <a href="#" className="btn btn-primary">
            Go somewhere
          </a>
        </div>
      </div>
    );
  }

  export default Card;
  ```

- Ahora vamos a agregar estilo a la card:

  ```typescript
  function Card() {
    const width = { width: "350px" };
    return (
      <div className="card" style={width}>
        <div className="card-body">
          <h5 className="card-title">Card title</h5>
          <p className="card-text">
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </p>
          <a href="#" className="btn btn-primary">
            Go somewhere
          </a>
        </div>
      </div>
    );
  }

  export default Card;
  ```

- Finalmente vamos a llevar titulo a componentes, y lo vamos a poner en la app, para que todo funcionara tuve que crear un fragment <></> y ponerlo todo entre parentesis ():

  ```typescript
  import Card from "./Components/Card";
  import Titulo from "./Components/Titulo";

  function App() {
    return (
      <>
        <Titulo />
        <Card />
      </>
    );
  }

  export default App;
  ```

### 5. Crear componentes anidados:

```typescript
function Card() {
  const width = { width: "350px" };
  return (
    <div className="card" style={width}>
      <div className="card-body">
        <CardBody />
      </div>
    </div>
  );
}

export function CardBody() {
  return (
    <>
      <h5 className="card-title">Card title</h5>
      <p className="card-text">
        Some quick example text to build on the card title and make up the bulk
        of the card's content.
      </p>
      <a href="#" className="btn btn-primary">
        Go somewhere
      </a>
    </>
  );
}

export default Card;
```

## Props

### 1. Pasar Props

- Borra el contenido de CardBody

  ```typescript
  function Card() {
    const width = { width: "350px" };
    return (
      <div className="card" style={width}>
        <div className="card-body">
          <CardBody />
        </div>
      </div>
    );
  }

  export function CardBody() {
    return <>Hola Mundo!</>;
  }

  export default Card;
  ```

- Andate a App.tsx y pasale props de esta manera:

  ```typescript
  import Card from "./Components/Card";
  import Titulo from "./Components/Titulo";

  function App() {
    return (
      <>
        <Titulo />
        <Card body={"Hola Mundo!"} />
      </>
    );
  }

  export default App;
  ```

- Aca nos esta arrojando un error: 🔴 Type '{ body: string; }' is not assignable to type 'IntrinsicAttributes'.
  Property 'body' does not exist on type 'IntrinsicAttributes'.ts(2322)
- Luego debemos reemplazar nuestro archivo Card, para que pueda tomar estas props, primero se la asignamos, despues desestructuramos body de props, y va a funcionar, pero nos va a dar una alerta: 🔴Parameter 'props' implicitly has an 'any' type.ts(7006)

  ```typescript
  function Card(props) {
    const { body } = props;
    const width = { width: "350px" };
    return (
      <div className="card" style={width}>
        <div className="card-body">{body}</div>
      </div>
    );
  }

  export function CardBody() {
    return <>Hola Mundo!</>;
  }

  export default Card;
  ```

- Esto lo soluccionamos creando una interface, que indique que el contenido de body es un string:

  ```typescript
  interface Props {
    body: string;
  }

  function Card(props: Props) {
    const { body } = props;
    const width = { width: "350px" };
    return (
      <div className="card" style={width}>
        <div className="card-body">{body}</div>
      </div>
    );
  }

  export function CardBody() {
    return <>Hola Mundo!</>;
  }

  export default Card;
  ```

### 2. Multiples Props

- Modifica el Archivo Card.tsx:

  ```typescript
  interface Props {
    body: string;
  }

  function Card(props: Props) {
    const { body } = props;
    const width = { width: "350px" };
    return (
      <div className="card" style={width}>
        <div className="card-body">{body}</div>
      </div>
    );
  }

  interface CardBodyProps {
    title: string;
    text: string;
  }
  export function CardBody(props: CardBodyProps) {
    const { title, text } = props;
    return (
      <>
        <h5 className="card-title">{title}</h5>
        <p className="card-text">{text}</p>
      </>
    );
  }

  export default Card;
  ```

- Modifica el archivo App.tsx, fijate bien en la exportación ya que no es por defecto debe ir entre llaves {}:

  ```typescript
  import { CardBody } from "./Components/Card";
  import Titulo from "./Components/Titulo";

  function App() {
    return (
      <>
        <Titulo />
        <CardBody title={"Hola Mundo!"} text={"Chao Mundo!"} />
      </>
    );
  }

  export default App;
  ```

- Si queremos que una propiedad sea opcional, debemos modificar la interfaz, del archivo Card.tsx, ya que actualmente si falta alguna propiedad nos arrojara error.

  Archivo App.tsx

  ```typescript
  import { CardBody } from "./Components/Card";
  import Titulo from "./Components/Titulo";

  function App() {
    return (
      <>
        <Titulo />
        <CardBody title={"Hola Mundo!"} /> 🔴 Property 'text' is missing in type '{ title: string; }' but required in type 'CardBodyProps'.
      </>
    );
  }

  export default App;
  ```

  Archio Card.tsx:

  ```typescript
  interface CardBodyProps {
    title: string;
    text?: string;
  }
  export function CardBody(props: CardBodyProps) {
    const { title, text } = props;
    return (
      <>
        <h5 className="card-title">{title}</h5>
        <p className="card-text">{text}</p>
      </>
    );
  }

  export default Card;
  ```

### 3.Children

- Que son los children:
- Vamos a pasar un children, fijate en las exportaciones estamos pasando Card por default y CardBody no, luego creamos una etiqueta y dentro ponemos la propiedad o children, y nos arroja un error, para solucionar esto nos vamos a Card.tsx y cambiamos body por children:

  App.tsx

  ```typescript
  import Card, { CardBody } from "./Components/Card";
  import Titulo from "./Components/Titulo";

  function App() {
    return (
      <>
        <Titulo />
        <Card>Hola a todos!</Card> 🔴 Property 'body' is missing in type '{ children: string; }' but required in type 'Props'.
        <CardBody title={"Hola Mundo!"} text={"Chao Mundo!"} />
      </>
    );
  }

  export default App;
  ```

  Card.tx

  ```typescript
  interface Props {
    children: string;
  }

  function Card(props: Props) {
    const { children } = props;
    const width = { width: "350px" };
    return (
      <div className="card" style={width}>
        <div className="card-body">{children}</div>
      </div>
    );
  }

  interface CardBodyProps {
    title: string;
    text?: string;
  }
  export function CardBody(props: CardBodyProps) {
    const { title, text } = props;
    return (
      <>
        <h5 className="card-title">{title}</h5>
        <p className="card-text">{text}</p>
      </>
    );
  }

  export default Card;
  ```

- Ahora que pasa si queremos mandarle una estructura más complleja como CardBody, para eso tenemos que modificar la interfaz en Card, y cambiar de string a reactnode:

  App.tsx

  ```typescript
  import Card, { CardBody } from "./Components/Card";
  import Titulo from "./Components/Titulo";

  function App() {
  return (
      <>
      <Titulo />
      <Card> 🔴 This JSX tag's 'children' prop expects type 'string' which requires multiple children, but only a single child was provided.ts(2745)
          <CardBody title={"Hola Mundo!"} text={"Chao Mundo!"} />
      </Card>
      </>
  );
  }

  export defaul
  ```

  Card.tsx

  ```typescript
  import { ReactNode } from "react";

  interface Props {
    children: ReactNode;
  }

  function Card(props: Props) {
    const { children } = props;
    const width = { width: "350px" };
    return (
      <div className="card" style={width}>
        <div className="card-body">{children}</div>
      </div>
    );
  }

  interface CardBodyProps {
    title: string;
    text?: string;
  }
  export function CardBody(props: CardBodyProps) {
    const { title, text } = props;
    return (
      <>
        <h5 className="card-title">{title}</h5>
        <p className="card-text">{text}</p>
      </>
    );
  }

  export default Card;
  ```

### 4.Listas

- Bajemos React Snippets, bajamos el ES7+ React/Redux/React-Native.
- Presiona control shift p, y luego inserta esto Insert Snippet, ahi puedes buscar el snippet, que necesitas en este caso es "tsrfce"
- Vamos a Bootstrap y buscamos una lista (List Group)

  ```html
  <ul class="list-group">
    <li class="list-group-item">An item</li>
    <li class="list-group-item">A second item</li>
    <li class="list-group-item">A third item</li>
    <li class="list-group-item">A fourth item</li>
    <li class="list-group-item">And a fifth one</li>
  </ul>
  ```

- Creas un archivo List.tsx, y modificas donde dice class a className y le creas las props data:String[] y lo exportas:

  ```typescript
  type Props = {
    data: string[];
  };

  function List({}: Props) {
    return (
      <div>
        <ul className="list-group">
          <li className="list-group-item">An item</li>
          <li className="list-group-item">A second item</li>
          <li className="list-group-item">A third item</li>
          <li className="list-group-item">A fourth item</li>
          <li className="list-group-item">And a fifth one</li>
        </ul>
      </div>
    );
  }

  export default List;
  ```

  ```typescript
  import Card, { CardBody } from "./Components/Card";
  import List from "./Components/List";
  import Titulo from "./Components/Titulo";

  function App() {
    return (
      <>
        <Titulo />
        <Card>
          <CardBody title={"Hola Mundo!"} text={"Chao Mundo!"} />
        </Card>
        <List /> 🔴 Property 'data' is missing in type '{}' but required in type
        'Props'
      </>
    );
  }

  export default App;
  ```

- Modificamos el Archivo App.tsx agregando la constante lista y dandosela como props a list:

  ```typescript
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
  ```

- En el archivo List.tsx agregamos map, le ponemos una key para no tener el siguiente error: 🔴Warning: Each child in a list should have a unique "key" prop. y deberia quedar asi, aunque hay varias opciones para dejar la propiedad key, pero debe ser unica.

  ```typescript
  type Props = {
    data: string[];
  };

  function List({ data }: Props) {
    return (
      <div>
        <ul className="list-group">
          {data.map((element, index) => (
            <li className="list-group-item" key={`${index}-${element}`}>
              {index + 1}.- {element}
            </li>
          ))}
        </ul>
      </div>
    );
  }

  export default List;
  ```

### 5.Gestion de eventos

```typescript

```

```typescript

```

```typescript

```

```typescript

```

```typescript

```
