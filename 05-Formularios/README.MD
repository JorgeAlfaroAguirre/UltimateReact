# Formularios

form>div.mb-3\*2>label.form-label+input#name.form-control

## Bibliotecas Populares

- Redux Form -> por cada cambio re-renderizaba todo el formulario.
- Formik -> tu app completa no se renderizaba pero si todo el formulario.
- React Hook Form -> solo re-renderiza el componente donde se estan haciendo los cambios.

## 07 - Reack Hook Form

## 08 - Validación por Schema

joi
yup
zod

resolvers

react hook forms

```Typescript
import { useForm } from "react-hook-form";

type Form = {
  name: string;
  lastname: string;
};

const Form = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<Form>();

  const onSubmit = (data: Form) => console.log(data);
  return (
    <>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="mb-3">
          <label htmlFor="name" className="form-label">
            Nombre Validaciones con react-hook-form
          </label>
          <input
            {...register("name", {
              minLength: {
                value: 3,
                message: "El largo minímo es 3",
              },
            })}
            type="text"
            id="name"
            className="form-control"
          />
          {errors?.name && <p>{errors?.name?.message}</p>}
        </div>
        <div className="mb-3">
          <label htmlFor="lastname" className="form-label">
            Apellido
          </label>
          <input
            {...register("lastname", {
              validate: (valor) => (valor.length < 4 ? "Largo Minimo 3" : true),
            })}
            type="text"
            id="lastname"
            className="form-control"
          />{" "}
          {errors?.lastname && <p>{errors?.lastname?.message}</p>}
        </div>
        <button className="btn btn-primary">Enviar</button>
      </form>
    </>
  );
};

export default Form;

```

## 09 - Primeros pasos con zod

npm i zod@3.22.4

```Typescript
import { useForm } from "react-hook-form";
import { userSchema } from "../schemas/user";

type Form = {
  name: string;
  lastname: string;
};

const Form = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<Form>();

  const onSubmit = (data: Form) => {
    try {
      const x = userSchema.parse(data);
      console.log(x);
    } catch (e) {
      console.log(e);
    }

    console.log(data);
  };
  return (
    <>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="mb-3">
          <label htmlFor="name" className="form-label">
            Nombre Validaciones con react-hook-form
          </label>
          <input
            {...register("name")}
            type="text"
            id="name"
            className="form-control"
          />
          {/* {errors?.name && <p>{errors?.name?.message}</p>} */}
        </div>
        <div className="mb-3">
          <label htmlFor="lastname" className="form-label">
            Apellido
          </label>
          <input
            {...register("lastname")}
            type="text"
            id="lastname"
            className="form-control"
          />{" "}
          {/* {errors?.lastname && <p>{errors?.lastname?.message}</p>} */}
        </div>
        <button className="btn btn-primary">Enviar</button>
      </form>
    </>
  );
};

export default Form;
```

Error:

```
ZodError: [
{
"code": "too_small",
"minimum": 3,
"type": "string",
"inclusive": true,
"exact": false,
"message": "Longitud minima 3",
"path": [
"name"
]
},
{
"code": "too_small",
"minimum": 3,
"type": "string",
"inclusive": true,
"exact": false,
"message": "Longitud minima 3",
"path": [
"lastname"
]
}
]
at onSubmit (Form.tsx:18:28)

```

## 10 - Resolvers

npm i @hookform/resolvers
