import { useState } from "react";
import ContactForm from "./ContactForm";
import ContactTable from "./ContactTable";
import { Contact } from "../schemas/Contact";

const CMS = () => {
  const [contacts, setContacts] = useState<Contact[]>([]);
  const addContact = (contact: Contact) =>
    setContacts([{ ...contact, id: Math.random().toString() }, ...contacts]);
  const deleteContact = (id: string) =>
    setContacts(contacts.filter((c) => c.id != id));
  // const cleanForm = () => {
  //   setContacts([]);
  // };
  return (
    <div className="container">
      <div className="row">
        <div className="col">
          <ContactForm onSubmit={addContact} />
          {/* <button onClick={cleanForm} className="btn btn-danger">
            {" "}
            Limpiar
          </button> */}
        </div>
      </div>
      <div className="row">
        <div className="col">
          <ContactTable contacts={contacts} onClick={deleteContact} />
        </div>
      </div>
    </div>
  );
};

export default CMS;
