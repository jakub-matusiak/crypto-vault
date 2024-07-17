import { PrismaClient } from '@prisma/client';

import PortfoliosList from '@/app/components/Portfolio/PortfoliosList';

const prisma = new PrismaClient;

export default async function PortfolioDetails({ params }: { params: { portfolioId: string }}) {
  const { portfolioId } = params;

  const portfolioDetails = await prisma.portfolio.findUnique({
    where: {
      id: portfolioId,
    }
  });

  if (!portfolioDetails) throw new Error('Failed to get portfolio details!');

  const { name } = portfolioDetails;

  return (
    <main className='py-4'>
      <PortfoliosList />
      <h1 className='text-3xl font-bold mb-3'>{name} Details</h1>
    </main>
  );
}
