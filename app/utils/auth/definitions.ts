import { z } from 'zod';
 
export const RegisterFormSchema = z.object({
  email: z.string().email({ message: 'Please enter a valid email.' }).trim(),
  password: z
    .string()
    .min(8, { message: 'be at least 8 characters long.' })
    .regex(/[a-zA-Z]/, { message: 'contain at least one letter.' })
    .regex(/[0-9]/, { message: 'contain at least one number.' })
    .regex(/[^a-zA-Z0-9]/, { message: 'contain at least one special character.' })
    .trim(),
  confirmPassword: z.string().trim(),
})
.refine((data) => data.password === data.confirmPassword, {
  message: 'Passwords are not the same.',
  path: ['confirmPassword'],
});

export const LoginFormSchema = z.object({
  email: z.string().email({ message: 'Please enter a valid email.' }),
  password: z.string().min(1, { message: 'Password field must not be empty.' }),
});
 
export type FormState = {
  errors?: {
    email?: string[];
    password?: string[];
  };
  message?: string;
} | undefined;

export type SessionPayload = {
  userId: string | number;
  expiresAt: Date;
};
