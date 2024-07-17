'use client';

import { useFormState } from 'react-dom';

import { createPortfolio } from '@/app/utils/portfolio/actions';
import PortfolioButton from '@/app/components/Portfolio/PortfolioButton';

export default function PortfolioForm() {
  const [state, action] = useFormState(createPortfolio, undefined);

  return (
    <form className='flex flex-col items-center w-full' action={action}>
      <input type='text' name='portfolioName' className='input input-bordered w-full max-w-xs' placeholder='Portfolio Name' />
      {state?.errors?.portfolioName && <p className='w-full text-sm text-red-500 px-1'>{state.errors.portfolioName}</p>}
      <PortfolioButton />
    </form>
  );
}
