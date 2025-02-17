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

export type Contact = z.infer<typeof contactSchema> & { id: string };
