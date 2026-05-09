"use client";

import { ArrowDown, ArrowUp, Clock3, Radio } from "lucide-react";

import { Badge } from "@/components/ui/badge";
import { marketAssets, orderBookPreview } from "@/data/markets";
import { PreviewChart } from "./PreviewChart";

const priceFormatter = new Intl.NumberFormat("en-US", {
  style: "currency",
  currency: "USD",
  maximumFractionDigits: 0,
});

const compactFormatter = new Intl.NumberFormat("en-US", {
  maximumFractionDigits: 2,
});

export function DashboardPreview() {
  const activeMarket = marketAssets[0];

  return (
    <div
      id="preview"
      className="relative rounded-lg border border-white/[0.12] bg-[#070b10]/[0.96] p-3 shadow-[0_28px_90px_rgba(0,0,0,0.45)]"
    >
      <div className="absolute inset-0 rounded-lg border border-primary/[0.12]" />
      <div className="relative overflow-hidden rounded-md border border-white/10 bg-[#080d13]">
        <div className="flex flex-wrap items-center justify-between gap-3 border-b border-white/10 px-4 py-3">
          <div>
            <div className="flex items-center gap-2">
              <span className="text-sm font-semibold text-white">
                {activeMarket.symbol}
              </span>
              <Badge variant="success">
                <Radio className="size-3" />
                Live mock
              </Badge>
            </div>
            <div className="mt-1 text-xs text-muted-foreground">
              {activeMarket.name} perpetual market
            </div>
          </div>
          <div className="grid grid-cols-2 gap-2 text-right sm:grid-cols-4">
            <Metric label="Price" value={priceFormatter.format(activeMarket.price)} />
            <Metric
              label="24h"
              value={`+${activeMarket.change24h}%`}
              positive
            />
            <Metric label="Volume" value={activeMarket.volume} />
            <Metric label="Cap" value={activeMarket.marketCap} />
          </div>
        </div>

        <div className="grid min-h-[460px] grid-cols-1 lg:grid-cols-[1fr_230px]">
          <div className="border-b border-white/10 lg:border-b-0 lg:border-r">
            <div className="flex items-center justify-between gap-3 px-4 py-3">
              <div>
                <p className="text-xs uppercase text-muted-foreground">Portfolio equity</p>
                <p className="mt-1 text-2xl font-semibold text-white">$284,590.40</p>
              </div>
              <div className="flex items-center gap-2 rounded-md border border-primary/20 bg-primary/10 px-3 py-2 text-sm text-primary">
                <ArrowUp className="size-4" />
                +$12,840 today
              </div>
            </div>

            <div className="h-[236px] px-1 pb-1 sm:h-[280px]">
              <PreviewChart />
            </div>

            <div className="grid grid-cols-2 gap-3 border-t border-white/10 p-3 md:grid-cols-4">
              {marketAssets.map((asset) => (
                <div
                  key={asset.symbol}
                  className="rounded-md border border-white/10 bg-white/[0.03] p-3 transition-colors hover:border-primary/30 hover:bg-primary/[0.06]"
                >
                  <div className="flex items-center justify-between gap-2">
                    <span className="text-xs font-medium text-white">{asset.symbol}</span>
                    <span
                      className={
                        asset.change24h >= 0
                          ? "text-xs text-primary"
                          : "text-xs text-destructive"
                      }
                    >
                      {asset.change24h >= 0 ? "+" : ""}
                      {asset.change24h}%
                    </span>
                  </div>
                  <div className="mt-2 text-sm text-muted-foreground">
                    {priceFormatter.format(asset.price)}
                  </div>
                </div>
              ))}
            </div>
          </div>

          <aside className="grid grid-cols-1 border-white/10 sm:grid-cols-2 lg:grid-cols-1">
            <div className="border-b border-white/10 p-4 sm:border-b-0 sm:border-r lg:border-b lg:border-r-0">
              <div className="flex items-center justify-between">
                <h3 className="text-sm font-semibold text-white">Order book</h3>
                <span className="font-mono text-xs text-muted-foreground">0.01</span>
              </div>
              <div className="mt-4 space-y-2">
                {orderBookPreview.asks.map((order) => (
                  <OrderRow key={order.price} order={order} side="ask" />
                ))}
                <div className="my-3 rounded-md border border-primary/20 bg-primary/10 px-3 py-2 text-center font-mono text-sm text-primary">
                  {priceFormatter.format(activeMarket.price)}
                </div>
                {orderBookPreview.bids.map((order) => (
                  <OrderRow key={order.price} order={order} side="bid" />
                ))}
              </div>
            </div>

            <div className="p-4">
              <div className="flex items-center justify-between">
                <h3 className="text-sm font-semibold text-white">Recent trades</h3>
                <Clock3 className="size-4 text-muted-foreground" />
              </div>
              <div className="mt-4 space-y-3">
                {[
                  { side: "buy", price: 98420, size: 0.38, time: "15:01:28" },
                  { side: "sell", price: 98390, size: 1.16, time: "15:01:19" },
                  { side: "buy", price: 98404, size: 0.74, time: "15:00:58" },
                  { side: "buy", price: 98411, size: 0.21, time: "15:00:31" },
                ].map((trade) => (
                  <div
                    key={`${trade.time}-${trade.size}`}
                    className="grid grid-cols-[1fr_auto] items-center gap-3 text-xs"
                  >
                    <div className="min-w-0">
                      <div
                        className={
                          trade.side === "buy"
                            ? "flex items-center gap-1 text-primary"
                            : "flex items-center gap-1 text-destructive"
                        }
                      >
                        {trade.side === "buy" ? (
                          <ArrowUp className="size-3" />
                        ) : (
                          <ArrowDown className="size-3" />
                        )}
                        {priceFormatter.format(trade.price)}
                      </div>
                      <div className="mt-1 text-muted-foreground">{trade.time}</div>
                    </div>
                    <div className="font-mono text-muted-foreground">
                      {compactFormatter.format(trade.size)}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </aside>
        </div>
      </div>
    </div>
  );
}

function Metric({
  label,
  value,
  positive = false,
}: {
  label: string;
  value: string;
  positive?: boolean;
}) {
  return (
    <div>
      <div className="text-[11px] text-muted-foreground">{label}</div>
      <div className={positive ? "text-xs font-semibold text-primary" : "text-xs font-semibold text-white"}>
        {value}
      </div>
    </div>
  );
}

function OrderRow({
  order,
  side,
}: {
  order: { price: number; amount: number };
  side: "ask" | "bid";
}) {
  return (
    <div className="grid grid-cols-2 gap-2 font-mono text-xs">
      <span className={side === "ask" ? "text-destructive" : "text-primary"}>
        {priceFormatter.format(order.price)}
      </span>
      <span className="text-right text-muted-foreground">
        {compactFormatter.format(order.amount)}
      </span>
    </div>
  );
}
