import type { PortfolioType } from '@/app/utils/types';

import Link from 'next/link';
import { cookies } from 'next/headers';

import { PrismaClient } from '@prisma/client';

import { decrypt } from '@/app/utils/auth/session';
import PortfoliosItem from '@/app/components/Portfolio/PortfoliosItem';

const prisma = new PrismaClient;

export default async function PortfoliosList() {
  const cookie = cookies().get('session')?.value;
  const session = await decrypt(cookie);
  const userId = session?.userId as string | undefined;

  const portfolios = await prisma.portfolio.findMany({
    where: {
      userId: userId,
    },
  });

  const portfoliosItems = portfolios.map((portfolio: PortfolioType, index: number) => (
    <PortfoliosItem key={index} id={portfolio.id} name={portfolio.name} />
  ));

  return (
    <div className='flex flex-col sm:flex-row gap-4 mb-4'>
      <div role='tablist' className='flex flex-col sm:flex-row items-center gap-2 sm:gap-4'>
        <Link href='/portfolio' className='link link-hover'>Overview</Link>
        {portfoliosItems}
      </div>
      <Link href='/portfolio/create' className='btn btn-sm btn-primary'>New Portfolio</Link>
    </div>
  );
}
