interface PayloadEntry {
  name: string;
  value: number | string;
  color?: string;
  stroke?: string;
  dataKey: string;
}

interface ChartTooltipProps {
  active?: boolean;
  payload?: PayloadEntry[];
  label?: string;
  excludeKeys?: string[];
  suffix?: string;
}

export default function ChartTooltip({
  active,
  payload,
  label,
  excludeKeys = [],
  suffix = "%",
}: ChartTooltipProps) {
  if (!active || !payload || !payload.length) return null;

  const visibleEntries = payload.filter(
    (entry) => entry.name && !excludeKeys.includes(entry.dataKey)
  );

  if (!visibleEntries.length) return null;

  return (
    <div
      style={{
        backgroundColor: "#ffffff",
        borderRadius: "8px",
        boxShadow: "0px 4px 12px rgba(0, 0, 0, 0.08)",
        border: "1px solid #eef0f3",
        minWidth: "130px",
      }}
    >
      <p
        style={{
          width: "100%",
          fontSize: "12px",
          color: "#6b7280",
          fontWeight: 500,
          borderBottom: "1px solid #f0f2f5",
          background: "#ECEFF1",
          padding: "7px 8px",
          borderRadius: "8px 8px 0 0",
        }}
      >
        {label}
      </p>

      <div style={{ display: "flex", flexDirection: "column", gap: "6px", padding: "6px 0" }}>
        {visibleEntries.map((entry, index) => (
          <div
            key={`tooltip-item-${index}`}
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              fontSize: "13px",
              padding: "5px 8px",
            }}
          >
            <div style={{ display: "flex", alignItems: "center", gap: "6px" }}>
              <span
                style={{
                  width: "8px",
                  height: "8px",
                  borderRadius: "50%",
                  backgroundColor: entry.color || entry.stroke,
                  display: "inline-block",
                }}
              />
              <span style={{ color: "#4b5563" }}>{entry.name}:</span>
            </div>
            <span style={{ fontWeight: 700, color: "#1f2937", marginLeft: "8px" }}>
              {entry.value}
              {suffix}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}