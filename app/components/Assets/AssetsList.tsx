'use client';

import { useState } from 'react';

import { AssetType } from '@/app/utils/types';
import AssetsItem from '@/app/components/Assets/AssetsItem';

type AssetsListProps = {
  initialAssets: AssetType[];
}

export default function AssetsList({ initialAssets }: AssetsListProps) {
  const [assets, setAssets] = useState<AssetType[]>(initialAssets);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);
  const [page, setPage] = useState<number>(1);

  async function getMoreAssets() {
    setLoading(true);
    setError(null);

    try {
      const response = await fetch(`https://api.coincap.io/v2/assets?offset=${page * 100}`);

      if (!response.ok) {
        throw new Error('Failed to fetch more assets!');
      }

      const data = await response.json();

      if (!data.data.length) {
        setError('No more assets!');
      }

      setAssets((prevAssets) => [...prevAssets, ...data.data]);
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

  const assetsItems = assets.map((asset: AssetType, index: number) => (
    <AssetsItem
      key={index}
      id={asset.id}
      rank={asset.rank}
      symbol={asset.symbol}
      name={asset.name}
      supply={asset.supply}
      marketCapUsd={asset.marketCapUsd}
      volumeUsd24Hr={asset.volumeUsd24Hr}
      priceUsd={asset.priceUsd}
      changePercent24Hr={asset.changePercent24Hr}
      vwap24Hr={asset.vwap24Hr}
    />
  ));

  return (
    <>
      <table className='table table-xs sm:table-sm lg:table-md'>
        <thead>
          <tr>
            <th>Rank</th>
            <th>Name</th>
            <th>Price</th>
            <th className='hidden md:table-cell'>Market Cap</th>
            <th className='hidden xl:table-cell'>VWAP (24Hr)</th>
            <th className='hidden lg:table-cell'>Supply</th>
            <th className='hidden md:table-cell'>Volume (24Hr)</th>
            <th>Change (24Hr)</th>
          </tr>
        </thead>
        <tbody>
          { assetsItems }
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
        <button className='btn btn-primary' onClick={getMoreAssets} disabled={loading}>
          { loading ? 'Loading...' : 'Load More' }
        </button>
      </div>
    </>
  );
}
