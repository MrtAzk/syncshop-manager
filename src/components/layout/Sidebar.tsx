import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import {
  BarChart3,
  Box,
  ChevronLeft,
  ChevronRight,
  HelpCircle,
  LayoutDashboard,
  Link2,
  Settings,
  ShoppingCart,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const menuItems = [
  {
    title: "Dashboard",
    icon: LayoutDashboard,
    path: "/",
  },
  {
    title: "Ürün Yönetimi",
    icon: Box,
    path: "/products",
  },
  {
    title: "Stok Takibi",
    icon: BarChart3,
    path: "/inventory",
  },
  {
    title: "Eşleştirme Merkezi",
    icon: Link2,
    path: "/matching",
  },
  {
    title: "Siparişler",
    icon: ShoppingCart,
    path: "/orders",
  },
  {
    title: "Ayarlar",
    icon: Settings,
    path: "/settings",
  },
];

export function Sidebar() {
  const [collapsed, setCollapsed] = useState(false);
  const location = useLocation();

  return (
    <div
      className={cn(
        "h-screen fixed left-0 top-0 bottom-0 bg-gray-900 text-white transition-all duration-300 z-50",
        collapsed ? "w-16" : "w-64"
      )}
    >
      <div className="flex flex-col h-full">
        <div className="h-16 md:h-[64px] flex items-center justify-between px-4 border-b border-gray-800">
          <span className={cn("font-semibold", collapsed && "hidden")}>
            Admin Panel
          </span>
          <Button
            variant="ghost"
            size="icon"
            onClick={() => setCollapsed(!collapsed)}
            className="text-white hover:text-white hover:bg-gray-800"
          >
            {collapsed ? (
              <ChevronRight className="h-4 w-4" />
            ) : (
              <ChevronLeft className="h-4 w-4" />
            )}
          </Button>
        </div>

        <div className="flex-1 py-4">
          <nav className="space-y-1 px-2">
            {menuItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className={cn(
                  "flex items-center gap-3 px-3 py-2 rounded-md transition-colors",
                  location.pathname === item.path
                    ? "bg-gray-800 text-white"
                    : "text-gray-400 hover:text-white hover:bg-gray-800"
                )}
              >
                <item.icon className="h-5 w-5" />
                <span className={cn("text-sm", collapsed && "hidden")}>
                  {item.title}
                </span>
              </Link>
            ))}
          </nav>
        </div>

        <div className="p-4 border-t border-gray-800">
          <Button
            variant="ghost"
            className={cn(
              "w-full justify-start text-gray-400 hover:text-white hover:bg-gray-800",
              collapsed && "justify-center"
            )}
          >
            <HelpCircle className="h-5 w-5" />
            <span className={cn("ml-2", collapsed && "hidden")}>Yardım</span>
          </Button>
        </div>
      </div>
    </div>
  );
}