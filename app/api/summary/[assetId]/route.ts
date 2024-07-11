import { NextResponse } from 'next/server';

export async function GET(request: Request, { params }: { params: { assetId: string } }) {
  const { assetId } = params;

  const response = await fetch(`https://api.coincap.io/v2/assets/${assetId}`, { cache: 'no-store' });
  
  if (!response.ok) return NextResponse.error();

  const data = await response.json();

  return NextResponse.json(data.data);
}
