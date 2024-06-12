import Link from 'next/link';

import Logo from './Logo';

export default function Header() {
  return (
    <header>
      <div className='navbar'>
        <div className='flex-1'>
          <Logo width={137} height={32} />
        </div>
        <div className='flex-none hidden sm:block'>
          <ul className='menu menu-horizontal px-1'>
            <li><Link href='/' className='btn btn-sm btn-outline mx-1'>Login</Link></li>
            <li><Link href='/' className='btn btn-sm btn-primary mx-1'>Sign Up</Link></li>
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
