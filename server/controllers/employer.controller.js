import { PrismaClient } from "@prisma/client";
import { loginSchema } from "../validators/auth.validators";
import { getEmployerByEmail, verifyPassword } from "../services/auth.services";
const prisma = new PrismaClient();

