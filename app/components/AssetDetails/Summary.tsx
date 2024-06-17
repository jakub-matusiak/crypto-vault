import { AssetType } from '@/app/utils/types';
import { formatCurrency, formatPercentage, formatNumber } from '@/app/utils/format';

type SummaryProps = {
  assetId: string,
}

export default async function Price({ assetId }: SummaryProps) {
  async function getSummary() {
    const response = await fetch(`https://api.coincap.io/v2/assets/${assetId}`);

    if (!response.ok) {
      throw new Error('Failed to get summary!');
    }

    const data = await response.json();

    return data.data;
  }

  const summary: AssetType = await getSummary();
  const { rank, symbol, name, supply, maxSupply, marketCapUsd, volumeUsd24Hr, priceUsd, changePercent24Hr, vwap24Hr, explorer } = summary;

  return (
    <aside className='bg-gray-100 p-4 rounded-md mb-8'>
      <div className='flex items-center mb-2'>
        <h1 className='text-xl md:text-2xl'><strong>{ name }</strong> { symbol }</h1>
        <div className='badge badge-md badge-neutral ml-4'>#{ rank }</div>
      </div>
      <div className="flex items-center mb-4">
        <h2 className="text-3xl md:text-5xl font-bold">{ formatCurrency(priceUsd) }</h2>
        <p className={`text-2xl md:text-3xl font-bold ml-2${ +changePercent24Hr < 0 ? ' text-red-600' : ' text-green-600' }`}>{ formatPercentage(changePercent24Hr, true) }</p>
      </div>
      <table className='table w-auto'>
        <tbody>
          <tr className='border-gray-200'>
            <td>Market Cap</td>
            <td>{ formatCurrency(marketCapUsd) }</td>
          </tr>
          <tr className='border-gray-200'>
            <td>Volume (24Hr)</td>
            <td>{ formatCurrency(volumeUsd24Hr) }</td>
          </tr>
          <tr className='border-gray-200'>
            <td>VWAP (24Hr)</td>
            <td>{ formatCurrency(vwap24Hr) }</td>
          </tr>
          <tr className='border-gray-200'>
            <td>Supply</td>
            <td>{ formatNumber(supply) }</td>
          </tr>
          <tr className='border-gray-200'>
            <td>Max Supply</td>
            <td>{ formatNumber(maxSupply) }</td>
          </tr>
          <tr className='border-gray-200'>
            <td>Explorer</td>
            <td><a href={ explorer } className='link link-hover break-all' target='_blank'>{ explorer }</a></td>
          </tr>
        </tbody>
      </table>
    </aside>
  );
}
