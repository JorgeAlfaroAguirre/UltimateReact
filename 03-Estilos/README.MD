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
import Button from "./Components/Button/Index";

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

```

```

```

```

```

```
