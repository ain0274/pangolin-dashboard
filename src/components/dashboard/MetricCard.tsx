import type { ReactNode } from "react";
import styles from "./MetricCard.module.scss"

interface MetricCardProps {
    title: string;
    icon: ReactNode;
    percent: number;
    current: number;
    total: number;
    color: string;
}

function MetricCard({title, icon, percent, current, total, color} : MetricCardProps) {
  return (
    <div className={styles.metricCard}>
        <div className={styles.metricCard__top}>
            <h3>{title}</h3>
            <div className={styles.iconBox}>
                {icon}
            </div>
        </div>
        <div className={styles.metricCard__middle}>
            <p>{percent}%</p>
            <div
                className={styles.percentBar}
                role="progressbar"
                aria-valuenow={percent}
                aria-valuemin={0}
                aria-valuemax={100}
                aria-label={title}
            >
                <div
                    className={styles.percentBar__fill}
                    style={{ width: `${percent}%`, background: color }}
                />
            </div>
        </div>
        <div className={styles.metricCard__bottom}>
            <p  className={styles.process}>{total}</p>
            <p  className={styles.process}>{current}</p>
        </div>
    </div>
  )
}

export default MetricCard