import { RadialBarChart, RadialBar, ResponsiveContainer, PolarAngleAxis } from "recharts";
import { inventoryData, inventoryTotal } from "@/data/chartData";

export default function InventoryRadialChart() {
  return (
    <div style={{ position: "relative", width: "100%", height: "100%" }}>
      <ResponsiveContainer width="100%" height="100%">
        <RadialBarChart
          innerRadius="30%"
          outerRadius="90%"
          barSize={12}
          data={inventoryData}
          startAngle={90}
          endAngle={-270}
        >
          <PolarAngleAxis type="number" domain={[0, inventoryTotal ]} tick={false} axisLine={false} />
          <RadialBar
            background={{ fill: "#EFEFEF" }}
            dataKey="value"
            cornerRadius={10}
          />
        </RadialBarChart>
      </ResponsiveContainer>
      <div
        style={{
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          textAlign: "center",
        }}
      >
        <p style={{ fontSize: 13, color: "#888" }}>Total</p>
        <p style={{ fontSize: 20, fontWeight: 700 }}>{inventoryTotal}</p>
      </div>
    </div>
  );
}