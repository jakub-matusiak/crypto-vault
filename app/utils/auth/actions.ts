'use server';

import type { FormState } from '@/app/utils/auth/definitions';

import { PrismaClient } from '@prisma/client';
import bcrypt from 'bcrypt';

import { RegisterFormSchema, LoginFormSchema } from '@/app/utils/auth/definitions';
import { createSession, deleteSession } from '@/app/utils/auth/session';

const prisma = new PrismaClient;

export async function register(state: FormState, formData: FormData) {
  const validatedFields = RegisterFormSchema.safeParse({
    email: formData.get('email'),
    password: formData.get('password'),
    confirmPassword: formData.get('confirmPassword'),
  });

  if (!validatedFields.success) return { errors: validatedFields.error.flatten().fieldErrors };

  const { email, password } = validatedFields.data;

  const isUserExists = await prisma.user.findUnique({
    where: { email }
  });

  if (isUserExists) return { message: 'Email already exists, please use a different email or login.' };

  const hashedPassword = await bcrypt.hash(password, 10);

  const user = await prisma.user.create({
    data: {
      email,
      password: hashedPassword,
    },
  });

  if (!user) return { message: 'An error occurred while creating your account.' };

  const userId = user.id.toString();

  await createSession(userId);
}

export async function login(state: FormState, formData: FormData): Promise<FormState> {
  const validatedFields = LoginFormSchema.safeParse({
    email: formData.get('email'),
    password: formData.get('password'),
  });

  if (!validatedFields.success) return { errors: validatedFields.error.flatten().fieldErrors };

  const { email, password } = validatedFields.data;

  const user = await prisma.user.findUnique({
    where: { email }
  });

  if (!user) return { message: 'User not found.' };

  const passwordMatch = await bcrypt.compare(password, user.password);

  if (!passwordMatch) return { message: 'Password is invalid.' };

  const userId = user.id.toString();

  await createSession(userId);
}

export async function logout() {
  deleteSession();
}
