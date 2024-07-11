import type { MarketType } from '@/app/utils/types';

import Breadcrumbs from '@/app/components/Breadcrumbs';
import Summary from '@/app/components/AssetDetails/Summary';
import MarketsList from '@/app/components/AssetDetails/Markets/MarketsList';

export default async function AssetDetails({ params }: { params: { assetId: string }}) {
  async function getInitialMarkets() {
    const { assetId } = params;
    const response = await fetch(`${process.env.API_BASE_URL}/api/markets/${assetId}`, { next: { revalidate: 30 } });

    if (!response.ok) throw new Error('Failed to fetch initial assets!');

    const data = await response.json();

    return data;
  }

  const initialMarkets: MarketType[] = await getInitialMarkets();

  return (
    <main className='p-2'>
      <Breadcrumbs />
      <Summary assetId={params.assetId} />
      <MarketsList assetId={params.assetId} initialMarkets={initialMarkets} />
    </main>
  );
}
