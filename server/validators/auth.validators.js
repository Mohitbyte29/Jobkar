import z from "zod";

const nameSchema = z.
string().
min(3, "Name length should be more than 3").
max(50, "Name length should be less than 50");

const emailSchema = z.
string().
trim().
email({message: "Please enter a valid Email Address"}).
max(100, "Email length should be less than 100 characters");

const passwordSchema = z.
string().
regex(/^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/, "Password must contain at least 8 characters, including at least one letter and one number.").
max(50, "Password length should be less than 50 characters");

const roleSchema = z.enum(["EMPLOYER", "SEEKER"]).default("SEEKER");

export const registerSchema = z.object({
    name: nameSchema,
    email: emailSchema,
    password: passwordSchema,
    role: roleSchema,
});

export const loginSchema = z.object({
    email: emailSchema,
    password: passwordSchema,
    role: roleSchema,
})

export const verifyEmailSchema = z.object({
    email: emailSchema,
})

export const verifyPasswordSchema = z.object({
    password: passwordSchema,
})  

