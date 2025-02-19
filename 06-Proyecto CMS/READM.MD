# Proyecto CMS Contact Management System

## 01 - Introducción

## 02 - Layout

### Limpiar proyecto. Y dejar el CSS de Bootstrap

```TypeScript
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.tsx";
import "bootstrap/dist/css/bootstrap.min.css";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <App />
  </StrictMode>
);

```

```TypeScript
function App() {
  return <>Hola Mundo</>;
}

export default App;

```

### Crear un directorio components, crear el archivo CMS.tsx o Layout.tsx usar el react snippet tsrfce, y luego la Emmet Abreviation: (div.row>div.col)\*2 y debería quedar esto:

```TypeScript
const CMS = () => {
  return (
    <div className="container">
      <div className="row">
        <div className="col"></div>
      </div>
      <div className="row">
        <div className="col"></div>
      </div>
    </div>
  );
};

export default CMS;

```

### Debería quedar así además de tener 2 archivos más en components, que son ContactForm.tsx y ContactTable.tsx

```TypeScript
import ContactForm from "./ContactForm";
import ContactTable from "./ContactTable";

const CMS = () => {
  return (
    <div className="container">
      <div className="row">
        <div className="col">
          <ContactForm />
        </div>
      </div>
      <div className="row">
        <div className="col">
          <ContactTable />
        </div>
      </div>
    </div>
  );
};

export default CMS;

```

## 03 - Formulario

### Tomamos el componente de Bootstrap:

```html
<div class="mb-3">
  <label for="exampleFormControlInput1" class="form-label">Email address</label>
  <input
    type="email"
    class="form-control"
    id="exampleFormControlInput1"
    placeholder="name@example.com"
  />
</div>
```

### Lo adaptammos a React en el componente ContactForm.tsx, cambiamos class por className, cambiamos for por htmlFor, y cerramos el input />. Además lo modificamos para que nos sea útil. Así debería quedar:

```TypeScript
import { useForm } from "react-hook-form";

const ContactForm = () => {
  const methods = useForm();
  return (
    <form onSubmit={methods.handleSubmit((data) => console.log(data))}>
      <div className="mb-3">
        <label htmlFor="name" className="form-label">
          Nombre
        </label>
        <input
          {...methods.register("name")}
          type="name"
          className="form-control"
          id="name"
        />
      </div>
    </form>
  );
};

export default ContactForm;

```

### Instala npm install react-hook-form

## 04 - Input

```TypeScript
import { FormProvider, useForm } from "react-hook-form";
import Input from "./Input";
import Button from "./Button";

const ContactForm = () => {
  const methods = useForm();
  return (
    <FormProvider {...methods}>
      <form onSubmit={methods.handleSubmit((data) => console.log(data))}>
        <Input name="name">Nombre</Input>
        <Input name="lastname">Apellido</Input>
        <Input name="email">Correo</Input>
        <Button>Enviar</Button>
      </form>
    </FormProvider>
  );
};

export default ContactForm;
```

## 05 - Button

```Typescript
import { ReactNode } from "react";

type variant = "primary" | "secondary" | "warning";

type Props = {
  children: ReactNode;
  variant?: variant;
};

const Button = ({ children, variant = "primary" }: Props) => {
  return <button className={`btn btn-${variant}`}>{children}</button>;
};

export default Button;

```

## 06 - Contact Schema

- Crear directorio en schema, crear el archivo Contact.tsx este va a representar solo a un contacto a su tipo y sus validaciones
- Instalar npm i zod@3.22.4 y npm i @hookform/resolvers

```TypeScript
import { z } from "zod";
export const contactSchema = z.object({
  name: z
    .string()
    .min(1, { message: "Nombre requerido." })
    .min(3, { message: "Longitud mínima 3." }),
  lastname: z
    .string()
    .min(1, { message: "Apellido requerido." })
    .min(3, { message: "Longitud mínima 3." }),
  email: z
    .string()
    .min(1, { message: "Apellido requerido." })
    .email("Correo invalido"),
});

export type Contact = z.infer<typeof contactSchema> & { id: string }; //Infiere el tipo, y agrega un tipo extra que no es validado con & sin usar la palabra Type.

```

## 07 - Mensajes de error

## 08 - Gestión del estado

## 09 - Tabla de contactos

## 10 - Select

## 11 - Conectando Select

## 12 - Limpiar formulario
