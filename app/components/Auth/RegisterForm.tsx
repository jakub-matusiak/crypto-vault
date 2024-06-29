'use client';

import { useFormState } from 'react-dom';

import { register } from '@/app/utils/auth/actions';
import RegisterButton from '@/app/components/Auth/RegisterButton';

export function RegisterForm() {
  const [state, action] = useFormState(register, undefined);

  return (
    <form action={action} className='flex flex-col items-center w-full'>
      <label className='input input-bordered flex items-center gap-2 w-full'>
        <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 16 16' fill='currentColor' className='h-4 w-4 opacity-70'>
          <path d='M2.5 3A1.5 1.5 0 0 0 1 4.5v.793c.026.009.051.02.076.032L7.674 8.51c.206.1.446.1.652 0l6.598-3.185A.755.755 0 0 1 15 5.293V4.5A1.5 1.5 0 0 0 13.5 3h-11Z' />
          <path d='M15 6.954 8.978 9.86a2.25 2.25 0 0 1-1.956 0L1 6.954V11.5A1.5 1.5 0 0 0 2.5 13h11a1.5 1.5 0 0 0 1.5-1.5V6.954Z' />
        </svg>
        <input type='email' name='email' className='grow' placeholder='Email' />
      </label>
      {state?.errors?.email && <p className='w-full text-sm text-red-500 px-1'>{state.errors.email}</p>}
      <label className='input input-bordered flex items-center gap-2 mt-2 w-full'>
        <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 16 16' fill='currentColor' className='h-4 w-4 opacity-70'>
          <path fillRule='evenodd' d='M14 6a4 4 0 0 1-4.899 3.899l-1.955 1.955a.5.5 0 0 1-.353.146H5v1.5a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1-.5-.5v-2.293a.5.5 0 0 1 .146-.353l3.955-3.955A4 4 0 1 1 14 6Zm-4-2a.75.75 0 0 0 0 1.5.5.5 0 0 1 .5.5.75.75 0 0 0 1.5 0 2 2 0 0 0-2-2Z' clipRule='evenodd' />
        </svg>
        <input type='password' name='password' className='grow' placeholder='Password' />
      </label>
      {state?.errors?.password && (
        <div className='w-full text-sm text-red-500 px-1'>
          <p>Password must:</p>
          <ul className='list-disc pl-4'>
            {state.errors.password.map((error: string, index: number) => <li key={index}>{error}</li>)}
          </ul>
        </div>
      )}
      <label className='input input-bordered flex items-center gap-2 mt-2 w-full'>
        <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 16 16' fill='currentColor' className='h-4 w-4 opacity-70'>
          <path fillRule='evenodd' d='M14 6a4 4 0 0 1-4.899 3.899l-1.955 1.955a.5.5 0 0 1-.353.146H5v1.5a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1-.5-.5v-2.293a.5.5 0 0 1 .146-.353l3.955-3.955A4 4 0 1 1 14 6Zm-4-2a.75.75 0 0 0 0 1.5.5.5 0 0 1 .5.5.75.75 0 0 0 1.5 0 2 2 0 0 0-2-2Z' clipRule='evenodd' />
        </svg>
        <input type='password' name='confirmPassword' className='grow' placeholder='Confirm Password' />
      </label>
      {state?.errors?.confirmPassword && <p className='w-full text-sm text-red-500 px-1'>{state.errors.confirmPassword}</p>}
      {state?.message && <p className='text-red-500 mt-4'>{state.message}</p>}
      <RegisterButton />
    </form>
  );
}
