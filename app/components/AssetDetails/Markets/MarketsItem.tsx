import { formatCurrency, formatPercentage } from '@/app/utils/format';

type MarketsItemProps = {
  exchangeId: string,
  baseSymbol: string,
  quoteSymbol: string,
  volumeUsd24Hr: string,
  priceUsd: string,
  volumePercent: string,
}

export default function MarketsItem({ exchangeId, baseSymbol, quoteSymbol, volumeUsd24Hr, priceUsd, volumePercent }: MarketsItemProps) {
  return (
    <tr>
      <td className='font-semibold'>{exchangeId}</td>
      <td>{`${baseSymbol}/${quoteSymbol}`}</td>
      <td className='hidden sm:table-cell'>{formatCurrency(priceUsd)}</td>
      <td className='hidden sm:table-cell'>{formatCurrency(volumeUsd24Hr)}</td>
      <td className='font-semibold'>{formatPercentage(volumePercent)}</td>
    </tr>
  );
}
