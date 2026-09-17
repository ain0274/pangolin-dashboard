import MetricCard from "@/components/dashboard/MetricCard";
import StatCard from "@/components/dashboard/StatCard";
import SummaryCard from "@/components/dashboard/SummaryCard";
import TrendLineChart from "@/components/charts/TrendLineChart";
import InventoryRadialChart from "@/components/charts/InventoryRadialChart";
import ShipmentBarChart from "@/components/charts/ShipmentBarChart";
import RevenueAreaChart from "@/components/charts/RevenueAreaChart";
import { TbSettings, TbClipboardCheck, TbGauge, TbShoppingCart, TbCurrencyDollar } from "react-icons/tb";
import styles from "./DashBoard.module.scss"

const ICON_STROKE = 2.5;

export const metrics = [
  {
    title: "설비가동률",
    icon: <TbSettings size={25} color="#3FB27F" strokeWidth={ICON_STROKE} />,
    percent: 68, current: 68, total: 100, color: "#3FB27F",
  },
  {
    title: "발주/입고율",
    icon: <TbClipboardCheck size={25} color="#F0568C" strokeWidth={ICON_STROKE} />,
    percent: 35, current: 15, total: 55, color: "#F0568C",
  },
  {
    title: "계획대비 실적율",
    icon: <TbGauge size={25} color="#7B7FE0" strokeWidth={ICON_STROKE} />,
    percent: 75, current: 75, total: 100, color: "#7B7FE0",
  },
  {
    title: "주문대비 출하율",
    icon: <TbShoppingCart size={25} color="#F5A623" strokeWidth={ICON_STROKE} />,
    percent: 25, current: 13, total: 50, color: "#F5A623",
  },
  {
    title: "매입/매출(금액)",
    icon: <TbCurrencyDollar size={25} color="#4FA8E8" strokeWidth={ICON_STROKE} />,
    percent: 50, current: 25, total: 50, color: "#4FA8E8",
  },
];

export default function Dashboard() {

  return (
    <section className={styles.mainSection}>
      <section className={styles.metricSection}>
        {metrics.map((m) => (
          <MetricCard key={m.title} {...m} />
        ))}
      </section>

      <section className={styles.statSection}>
        <StatCard title="고객사 변동 현황"><TrendLineChart /></StatCard>
        <StatCard title="재고 현황"><InventoryRadialChart /></StatCard>
        <StatCard title="출발처리 대비 입현황"><ShipmentBarChart /></StatCard>
      </section>

      <SummaryCard title="매입/매출현황(주간)">
        <RevenueAreaChart />
      </SummaryCard>
    </section>
  )
}
