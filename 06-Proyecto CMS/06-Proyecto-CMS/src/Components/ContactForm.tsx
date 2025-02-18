import { FormProvider, useForm } from "react-hook-form";
import Input from "./Input";
import Button from "./Button";
import { Contact, contactSchema } from "../schemas/Contact";
import { zodResolver } from "@hookform/resolvers/zod";

type Props = {
  onSubmit: (contact: Contact) => void;
};

const ContactForm = ({ onSubmit }: Props) => {
  const methods = useForm<Contact>({
    resolver: zodResolver(contactSchema),
  });
  return (
    <FormProvider {...methods}>
      <form onSubmit={methods.handleSubmit(onSubmit)}>
        <Input name="name">Nombre</Input>
        <Input name="lastname">Apellido</Input>
        <Input name="email">Correo</Input>
        <Button>Enviar</Button>
      </form>
    </FormProvider>
  );
};

export default ContactForm;
