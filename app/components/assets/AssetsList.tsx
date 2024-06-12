import AssetsItem from './AssetsItem';

type AssetType = {
  id: string,
  rank: string,
  symbol: string,
  name: string,
  supply: string,
  maxSupply: string,
  marketCapUsd: string,
  volumeUsd24Hr: string,
  priceUsd: string,
  changePercent24Hr: string,
  vwap24Hr: string,
  explorer: string,
}

export default async function AssetsList() {
  const response = await fetch('https://api.coincap.io/v2/assets');
  const assets = await response.json();
  const { data } = assets;

  const assetsItems = data.map((asset: AssetType) => (
    <AssetsItem
      key={asset.id}
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
  );
}