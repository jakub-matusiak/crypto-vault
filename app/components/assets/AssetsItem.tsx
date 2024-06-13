import Link from 'next/link';

type AssetsItemProps = {
  id: string,
  rank: string,
  symbol: string,
  name: string,
  supply: string,
  marketCapUsd: string,
  volumeUsd24Hr: string,
  priceUsd: string,
  changePercent24Hr: string,
  vwap24Hr: string,
}

export default function AssetsItem({ id, rank, symbol, name, supply, marketCapUsd, volumeUsd24Hr, priceUsd, changePercent24Hr, vwap24Hr }: AssetsItemProps) {
  function formatValue(value: string, type: string): string {    
    const parsedValue = type === 'percent' ? parseFloat(value) / 100 : parseFloat(value);

    const formattedValue = parsedValue.toLocaleString('en-US', {
      style: type,
      currency: type === 'currency' ? 'USD' : undefined,
      minimumFractionDigits: 2,
      maximumFractionDigits: 2,
    });

    return formattedValue;
  }

  return (
    <tr>
      <td>{ rank }</td>
      <td><Link href={ `/assets/${id}` } className='link link-hover'>{ name }</Link><br/>{ symbol }</td>
      <td>{ formatValue(priceUsd, 'currency') }</td>
      <td className='hidden md:table-cell'>{ formatValue(marketCapUsd, 'currency') }</td>
      <td className='hidden xl:table-cell'>{ formatValue(vwap24Hr, 'currency') }</td>
      <td className='hidden lg:table-cell'>{ formatValue(supply, 'currency') }</td>
      <td className='hidden md:table-cell'>{ formatValue(volumeUsd24Hr, 'currency') }</td>
      <td>{ formatValue(changePercent24Hr, 'percent') }</td>
    </tr>
  );
}