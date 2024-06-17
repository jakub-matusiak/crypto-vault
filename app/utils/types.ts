export type AssetType = {
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

export type MarketType = {
  exchangeId: string,
  baseId: string,
  quoteId: string,
  baseSymbol: string,
  quoteSymbol: string,
  volumeUsd24Hr: string,
  priceUsd: string,
  volumePercent: string,
}
