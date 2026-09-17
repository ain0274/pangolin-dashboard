import { useActiveTooltipLabel } from "recharts";

export function useHoverMaxValue<T extends Record<string, any>>(
  data: T[],
  labelKey: keyof T,
  seriesKeys: (keyof T)[]
): number | null {
  const label = useActiveTooltipLabel();
  if (label == null) return null;

  const row = data.find((d) => d[labelKey] === label);
  if (!row) return null;

  return Math.max(...seriesKeys.map((k) => row[k] as number));
}