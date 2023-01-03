import { object, string } from "zod";

export const createContactSchema = object({
  body: object({
    id: string({
      required_error: "ID is required",
    }),
    name: string({
      required_error: "Name is required",
    }),
    email: string({
      required_error: "Email is required",
    }).email("Valid email address is required"),
  }),
});
