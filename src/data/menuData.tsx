import {
  TbHome,
  TbLayoutDashboard,
  TbId,
  TbClipboardList,
  TbShoppingCart,
  TbSettings,
  TbTruck,
  TbCertificate,
  TbClock,
  TbAdjustments,
  TbArrowsExchange,
  TbTool,
  TbClipboardCheck,
} from "react-icons/tb";

export const ICON_STROKE = 2;

export type ToggleStyle = "chevron" | "plusMinus";

export interface SubMenuItem {
  id: string;
  label: string;
  path: string;
}

export interface MenuItem {
  id: string;
  label: string;
  icon?: React.ReactNode;
  path?: string;
  children?: SubMenuItem[];
  toggleStyle?: ToggleStyle;
}

const iconProps = { size: 18, strokeWidth: ICON_STROKE };

export const menuData: MenuItem[] = [
  { id: "main", label: "MAIN", icon: <TbHome {...iconProps} />, path: "/" },
  { id: "dashboard", label: "현황판", icon: <TbLayoutDashboard {...iconProps} />, path: "/dashboard" },
  { id: "base-info", label: "기준정보", icon: <TbId {...iconProps} />, path: "/base-info" },
  { id: "order-plan", label: "수주/계획관리", icon: <TbClipboardList {...iconProps} />, path: "/order-plan" },
  {
    id: "purchase",
    label: "구매관리",
    icon: <TbShoppingCart {...iconProps} />,
    toggleStyle: "chevron",
    children: [
      { id: "vendor-order", label: "비정규 발주", path: "/purchase/vendor" },
      { id: "regular-order", label: "정규발주", path: "/purchase/regular" },
      { id: "order-status", label: "발주현황", path: "/purchase/status" },
    ],
  },
  {
    id: "shipping-out",
    label: "출발관리",
    toggleStyle: "plusMinus",
    children: [
      { id: "shipping-out-1", label: "출발처리", path: "/shipping-out/1" },
    ],
  },
  {
    id: "material-io",
    label: "자재입출고관리",
    toggleStyle: "plusMinus",
    children: [
      { id: "material-io-1", label: "입출고 현황", path: "/material-io/1" },
    ],
  },
  {
    id: "material-release",
    label: "자재불출",
    toggleStyle: "plusMinus",
    children: [
      { id: "material-release-1", label: "불출 현황", path: "/material-release/1" },
    ],
  },
  {
    id: "inventory",
    label: "재고관리",
    toggleStyle: "plusMinus",
    children: [
      { id: "inventory-1", label: "재고 현황", path: "/inventory/1" },
    ],
  },
  { id: "process", label: "공정관리", icon: <TbSettings {...iconProps} />, path: "/process" },
  { id: "shipping", label: "출하관리", icon: <TbTruck {...iconProps} />, path: "/shipping" },
  { id: "quality", label: "품질관리", icon: <TbCertificate {...iconProps} />, path: "/quality" },
  { id: "closing", label: "마감관리", icon: <TbClock {...iconProps} />, path: "/closing" },
  { id: "common", label: "공통관리", icon: <TbAdjustments {...iconProps} />, path: "/board" },
  { id: "b2bi", label: "B2BI Interface", icon: <TbArrowsExchange {...iconProps} />, path: "/b2bi" },
  { id: "admin", label: "관리자", icon: <TbTool {...iconProps} />, path: "/admin" },
  { id: "project", label: "프로젝트관리", icon: <TbClipboardCheck {...iconProps} />, path: "/project" },
];