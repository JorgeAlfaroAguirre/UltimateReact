import { z } from "zod";

export const userSchema = z.object({
  name: z
    .string({ required_error: "Nombre es requerido" })
    .min(3, { message: "Longitud minima 3" }),
  lastname: z
    .string({ required_error: "Apellido es requerido" })
    .min(3, { message: "Longitud minima 3" }),
});
