'use client';

import { useState } from 'react';

import { MarketType } from '@/app/utils/types';
import MarketsItem from '@/app/components/AssetDetails/Markets/MarketsItem';

type MarketsProps = {
  assetId: string,
  initialMarkets: MarketType[],
}

export default function Markets({ assetId, initialMarkets }: MarketsProps) {
  const [markets, setMarkets] = useState<MarketType[]>(initialMarkets);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);
  const [page, setPage] = useState<number>(1);

  async function getMoreMarkets() {
    setLoading(true);
    setError(null);

    try {
      const response = await fetch(`https://api.coincap.io/v2/assets/${assetId}/markets?limit=20&offset=${page * 20}`);

      if (!response.ok) {
        throw new Error('Failed to fetch more markets!');
      }

      const data = await response.json();

      if (!data.data.length) {
        setError('No more markets!');
      }

      setMarkets((prevMarkets) => [...prevMarkets, ...data.data]);
      setPage((prevPage) => prevPage + 1);
    } catch (error) {
      if (error instanceof Error) {
        setError(error.message);
      } else {
        setError('An unknown error occurred!');
      }
    } finally {
      setLoading(false);
    }
  }

  const marketsItems = markets.map((market: MarketType, index: number) => (
    <MarketsItem
      key={index}
      exchangeId={market.exchangeId}
      baseSymbol={market.baseSymbol}
      quoteSymbol={market.quoteSymbol}
      volumeUsd24Hr={market.volumeUsd24Hr}
      priceUsd={market.priceUsd}
      volumePercent={market.volumePercent}
    />
  ));

  return (
    <>
      <table className='table table-xs sm:table-sm lg:table-md'>
        <thead>
          <tr>
            <th>Exchange</th>
            <th>Pair</th>
            <th className='hidden sm:table-cell'>Price</th>
            <th className='hidden sm:table-cell'>Volume (24Hr)</th>
            <th>Volume (%)</th>
          </tr>
        </thead>
        <tbody>
          { marketsItems }
        </tbody>
      </table>
      { loading && (
        <div className='flex justify-center pt-2'>
          <span className='loading loading-dots loading-md text-primary'></span>
        </div>
      )}
      { error && (
        <div className='flex justify-center pt-2'>
          <p>Error: {error}</p>
        </div>
      )}
      <div className='flex justify-center my-6'>
        <button className='btn btn-primary' onClick={getMoreMarkets} disabled={loading}>
          { loading ? 'Loading...' : 'Load More' }
        </button>
      </div>
    </>
  );
}
