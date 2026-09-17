import type { ReactNode } from "react";
import styles from "./SummaryCard.module.scss"

interface SummaryCardProps {
  title: string;
  children: ReactNode;
}

function SummaryCard({title, children} : SummaryCardProps) {
  return (
    <section className={styles.summarySection}>
        <div className={styles.summaryCard}>
          <h3>{title}</h3>
          <div className={styles.chart}>{children}</div>
        </div>
    </section>
  )
}

export default SummaryCard