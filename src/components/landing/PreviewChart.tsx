import { heroChartData } from "@/data/markets";

const chartWidth = 520;
const chartHeight = 260;
const padding = {
  top: 22,
  right: 18,
  bottom: 34,
  left: 42,
};

const prices = heroChartData.map((point) => point.price);
const minPrice = Math.min(...prices) - 520;
const maxPrice = Math.max(...prices) + 520;
const plotWidth = chartWidth - padding.left - padding.right;
const plotHeight = chartHeight - padding.top - padding.bottom;

const points = heroChartData.map((point, index) => {
  const x = padding.left + (index / (heroChartData.length - 1)) * plotWidth;
  const y =
    padding.top +
    ((maxPrice - point.price) / (maxPrice - minPrice)) * plotHeight;

  return { ...point, x, y };
});

const linePath = points
  .map((point, index) => `${index === 0 ? "M" : "L"} ${point.x.toFixed(1)} ${point.y.toFixed(1)}`)
  .join(" ");

const lastPoint = points[points.length - 1];
const areaPath = `${linePath} L ${lastPoint.x.toFixed(1)} ${chartHeight - padding.bottom} L ${padding.left} ${chartHeight - padding.bottom} Z`;

export function PreviewChart() {
  return (
    <svg
      viewBox={`0 0 ${chartWidth} ${chartHeight}`}
      preserveAspectRatio="none"
      className="h-full w-full overflow-visible"
      role="img"
      aria-label="Mock BTC price performance chart"
    >
      <defs>
        <linearGradient id="previewAreaGradient" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#54f29f" stopOpacity="0.34" />
          <stop offset="62%" stopColor="#1ad7c6" stopOpacity="0.1" />
          <stop offset="100%" stopColor="#54f29f" stopOpacity="0" />
        </linearGradient>
        <linearGradient id="previewLineGradient" x1="0" y1="0" x2="1" y2="0">
          <stop offset="0%" stopColor="#1ad7c6" />
          <stop offset="100%" stopColor="#54f29f" />
        </linearGradient>
      </defs>

      {Array.from({ length: 5 }).map((_, index) => {
        const y = padding.top + (index / 4) * plotHeight;

        return (
          <line
            key={y}
            x1={padding.left}
            x2={chartWidth - padding.right}
            y1={y}
            y2={y}
            stroke="rgba(255,255,255,0.07)"
            strokeDasharray="4 8"
            vectorEffect="non-scaling-stroke"
          />
        );
      })}

      {points.map((point) => {
        const barHeight = Math.max(10, (point.volume / 100) * 44);

        return (
          <rect
            key={point.time}
            x={point.x - 5}
            y={chartHeight - padding.bottom - barHeight}
            width="5"
            height={barHeight}
            rx="2"
            fill="rgba(26,215,198,0.16)"
          />
        );
      })}

      <path d={areaPath} fill="url(#previewAreaGradient)" />
      <path
        d={linePath}
        fill="none"
        stroke="url(#previewLineGradient)"
        strokeWidth="3"
        strokeLinecap="round"
        strokeLinejoin="round"
        vectorEffect="non-scaling-stroke"
      />

      {points.filter((_, index) => index % 3 === 0).map((point) => (
        <text
          key={point.time}
          x={point.x}
          y={chartHeight - 10}
          textAnchor="middle"
          fill="#6f7d8f"
          fontSize="11"
        >
          {point.time}
        </text>
      ))}

      <circle
        cx={lastPoint.x}
        cy={lastPoint.y}
        r="5"
        fill="#54f29f"
        stroke="#05070a"
        strokeWidth="3"
        vectorEffect="non-scaling-stroke"
      />
    </svg>
  );
}
