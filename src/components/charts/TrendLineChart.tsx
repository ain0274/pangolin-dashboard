// charts/TrendLineChart.tsx
import { trendData } from "@/data/chartData";
import { CartesianGrid, Line, LineChart, ResponsiveContainer, Tooltip, XAxis, YAxis } from "recharts";
import ChartTooltip from "./ChartTooltip";
import ChartLegend from "./ChartLegend";

const SERIES = [
  { key: "sessionDuration", name: "Session Duration", color: "#797BF2" },
  { key: "pageViews", name: "Page Views", color: "#0398E2" },
  { key: "totalVisits", name: "Total Visits", color: "#2AAC8E" },
] as const;

function TrendLineChart() {
  return (
    <div style={{ width: "100%", height: "100%", display: "flex", flexDirection: "column" }}>
      <ChartLegend items={SERIES} shape="circle" />
      <div style={{ flex: 1 }}>
        <ResponsiveContainer width="100%" height="100%">
          <LineChart data={trendData} margin={{ top: 10, right: 10, left: -20, bottom: 0 }}>
            <CartesianGrid vertical={false} stroke="#eee" />
            <XAxis dataKey="month" tick={{ fontSize: 11 }} axisLine={false} tickLine={false} />
            <YAxis tick={{ fontSize: 10 }} axisLine={false} tickLine={false} />
            <Tooltip content={<ChartTooltip suffix="%" />} />
            {SERIES.map((s) => (
              <Line
                key={s.key}
                type="linear"
                dataKey={s.key}
                name={s.name}
                stroke={s.color}
                strokeWidth={2}
                strokeDasharray={s.key === "sessionDuration" ? undefined : s.key === "pageViews" ? "8 4" : "4 3"}
                dot={false}
              />
            ))}
          </LineChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}

export default TrendLineChart;