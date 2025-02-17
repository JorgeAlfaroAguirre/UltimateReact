import { useForm } from "react-hook-form";
import { userSchema } from "../schemas/user";
import { zodResolver } from "@hookform/resolvers/zod";

type Form = {
  name: string;
  lastname: string;
};

const Form = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<Form>({
    resolver: zodResolver(userSchema),
  });

  const onSubmit = (data: Form) => {
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
          {errors?.name?.message ?? <p>{errors?.name?.message}</p>}
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
