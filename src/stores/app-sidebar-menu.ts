import { defineStore } from "pinia";

export const useAppSidebarMenuStore = defineStore({
  id: "appSidebarMenu",
  state: () => {
    return [
      {
        text: "Navigation",
        is_header: true,
      },
      {
        url: "/",
        icon: "fa fa-house",
        text: "Dashboard",
      },
      {
        url: "/user",
        icon: "fa fa-user-circle",
        text: "User",
      },
      {
        url: "/product",
        icon: "fa fa-tv",
        text: "Products",
      },
      {
        url: "/category",
        icon: "fa fa-layer-group",
        text: "Category",
      },
      {
        url: "/order",
        icon: "fa fa-handshake",
        text: "Order",
      },
      {
        url: "/discount",
        icon: "fa fa-percent",
        text: "Discount",
      },
      {
        url: "/event",
        icon: "fa fa-calendar",
        text: "Event",
      },
      {
        url: "/post",
        icon: "fa fa-pen",
        text: "Post",
      },
      {
        url: "/log",
        icon: "fa fa-pen",
        text: "Log",
      },
      {
        is_divider: true,
      },
      {
        text: "Components",
        is_header: true,
      },
      {
        url: "/",
        icon: "fa fa-laptop",
        text: "Dashboard",
      },
      {
        url: "/analytics",
        icon: "fa fa-chart-pie",
        text: "Analytics",
      },
      {
        url: "/email/",
        icon: "fa fa-envelope",
        text: "Email",
        label: "6",
        children: [
          { url: "/email/inbox", text: "Inbox" },
          { url: "/email/compose", text: "Compose" },
          { url: "/email/detail", text: "Detail" },
        ],
      },
      {
        url: "/widgets",
        icon: "fa fa-qrcode",
        text: "Widgets",
      },
      {
        url: "/ui/",
        icon: "fa fa-heart",
        text: "UI Kits",
        children: [
          { url: "/ui/bootstrap", text: "Bootstrap" },
          { url: "/ui/buttons", text: "Buttons" },
          { url: "/ui/card", text: "Card" },
          { url: "/ui/icons", text: "Icons" },
          { url: "/ui/modal-notifications", text: "Modal & Notifications" },
          { url: "/ui/typography", text: "Typography" },
          { url: "/ui/tabs-accordions", text: "Tabs & Accordions" },
        ],
      },
      {
        url: "/form/",
        icon: "fa fa-file-alt",
        text: "Forms",
        children: [
          { url: "/form/elements", text: "Form Elements" },
          { url: "/form/plugins", text: "Form Plugins" },
          { url: "/form/wizards", text: "Wizards" },
        ],
      },
      {
        url: "/table/",
        icon: "fa fa-table",
        text: "Tables",
        children: [
          { url: "/table/elements", text: "Table Elements" },
          { url: "/table/plugins", text: "Table Plugins" },
        ],
      },
      {
        url: "/chart/",
        icon: "fa fa-chart-bar",
        text: "Charts",
        children: [
          { url: "/chart/chart-js", text: "Chart.js" },
          { url: "/chart/chart-apex", text: "Apexcharts.js" },
        ],
      },
      {
        url: "/map",
        icon: "fa fa-map-marker-alt",
        text: "Map",
      },
      {
        url: "/layout",
        icon: "fa fa-code-branch",
        text: "Layout",
        children: [
          { url: "/layout/starter-page", text: "Starter Page" },
          { url: "/layout/fixed-footer", text: "Fixed Footer" },
          { url: "/layout/full-height", text: "Full Height" },
          { url: "/layout/full-width", text: "Full Width" },
          { url: "/layout/boxed-layout", text: "Boxed Layout" },
          { url: "/layout/minified-sidebar", text: "Minified Sidebar" },
        ],
      },
      {
        url: "/page/",
        icon: "fa fa-globe",
        text: "Pages",
        children: [
          { url: "/page/scrum-board", text: "Scrum Board" },
          { url: "/page/product", text: "Products" },
          { url: "/page/order", text: "Orders" },
          { url: "/page/gallery", text: "Gallery" },
          { url: "/page/search-results", text: "Search Results" },
          { url: "/page/coming-soon", text: "Coming Soon Page" },
          { url: "/page/error", text: "Error Page" },
          { url: "/page/login", text: "Login" },
          { url: "/page/register", text: "Register" },
        ],
      },
      {
        is_divider: true,
      },
      {
        text: "Users",
        is_header: true,
      },
      {
        url: "/profile",
        icon: "fa fa-user-circle",
        text: "Profile",
      },
      {
        url: "/calendar",
        icon: "fa fa-calendar",
        text: "Calendar",
      },
      {
        url: "/settings",
        icon: "fa fa-cog",
        text: "Settings",
      },
      {
        url: "/helper",
        icon: "fa fa-question-circle",
        text: "Helper",
      },
    ];
  },
});
