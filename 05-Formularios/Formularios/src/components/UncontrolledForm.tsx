import { FormEvent, useRef } from "react";

type Props = {};

const UncontrolledForm = ({}: Props) => {
  const nameRef = useRef<HTMLInputElement>(null);
  const lastnameRef = useRef<HTMLInputElement>(null);
  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    const user = {
      name: nameRef.current?.value,
      lastname: lastnameRef.current?.value,
    };
    console.log(user);
  };
  return (
    <>
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label htmlFor="name" className="form-label">
            Nombre Sin Control
          </label>
          <input ref={nameRef} type="text" id="name" className="form-control" />
        </div>
        <div className="mb-3">
          <label htmlFor="lastname" className="form-label">
            Apellido Sin Control
          </label>
          <input
            ref={lastnameRef}
            type="text"
            id="lastname"
            className="form-control"
          />
        </div>
        <button className="btn btn-primary">Enviar</button>
      </form>
    </>
  );
};

export default UncontrolledForm;
