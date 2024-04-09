import { z } from "zod";
export const usernameValidation = z
  .string()
  .min(3, "Username must be at least 3 characters")
  .max(20, "Username must be at most 20 characters")
  .regex(
    new RegExp(/^[a-zA-Z0-9_]+$/),
    "Username must not container special character."
  );

export const signUpSchema = z.object({
  username: usernameValidation,
  email: z.string().email({ message: "email is not valid." }),
  password: z
    .string()
    .min(6, { message: "Password must b at least 6 characters" }),
});
