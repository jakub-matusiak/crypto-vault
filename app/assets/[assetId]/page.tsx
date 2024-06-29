import type { MarketType } from '@/app/utils/types';

import Breadcrumbs from '@/app/components/Breadcrumbs';
import Summary from '@/app/components/AssetDetails/Summary';
import MarketsList from '@/app/components/AssetDetails/Markets/MarketsList';

export default async function AssetDetails({ params }: { params: { assetId: string }}) {
  async function getInitialMarkets() {
    const response = await fetch(`https://api.coincap.io/v2/assets/${params.assetId}/markets?limit=20`);

    if (!response.ok) {
      throw new Error('Failed to fetch initial assets!');
    }

    const data = await response.json();

    return data.data;
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
