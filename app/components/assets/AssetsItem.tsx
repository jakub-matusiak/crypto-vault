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
  function format(number: string) {
    return Number.parseFloat(number).toFixed(2);
  }

  return (
    <tr>
      <td>{ rank }</td>
      <td><Link href={ `/assets/${id}` } className='link link-hover'>{ name }</Link><br/>{ symbol }</td>
      <td>{ format(priceUsd) }</td>
      <td className='hidden md:table-cell'>{ format(marketCapUsd) }</td>
      <td className='hidden xl:table-cell'>{ format(vwap24Hr) }</td>
      <td className='hidden lg:table-cell'>{ format(supply) }</td>
      <td className='hidden md:table-cell'>{ format(volumeUsd24Hr) }</td>
      <td>{ format(changePercent24Hr) }</td>
    </tr>
  );
}