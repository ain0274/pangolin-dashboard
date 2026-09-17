import { useLocation } from "react-router-dom";
import type { ReactNode } from "react";
import { TbHome } from "react-icons/tb";
import { menuData } from "@/data/menuData";
import toggle from "@assets/images/toggle.svg"
import member from "@assets/images/member.svg"
import logout from "@assets/images/logout.svg"
import downArrow from "@assets/images/down-arrow.svg"
import styles from "./CommonHeader.module.scss"

interface HeaderProps {
  onToggle: () => void
}

function useCurrentMenuLabel() {
  const { pathname } = useLocation();

  interface MenuCandidate {
    label: string;
    icon: ReactNode;
    matchLength: number;
  }
  const candidates: MenuCandidate[] = [];

  const isMatch = (path: string) =>
    path === "/" ? pathname === "/" : pathname === path || pathname.startsWith(`${path}/`)

  for (const item of menuData) {
    if (item.path && isMatch(item.path)) {
      candidates.push({
        label: item.label,
        icon: item.icon ?? <TbHome size={18} strokeWidth={2} />,
        matchLength: item.path.length,
      });
    }
    if (item.children) {
      for (const child of item.children) {
        if (isMatch(child.path)) {
          candidates.push({
            label: child.label,
            icon: item.icon ?? <TbHome size={18} strokeWidth={2} />,
            matchLength: child.path.length,
          });
        }
      }
    }
  }

  if (candidates.length === 0) {
    return { label: "MAIN", icon: <TbHome size={18} strokeWidth={2} /> };
  }

  candidates.sort((a, b) => b.matchLength - a.matchLength);
  return candidates[0];
}

export default function CommonHeader({ onToggle }: HeaderProps) {
  const current = useCurrentMenuLabel();

  return (
    <header className={styles.header}>
      <div className={styles.header__top}>
        <button type="button" onClick={onToggle}>
          <img src={toggle} alt="메뉴" />
        </button>

        <div className={styles.rightSection}>
          <div className={styles.member}>
            <img src={member} alt="회원" />
            <p className={styles.name}>김아인(개발)(FAKR/FINEALTECH)</p>
            <p className={styles.state}>[관리자]</p>
          </div>

          <div className={styles.account}>
            <div className={styles.selectWrapper}>
               {/* TODO: 역할 전환 기능 미구현 - 선택 시 권한별 UI 변경 */}
              <select>
                <option value="admin">관리자</option>
                <option value="user">사용자</option>
              </select>
              <img src={downArrow} alt="선택 화살표" className={styles.arrowIcon} />
            </div>
          </div>

          <button className={styles.logout}>
            <img src={logout} alt="로그아웃" />
          </button>
        </div>
      </div>

      <div className={styles.header__bottom}>
        <button className={styles.homeBtn}>
          {current.icon}
          {current.label}
        </button>
      </div>
    </header>
  )
}