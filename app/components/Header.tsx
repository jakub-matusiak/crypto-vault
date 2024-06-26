import Link from 'next/link';
import { cookies } from 'next/headers';

import { decrypt } from '@/app/utils/auth/session';
import LogoutButton from '@/app/components/Auth/LogoutButton';
import Logo from '@/app/components/Logo';

export default async function Header() {
  const cookie = cookies().get('session')?.value;
  const session = await decrypt(cookie);

  return (
    <header>
      <div className='navbar'>
        <div className='flex-1'>
          <Logo width={137} height={32} />
        </div>
        <div className='flex-none hidden sm:block'>
          <ul className='menu menu-horizontal px-1'>
            {session ? (
              <li><LogoutButton /></li>
            ) : (
              <>
                <li><Link href='/login' className='btn btn-sm btn-outline mx-1'>Login</Link></li>
                <li><Link href='/register' className='btn btn-sm btn-primary mx-1'>Register</Link></li>
              </>
            )}
          </ul>
        </div>
        <div className='flex-none sm:hidden'>
          <button className='btn btn-square btn-ghost'>
            <svg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 24 24' className='inline-block w-5 h-5 stroke-current'><path strokeLinecap='round' strokeLinejoin='round' strokeWidth='2' d='M4 6h16M4 12h16M4 18h16'></path></svg>
          </button>
        </div>
      </div>
    </header>
  );
}
