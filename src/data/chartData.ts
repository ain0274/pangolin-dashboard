export const trendData = [
  { month: "Jan", sessionDuration: 45, pageViews: 78, totalVisits: 65 },
  { month: "Feb", sessionDuration: 50, pageViews: 65, totalVisits: 70 },
  { month: "Mar", sessionDuration: 25, pageViews: 90, totalVisits: 55 },
  { month: "Apr", sessionDuration: 35, pageViews: 60, totalVisits: 68 },
  { month: "May", sessionDuration: 20, pageViews: 55, totalVisits: 45 },
  { month: "Jun", sessionDuration: 15, pageViews: 40, totalVisits: 60 },
  { month: "Jul", sessionDuration: 10, pageViews: 58, totalVisits: 50 },
  { month: "Aug", sessionDuration: 5, pageViews: 45, totalVisits: 62 },
  { month: "Sep", sessionDuration: 8, pageViews: 30, totalVisits: 40 },
  { month: "Oct", sessionDuration: 15, pageViews: 42, totalVisits: 55 },
  { month: "Nov", sessionDuration: 18, pageViews: 38, totalVisits: 48 },
];

export const inventoryData = [
  { name: "완제품", value: 100, fill: "#797BF2" },
  { name: "반제품", value: 80, fill: "#2AAC8E" },
  { name: "원자재", value: 49, fill: "#0398E2" },
  { name: "불량품", value: 20, fill: "#8B8DF2" },
];
export const inventoryTotal = inventoryData.reduce((sum, d) => sum + d.value, 0); // 249

export const shipmentData = [
  { month: "Feb", netProfit: 55, revenue: 75, cashFlow: 35 },
  { month: "Mar", netProfit: 62, revenue: 82, cashFlow: 42 },
  { month: "Apr", netProfit: 58, revenue: 100, cashFlow: 37 },
  { month: "May", netProfit: 57, revenue: 97, cashFlow: 25 },
  { month: "Jun", netProfit: 62, revenue: 85, cashFlow: 45 },
  { month: "Jul", netProfit: 60, revenue: 105, cashFlow: 48 },
  { month: "Aug", netProfit: 65, revenue: 91, cashFlow: 53 },
];

export const revenueData = [
  { date: "11 Nov", expected: 0.5, real: 0.4 },
  { date: "12 Nov", expected: 1.2, real: 1.0 },
  { date: "13 Nov", expected: 2.0, real: 1.8 },
  { date: "14 Nov", expected: 2.9, real: 2.2 },
  { date: "15 Nov", expected: 5.6, real: 5.0 },
  { date: "16 Nov", expected: 3.5, real: 3.0 },
  { date: "17 Nov", expected: 2.0, real: 1.7 },
  { date: "18 Nov", expected: 3.2, real: 2.8 },
  { date: "19 Nov", expected: 4.5, real: 3.9 },
  { date: "20 Nov", expected: 3.8, real: 3.3 },
  { date: "21 Nov", expected: 2.5, real: 2.1 },
  { date: "22 Nov", expected: 3.9, real: 3.4 },
  { date: "23 Nov", expected: 4.8, real: 4.2 },
  { date: "24 Nov", expected: 3.6, real: 3.1 },
  { date: "25 Nov", expected: 2.2, real: 1.9 },
  { date: "26 Nov", expected: 3.0, real: 2.6 },
  { date: "27 Nov", expected: 4.0, real: 3.5 },
];