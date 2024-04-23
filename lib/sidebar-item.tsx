import { Home } from "lucide-react";

export const sidebarItems: {
  title: string;
  icon?: JSX.Element;
  href: string;
}[] = [
  {
    title: "Dashboard",
    icon: <Home className="h-4 w-4" />,
    href: "/dashboard",
  },
  {
    title: "Orders",
    href: "/orders",
  },
];
