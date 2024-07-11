import type { AssetType } from '@/app/utils/types';

import Hero from '@/app/components/Hero';
import AssetsList from '@/app/components/Assets/AssetsList';

export default async function Home() {
  async function getInitialAssets() {
    const response = await fetch(`${process.env.API_BASE_URL}/api/assets`, { next: { revalidate: 30 } });
  
    if (!response.ok) throw new Error('Failed to fetch initial assets!');
  
    const data = await response.json();
  
    return data;
  }

  const initialAssets: AssetType[] = await getInitialAssets();

  return (
    <main className='py-4'>
      <Hero />
      <AssetsList initialAssets={initialAssets} />
    </main>
  );
}
