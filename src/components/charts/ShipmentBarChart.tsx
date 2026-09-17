import { Fragment } from "react";
import { BarChart, Bar, XAxis, YAxis, Tooltip, CartesianGrid, ResponsiveContainer, ReferenceLine } from "recharts";
import { shipmentData } from "@/data/chartData";
import ChartTooltip from "./ChartTooltip";
import ChartLegend from "./ChartLegend";

const BASELINE = 70;

const SERIES = [
  { key: "netProfit", name: "Net Profit", color: "#797BF2" },
  { key: "revenue", name: "Revenue", color: "#0398E2" },
  { key: "cashFlow", name: "Free Cash Flow", color: "#2AAC8E" },
] as const;

const formatted = shipmentData.map((d) => {
  const row: Record<string, string | number> = { month: d.month };
  SERIES.forEach(({ key }) => {
    const value = d[key];
    row[`${key}Base`] = Math.min(BASELINE, value);
    row[`${key}Range`] = Math.abs(value - BASELINE);
  });
  return row;
});

export default function ShipmentBarChart() {
  return (
    <div style={{ width: "100%", height: "100%", display: "flex", flexDirection: "column" }}>
      <ChartLegend items={SERIES} shape="circle" />
      <div style={{flex: 1}}>
        <ResponsiveContainer width="100%" height="100%">
          <BarChart data={formatted} margin={{ top: 10, right: 10, left: -20, bottom: 0 }} barGap={2}>
            <CartesianGrid vertical={false} stroke="#eee" />
            <XAxis dataKey="month" tick={{ fontSize: 11 }} axisLine={false} tickLine={false} />
            <YAxis
              tick={{ fontSize: 10 }}
              ticks={[10, 30, 50, 70, 90, 110, 130]}
              axisLine={false}
              tickLine={false}
            />
            <Tooltip cursor={{ fill: "#ccc", fillOpacity: 0.4 }} content={<ChartTooltip suffix="%" />} />

            <ReferenceLine y={BASELINE} stroke="#ccc" strokeDasharray="3 3" />

            {SERIES.map(({ key, name, color }) => (
              <Fragment key={key}>
                <Bar
                  dataKey={`${key}Base`}
                  stackId={key}
                  fill="transparent"
                  name=""
                  legendType="none"
                />
                <Bar
                  dataKey={`${key}Range`}
                  stackId={key}
                  fill={color}
                  name={name}
                />
              </Fragment>
            ))}
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}