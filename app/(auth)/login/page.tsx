import Link from 'next/link';

import { LoginForm } from '@/app/components/Auth/LoginForm';

export default function Login() {
  return (
    <main className='flex-1 self-center'>
      <div className='flex flex-col items-center w-80 mt-16'>
        <h1 className='text-3xl font-bold text-center mb-3'>Login with email</h1>
        <LoginForm />
        <p className='text-xs text-center mt-2'>Don&apos;t have an account yet? <Link href='/register' className='link link-hover text-primary'>Register</Link></p>
      </div>
    </main>
  );
}
