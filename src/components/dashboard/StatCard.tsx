import type { ReactNode } from "react"
import moreBtn from "@assets/images/more.svg"
import styles from "./StatCard.module.scss"

interface StatCardProps{
    title: string,
    children: ReactNode
}

function StatCard({ title, children }: StatCardProps) {
  return (
    <div className={styles.statCard}>
        <div className={styles.statCard__top}>
            <h3>{title}</h3>
            <button>
                <img src={moreBtn} alt="메뉴" />
            </button>
        </div>
        <div className={styles.statCard__bottom}>{children}</div>
    </div>
    
  )
}

export default StatCard