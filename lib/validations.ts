import z from "zod";

export const signInSchema = z.object({
  email: z
    .string()
    .min(2, "Email must be at least 2 characters.")
    .email("Please provide a valid email address."),
  password: z
    .string()
    .min(6, "Password must be at least 8 characters.")
    .max(100, "Description must be at most 60 characters."),
});

export const signUpSchema = z.object({
  username: z
    .string()
    .min(3, "Username must be at least 3 characters.")
    .max(30, "Username must be at most 30 characters.")
    .regex(
      /^[a-zA-Z0-9_]+$/,
      "Username can only contain letters, numbers, and underscores."
    ),
  name: z
    .string()
    .min(1, "Name must be at least 1 character.")
    .max(50, "Name must be at most 50 characters.")
    .regex(/^[a-zA-Z\s]+$/, "Name can only contain letters and spaces."),

  email: z
    .string()
    .min(2, "Email must be at least 2 characters.")
    .email("Please provide a valid email address."),

  password: z
    .string()
    .min(6, "Password must be at least 8 characters.")
    .max(100, "Description must be at most 60 characters.")
    .regex(/[A-Z]/, "Password must contain at least one uppercase letter.")
    .regex(/[a-z]/, "Password must contain at least one lowercase letter.")
    .regex(/[0-9]/, "Password must contain at least one number.")
    .regex(
      /^[a-zA-Z0-9]/,
      "Password must contain at least one special character."
    ),
});
