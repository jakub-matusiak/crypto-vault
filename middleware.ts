import { NextResponse, type NextRequest } from 'next/server';
import { cookies } from 'next/headers';

import { decrypt } from '@/app/utils/auth/session';

export async function middleware(request: NextRequest) {
  const cookie = cookies().get('session')?.value;
  const session = await decrypt(cookie);

  if (!session && request.nextUrl.pathname.startsWith('/portfolio')) {
    return NextResponse.redirect(new URL('/login', request.url));
  }
}

export const config = {
  matcher: ['/portfolio/:path*'],
};
