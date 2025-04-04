# Estilos en React

## Inline Style (no recomendado)

Los componentes en React tienen la propiedad implicita styles.

Button.tsx

```typescript
type Props = {
  children: React.ReactNode;
  isLoading?: boolean;
  onClick: () => void;
  buttonType?: string;
};

const styles = {
  backgroundColor: "red",
};

const Button = ({
  children,
  isLoading = false,
  onClick,
  buttonType,
}: Props) => {
  const buttonClass = buttonType
    ? "btn btn-danger"
    : `btn btn-${isLoading ? "secondary" : "primary"}`;

  return (
    <button
      style={styles}
      onClick={onClick}
      disabled={isLoading}
      type="button"
      className={buttonClass}
    >
      {isLoading ? "Cargando..." : children}
    </button>
  );
};

export default Button;
```

## 📂 Estructura de Directorios

### 📌 MVC

| 🗂 Carpeta      | 📄 Archivos         | 📜 Extensiones |
| -------------- | ------------------- | -------------: |
| **Styles**     | Archivos de estilos |         `.css` |
| **Components** | Componentes UI      |         `.tsx` |
| **Reducers**   | Lógica de estado    |          `.ts` |

---

### 🛠 **Features**

#### 📂 `admin/`

```bash
admin/
├── layout.tsx   # Componente de diseño principal
├── layout.css   # Estilos del layout
└── menu.tsx     # Componente del menú
```

## CSS (no recomendado)

```bash
Components/            # 📁 Directorio de componentes reutilizables
└── Button/           # 📁 Componente de botón
    ├── index.tsx     # 🎨 Archivo principal del componente Button
    └── button.css    # 🎨 Estilos específicos del botón
```

## Modulos CSS (Recomendado)

```typescript
import styles from "./Button.module.css";

type Props = {
  children: React.ReactNode;
  isLoading?: boolean;
  onClick: () => void;
};

console.log(styles);
const Button = ({ children, isLoading = false, onClick }: Props) => {
  return (
    <button
      onClick={onClick}
      disabled={isLoading}
      type="button"
      className={[styles.button, styles.padded].join(" ")}
    >
      {children}
    </button>
  );
};

export default Button;
```

```css
.button {
  background-color: red;
}

.padded {
  padding: 25px 30px;
}
```

### Estilo Condicional

```typescript
import { useState } from "react";
import Button from "./Components/Button";

const App = () => {
  const [isLoading, setIsLoading] = useState(false);
  const handleClick = () => setIsLoading(!isLoading);
  return (
    <>
      <Button onClick={handleClick} isLoading={isLoading}>
        Hola Mundo!
      </Button>
    </>
  );
};

export default App;
```

```typescript
import styles from "./Button.module.css";

type Props = {
  children: React.ReactNode;
  isLoading?: boolean;
  onClick: () => void;
};

const Button = ({ children, isLoading = false, onClick }: Props) => {
  const className = `${isLoading ? styles.disableButton : styles.button} ${
    styles.padded
  }`;
  return (
    <button
      onClick={onClick}
      disabled={isLoading}
      type="button"
      className={className}
    >
      {children}
    </button>
  );
};

export default Button;
```

```css
.button {
  background-color: red;
}

.disableButton {
  background-color: gray;
}

.padded {
  padding: 25px 30px;
}
```

### CSS en JSX o TSX

#### Orden: primero va el css y luego va el tsx

#### Instalar Style components https://styled-components.com/

```bash
npm install styled-components

```

Si te faltan los tipos

```bash
npm i @types/styled-components
```

##### Como podemos usarlos (me da un error al mostrar quiero ver este video de nuevo más adelante)

Button2.tsx

```typescript
import styled from "styled-components";

type BtnProps = {
  isLoading?: boolean;
};
type Props = {
  children: React.ReactNode;
  isLoading?: boolean;
  onClick: () => void;
};
const Btn = styled.button<BtnProps>`
  background-color: ${(props) => (props.isLoading ? "gray" : "blue")};
  padding: 25px 30px;
  color: white;
`;

const Button2 = ({ children, isLoading, onClick }: Props) => {
  return (
    <Btn onClick={onClick} isLoading={isLoading}>
      {children}
    </Btn>
  );
};

export default Button2;
```

App.tsx

```typescript
import { useState } from "react";
import Button from "./Components/Button";
import Button2 from "./Components/Button2";

const App = () => {
  const [isLoading1, setIsLoading1] = useState(false);
  const [isLoading2, setIsLoading2] = useState(false);
  const handleClick1 = () => setIsLoading1(!isLoading1);
  const handleClick2 = () => setIsLoading2(!isLoading2);
  return (
    <>
      <Button onClick={handleClick1} isLoading={isLoading1}>
        Hola Mundo!
      </Button>
      <Button2 onClick={handleClick2} isLoading={isLoading2}>
        Chao Mundo!
      </Button2>
    </>
  );
};

export default App;
```

### Bibliotecas Populares

- Bootstrap -> react.Bootstrap
- Tailwind -> Daisy UI
- Bulma CSS -> react Bulma
- Chakra UI

### React Icons

https://react-icons.github.io/react-icons/

### Crea un componente que ses llame alert, y que cambie de color y mensaje cuando se clickee.

index.tsx

```typescript
import { useState } from "react";
import Alert from "./Components/Alert";

const App = () => {
  const [status, setStatus] = useState(true);
  const toggleStatus = () => setStatus(!status);
  return (
    <>
      <Alert status={status} onClick={toggleStatus}>
        Alert!
      </Alert>
    </>
  );
};

export default App;
```

Alert.module.css

```css
.alert {
  width: 100px;
  padding: 10px 15px;
  border-radius: 5px;
  border-style: solid;
  text-align: center;
  font-weight: bold;
  color: white;
}

.alertActive {
  background-color: red;
  border-color: darkred;
}

.alertInactive {
  background-color: blue;
  border-color: darkblue;
}
```

App.tsx

```typescript
import { useState } from "react";
import Alert from "./Components/Alert";

const App = () => {
  const [status, setStatus] = useState(true);
  const toggleStatus = () => setStatus(!status);
  return (
    <>
      <Alert status={status} onClick={toggleStatus}>
        Alert!
      </Alert>
    </>
  );
};

export default App;
```
