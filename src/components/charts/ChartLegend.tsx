interface LegendItem {
  key: string;
  name: string;
  color: string;
}

export default function ChartLegend({
  items,
  shape = "circle",
}: {
  items: readonly LegendItem[];
  shape?: "circle" | "square";
}) {
  return (
    <div style={{ display: "flex", justifyContent: "center", gap: 20, paddingBottom: 15 }}>
      {items.map((item) => (
        <div key={item.key} style={{ display: "flex", alignItems: "center", gap: 6 }}>
          <span
            style={{
              width: 12,
              height: 12,
              backgroundColor: item.color,
              display: "inline-block",
              borderRadius: shape === "circle" ? "50%" : 2,
            }}
          />
          <span style={{ fontSize: 14, color: "#333" }}>{item.name}</span>
        </div>
      ))}
    </div>
  );
}