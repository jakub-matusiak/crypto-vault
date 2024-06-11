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

function format(number: string) {
  return Number.parseFloat(number).toFixed(2);
}

export default async function Home() {
  const response = await fetch('https://api.coincap.io/v2/assets');
  const assets = await response.json();
  const { data } = assets;

  return (
    <main className='py-4'>
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
          {data.map((asset: AssetType) => (
            <tr key={asset.id}>
              <td>{ asset.rank }</td>
              <td>{ asset.name }<br/>{ asset.symbol }</td>
              <td>{ format(asset.priceUsd) }</td>
              <td className='hidden md:table-cell'>{ format(asset.marketCapUsd) }</td>
              <td className='hidden xl:table-cell'>{ format(asset.vwap24Hr) }</td>
              <td className='hidden lg:table-cell'>{ format(asset.supply) }</td>
              <td className='hidden md:table-cell'>{ format(asset.volumeUsd24Hr) }</td>
              <td>{ format(asset.changePercent24Hr) }</td>
            </tr>
          ))}
        </tbody>
      </table>
    </main>
  );
}
