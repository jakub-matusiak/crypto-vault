'use client';

import { logout } from '@/app/utils/auth/actions';

export default function LogoutButton() {
  return (
    <button className='btn btn-sm btn-primary mx-1' onClick={async () => await logout()}>Logout</button>
  );
}
