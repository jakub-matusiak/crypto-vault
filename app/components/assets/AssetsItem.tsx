import Link from 'next/link';

import { formatCurrency, formatPercentage, formatNumber } from '@/app/utils/format';

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
  return (
    <tr>
      <td>{ rank }</td>
      <td><Link href={ `/assets/${id}` } className='link link-hover'>{ name }</Link><br/>{ symbol }</td>
      <td>{ formatCurrency(priceUsd) }</td>
      <td className='hidden md:table-cell'>{ formatCurrency(marketCapUsd) }</td>
      <td className='hidden xl:table-cell'>{ formatCurrency(vwap24Hr) }</td>
      <td className='hidden lg:table-cell'>{ formatNumber(supply) }</td>
      <td className='hidden md:table-cell'>{ formatCurrency(volumeUsd24Hr) }</td>
      <td>{ formatPercentage(changePercent24Hr) }</td>
    </tr>
  );
}