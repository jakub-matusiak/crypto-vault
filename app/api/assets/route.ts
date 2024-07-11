import { NextResponse } from 'next/server';

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const limit = searchParams.get('limit') || '100';
  const offset = searchParams.get('offset') || '0';

  const response = await fetch(`https://api.coincap.io/v2/assets?limit=${limit}&offset=${offset}`, { cache: 'no-store' });
  
  if (!response.ok) return NextResponse.error();

  const data = await response.json();

  return NextResponse.json(data.data);
}
