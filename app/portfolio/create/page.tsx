import PortfolioForm from '@/app/components/Portfolio/PortfolioForm';

export default function CreatePortfolio() {
  return (
    <main className='flex-1 self-center'>
      <div className='flex flex-col items-center w-80 mt-16'>
        <h1 className='text-3xl font-bold text-center mb-3'>Create New Portfolio</h1>
        <PortfolioForm />
      </div>
    </main>
  );
}
