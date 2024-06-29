import Link from 'next/link';

import { RegisterForm } from '@/app/components/Auth/RegisterForm';

export default function Register() {
  return (
    <main className='flex-1 self-center'>
      <div className='flex flex-col items-center w-80 mt-16'>
        <h1 className='text-3xl font-bold text-center mb-3'>Create an account</h1>
        <RegisterForm />
        <p className='text-xs text-center mt-2'>Already have an account? <Link href='/login' className='link link-hover text-primary'>Login</Link></p>
      </div>
    </main>
  );
}
