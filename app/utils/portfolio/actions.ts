'use server';

import type { CreatePortfolioFormState } from '@/app/utils/portfolio/definitions';

import { cookies } from 'next/headers';
import { redirect } from 'next/navigation';

import { PrismaClient } from '@prisma/client';

import { PortfolioFormSchema } from '@/app/utils/portfolio/definitions';
import { decrypt } from '@/app/utils/auth/session';




const prisma = new PrismaClient;

export async function createPortfolio(state: CreatePortfolioFormState, formData: FormData) {
  const cookie = cookies().get('session')?.value;
  const session = await decrypt(cookie);
  const userId = session?.userId as string;

  if (!userId) throw new Error('User not authenticated');

  const validatedFields = PortfolioFormSchema.safeParse({
    portfolioName: formData.get('portfolioName'),
  });

  if (!validatedFields.success) return { errors: validatedFields.error.flatten().fieldErrors };

  const { portfolioName } = validatedFields.data;

  if (!portfolioName) throw new Error('Missing required fields');

  const portfolio = await prisma.portfolio.create({
    data: {
      name: portfolioName,
      userId,
    },
  });

  if (!portfolio) return { message: 'An error occurred while creating new portfolio.' };

  redirect('/portfolio');
}
