import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  Tooltip,
  CartesianGrid,
  ResponsiveContainer,
  ReferenceLine,
} from "recharts";
import { revenueData } from "@/data/chartData";
import ChartTooltip from "./ChartTooltip";
import { useHoverMaxValue } from "./useHoverMaxValue";
import ChartLegend from "./ChartLegend";

const SERIES = [
  { key: "expected", name: "Expected", color: "#4FD1C5" },
  { key: "real", name: "Real", color: "#7B7FE0" },
] as const;

function HoverValueLabel({ viewBox, value }: any) {
  const { x, y } = viewBox;
  const boxWidth = 40;
  const boxHeight = 20;

  return (
    <g>
      <rect
        x={x - boxWidth - 6}
        y={y - boxHeight / 2}
        width={boxWidth}
        height={boxHeight}
        rx={4}
        fill="#fff"
        stroke="#D6D9DD"
      />
      <text
        x={x - boxWidth / 2 - 6}
        y={y + 4}
        textAnchor="middle"
        fontSize={12}
        fontWeight={600}
        fill="#333"
      >
        {value.toFixed(1)}
      </text>
    </g>
  );
}

function HoverMaxReferenceLine() {
  const max = useHoverMaxValue(revenueData, "date", ["expected", "real"]);
  if (max == null) return null;

  return (
    <ReferenceLine
      y={max}
      stroke="#ccc"
      strokeDasharray="1"
      label={<HoverValueLabel value={max} />}
    />
  );
}

function CustomYTick({ x, y, payload }: any) {
  const max = useHoverMaxValue(revenueData, "date", ["expected", "real"]);
  const isColliding = max != null && Math.abs(payload.value - max) < 0.4;

  if (isColliding) return null;

  return (
    <text x={x} y={y} dy={4} textAnchor="end" fontSize={10} fill="#666">
      {payload.value}
    </text>
  );
}

export default function RevenueAreaChart() {
  return (
    <div style={{ width: "100%", height: "100%", display: "flex", flexDirection: "column" }}>
      <ChartLegend items={SERIES} shape="circle" />
      <div style={{ flex: 1 }}>
        <ResponsiveContainer width="100%" height="100%">
          <AreaChart data={revenueData} margin={{ top: 10, right: 10, left: 18, bottom: 0 }}>
            <defs>
              <linearGradient id="expectedFill" x1="0" y1="0" x2="0" y2="1">
                <stop stopColor="#4FD1C5" stopOpacity={1} />
              </linearGradient>
              <linearGradient id="realFill" x1="0" y1="0" x2="0" y2="1">
                <stop stopColor="#7B7FE0" stopOpacity={1} />
              </linearGradient>
            </defs>
            <CartesianGrid vertical={false} stroke="#eee" />
            <XAxis dataKey="date" tick={{ fontSize: 11 }} axisLine={false} tickLine={false} />
            <YAxis
              width={30}
              tick={<CustomYTick />}
              axisLine={false}
              tickLine={false}
              ticks={[0, 1, 2, 3, 4, 5, 6]}
            />
            <Tooltip cursor={false} content={<ChartTooltip />} />

            <HoverMaxReferenceLine />

            {SERIES.map((s) => (
              <Area
                key={s.key}
                type="monotone"
                dataKey={s.key}
                name={s.name}
                stroke={s.color}
                fill={`url(#${s.key}Fill)`}
                fillOpacity={1}
                strokeWidth={1}
                activeDot={{ r: 5, stroke: "#fff", strokeWidth: 2 }}
              />
            ))}
          </AreaChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}