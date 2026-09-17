import { useState } from "react";
import { NavLink } from "react-router-dom";
import { TbChevronDown, TbChevronUp, TbPlus, TbMinus, TbChevronRight, TbSearch } from "react-icons/tb";
import { menuData, ICON_STROKE } from "@/data/menuData";
import styles from "./SidebarMenu.module.scss";

export default function SidebarMenu() {
  const [openId, setOpenId] = useState<string | null>(null);

  const toggle = (id: string) => {
    setOpenId((prev) => (prev === id ? null : id));
  };

  return (
    <nav className={styles.menu}>
      <div className={styles.search}>
        {/* TODO: 검색 기능 미구현 */}
        <input type="text" placeholder="Search" />
        <TbSearch size={16} strokeWidth={ICON_STROKE} />
      </div>

      {menuData.map((item) => {
        const isOpen = openId === item.id;

        if (!item.children) {
          return (
            <NavLink
              key={item.id}
              to={item.path!}
              className={({ isActive }) =>
                `${styles.menu__item} ${isActive ? styles["menu__item--active"] : ""}`
              }
            >
              {item.icon && <span className={styles.menu__icon}>{item.icon}</span>}
              <span className={styles.menu__label}>{item.label}</span>
            </NavLink>
          );
        }

        const ToggleIcon =
          item.toggleStyle === "plusMinus"
            ? isOpen
              ? TbMinus
              : TbPlus
            : isOpen
            ? TbChevronUp
            : TbChevronDown;

        return (
          <div key={item.id} className={styles.menu__group}>
            <button
              className={`${styles.menu__item} ${isOpen ? styles["menu__item--open"] : ""}`}
              onClick={() => toggle(item.id)}
            >
              {item.icon && <span className={styles.menu__icon}>{item.icon}</span>}
              <span className={styles.menu__label}>{item.label}</span>
              <ToggleIcon size={16} strokeWidth={ICON_STROKE} className={styles.menu__toggle} />
            </button>

            {isOpen && (
              <div className={styles.submenu}>
                {item.children.map((child) => (
                  <NavLink
                    key={child.id}
                    to={child.path}
                    className={({ isActive }) =>
                      `${styles.submenu__item} ${isActive ? styles["submenu__item--active"] : ""}`
                    }
                  >
                    <TbChevronRight size={14} strokeWidth={ICON_STROKE} />
                    <span>{child.label}</span>
                  </NavLink>
                ))}
              </div>
            )}
          </div>
        );
      })}
    </nav>
  );
}