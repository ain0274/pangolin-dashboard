import { Link } from "react-router-dom";
import SidebarMenu from "./SidebarMenu"
import logo from "@assets/images/logo.svg"
import rightArrow from "@assets/images/right-arrow.svg"
import styles from "./Sidebar.module.scss"

interface SidebarProps {
  isOpen: boolean;
}

export default function Sidebar({ isOpen }: SidebarProps) {
  return (
    <aside className={`${styles.sideBar} ${isOpen ? styles.open : ''}`}>
      <Link to="/" className={styles.sideBar__top}>
        <img src={logo} alt="PANGOLIN 로고" width={29} />
        <h1>PANGOLIN</h1>
      </Link>

      <div className={styles.sideBar__main}>
        <SidebarMenu />
      </div>

      <div className={styles.sideBar__bottom}>
        {/* TODO: 관리자 페이지 라우팅 미구현 */}
        <button>
          관리자
          <img src={rightArrow} alt="관리자 바로가기"/>
        </button>
        {/* TODO: 다국어 관리 페이지 라우팅 미구현 */}
        <button>
          다국어 관리
          <img src={rightArrow} alt="다국어 관리 바로가기"/>
        </button>
      </div>
    </aside>
  )
}
