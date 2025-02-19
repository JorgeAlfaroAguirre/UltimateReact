import { Contact } from "../schemas/Contact";

type Props = {
  contacts: Contact[];
  onClick: (id: string) => void;
};

const ContactTable = ({ contacts, onClick }: Props) => {
  return (
    <table className="table table-striped table-hover">
      <thead>
        <tr>
          <th>Nombre</th>
          <th>Apellido</th>
          <th>Correo</th>
          <th>Tipo</th>
        </tr>
      </thead>
      <tbody>
        {contacts.map((c) => (
          <tr
            // onClick={() =>
            //   c.id
            //     ? onClick(c.id)
            //     : console.warn("No se ha encontrado la id del contacto")
            // }
            onClick={() => c.id && onClick(c.id)}
            style={{ cursor: "pointer" }}
            key={c.id}
          >
            <td>{c.name}</td>
            <td>{c.lastname}</td>
            <td>{c.email}</td>
            <td>{c.type}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default ContactTable;
