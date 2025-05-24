
import {
  BarChart3,
  Bed,
  Calendar,
  Users,
  UserCheck,
  Package,
  FileText,
  Settings,
  Shield,
  LayoutDashboard,
} from "lucide-react";
import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarHeader,
  SidebarFooter,
} from "@/components/ui/sidebar";
import { Link, useLocation } from "react-router-dom";
import { cn } from "@/lib/utils";

const menuItems = [
  {
    title: "Dashboard",
    url: "/admin/dashboard",
    icon: LayoutDashboard,
  },
  {
    title: "Rooms",
    url: "/admin/rooms",
    icon: Bed,
  },
  {
    title: "Bookings",
    url: "/admin/bookings",
    icon: Calendar,
  },
  {
    title: "Staff",
    url: "/admin/staff",
    icon: Users,
  },
  {
    title: "Guests",
    url: "/admin/guests",
    icon: UserCheck,
  },
  {
    title: "Analytics",
    url: "/admin/analytics",
    icon: BarChart3,
  },
  {
    title: "Inventory",
    url: "/admin/inventory",
    icon: Package,
  },
  {
    title: "Reports",
    url: "/admin/reports",
    icon: FileText,
  },
  {
    title: "Settings",
    url: "/admin/settings",
    icon: Settings,
  },
  {
    title: "Security",
    url: "/admin/security",
    icon: Shield,
  },
];

export function AdminSidebar() {
  const location = useLocation();

  return (
    <Sidebar className="border-r border-border/40 lg:fixed lg:inset-y-0 lg:z-50 lg:flex lg:w-72 lg:flex-col">
      <SidebarHeader className="border-b border-border/40 p-6">
        <div className="flex items-center gap-2">
          <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-hotel-navy text-hotel-gold">
            <Bed className="h-4 w-4" />
          </div>
          <div className="grid flex-1 text-left text-sm leading-tight">
            <span className="truncate font-semibold text-hotel-navy">Hillcon Royal</span>
            <span className="truncate text-xs text-muted-foreground">Admin Portal</span>
          </div>
        </div>
      </SidebarHeader>
      
      <SidebarContent className="flex-1 overflow-y-auto">
        <SidebarGroup>
          <SidebarGroupLabel className="text-hotel-navy font-medium">
            Management
          </SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {menuItems.map((item) => (
                <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton 
                    asChild
                    className={cn(
                      "transition-colors hover:bg-hotel-navy/10 hover:text-hotel-navy",
                      location.pathname === item.url && "bg-hotel-navy text-white hover:bg-hotel-navy hover:text-white"
                    )}
                  >
                    <Link to={item.url} className="flex items-center gap-3">
                      <item.icon className="h-4 w-4" />
                      <span>{item.title}</span>
                    </Link>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
      
      <SidebarFooter className="border-t border-border/40 p-4">
        <div className="text-xs text-muted-foreground text-center">
          © 2024 Hillcon Royal Hotel
        </div>
      </SidebarFooter>
    </Sidebar>
  );
}
