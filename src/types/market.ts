export type MarketAsset = {
  symbol: string;
  name: string;
  price: number;
  change24h: number;
  volume: string;
  marketCap: string;
};

export type ChartPoint = {
  time: string;
  price: number;
  volume: number;
};
