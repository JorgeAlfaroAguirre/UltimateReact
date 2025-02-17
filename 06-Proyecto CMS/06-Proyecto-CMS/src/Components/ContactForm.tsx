import { FormProvider, useForm } from "react-hook-form";
import Input from "./Input";
import Button from "./Button";
import { Contact, contactSchema } from "../schemas/Contact";
import { zodResolver } from "@hookform/resolvers/zod";

const ContactForm = () => {
  const methods = useForm<Contact>({
    resolver: zodResolver(contactSchema),
  });
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
