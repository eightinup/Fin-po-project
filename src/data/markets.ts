import type { ChartPoint, MarketAsset } from "@/types/market";

export const marketAssets: MarketAsset[] = [
  {
    symbol: "BTC/USD",
    name: "Bitcoin",
    price: 98420.18,
    change24h: 2.84,
    volume: "$42.8B",
    marketCap: "$1.94T",
  },
  {
    symbol: "ETH/USD",
    name: "Ethereum",
    price: 6420.74,
    change24h: 1.36,
    volume: "$19.6B",
    marketCap: "$773.2B",
  },
  {
    symbol: "SOL/USD",
    name: "Solana",
    price: 286.14,
    change24h: -0.92,
    volume: "$5.4B",
    marketCap: "$132.7B",
  },
  {
    symbol: "ARB/USD",
    name: "Arbitrum",
    price: 1.84,
    change24h: 4.18,
    volume: "$884.1M",
    marketCap: "$8.9B",
  },
];

export const heroChartData: ChartPoint[] = [
  { time: "09:30", price: 97210, volume: 42 },
  { time: "10:00", price: 97840, volume: 54 },
  { time: "10:30", price: 97480, volume: 47 },
  { time: "11:00", price: 98220, volume: 63 },
  { time: "11:30", price: 98680, volume: 71 },
  { time: "12:00", price: 98190, volume: 58 },
  { time: "12:30", price: 98970, volume: 76 },
  { time: "13:00", price: 99440, volume: 88 },
  { time: "13:30", price: 99120, volume: 69 },
  { time: "14:00", price: 99860, volume: 91 },
  { time: "14:30", price: 100180, volume: 96 },
  { time: "15:00", price: 98420, volume: 79 },
];

export const orderBookPreview = {
  asks: [
    { price: 98680.5, amount: 1.842 },
    { price: 98642.2, amount: 0.928 },
    { price: 98618.9, amount: 2.146 },
  ],
  bids: [
    { price: 98396.4, amount: 1.372 },
    { price: 98364.8, amount: 3.056 },
    { price: 98320.1, amount: 0.784 },
  ],
};
