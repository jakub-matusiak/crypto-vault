import { z } from 'zod';

export const PortfolioFormSchema = z.object({
  portfolioName: z.string().min(1, { message: 'Name field must not be empty.' }),
});
 
export type CreatePortfolioFormState = {
  errors?: {
    portfolioName?: string[];
    userId?: string | number;
  };
  message?: string;
} | undefined;
