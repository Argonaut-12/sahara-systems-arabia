import { useState } from "react";
import { 
  Home, 
  Users, 
  Clock, 
  DollarSign, 
  GraduationCap, 
  Stethoscope,
  FileText,
  Settings,
  BarChart3,
  Calendar,
  UserCheck,
  Briefcase
} from "lucide-react";
import { NavLink, useLocation } from "react-router-dom";
import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  useSidebar,
} from "@/components/ui/sidebar";
import { Badge } from "@/components/ui/badge";

const menuItems = [
  {
    title: "لوحة التحكم",
    url: "/",
    icon: Home,
    badge: null
  },
  {
    title: "إدارة الموظفين",
    url: "/employees",
    icon: Users,
    badge: "248"
  },
  {
    title: "الحضور والانصراف",
    url: "/attendance",
    icon: Clock,
    badge: "12"
  },
  {
    title: "كشوف المرتبات",
    url: "/payroll",
    icon: DollarSign,
    badge: null
  },
  {
    title: "التدريب والتطوير",
    url: "/training",
    icon: GraduationCap,
    badge: "5"
  },
  {
    title: "الخدمات الطبية",
    url: "/medical",
    icon: Stethoscope,
    badge: null
  }
];

const hrSubItems = [
  {
    title: "الإجازات",
    url: "/leaves",
    icon: Calendar,
    badge: "12"
  },
  {
    title: "السلف",
    url: "/advances",
    icon: DollarSign,
    badge: "5"
  },
  {
    title: "مكافآت نهاية الخدمة",
    url: "/end-of-service",
    icon: FileText,
    badge: null
  },
  {
    title: "الساعات الإضافية",
    url: "/overtime",
    icon: Clock,
    badge: "18"
  }
];

const reportsItems = [
  {
    title: "التقارير",
    url: "/reports",
    icon: BarChart3,
    badge: null
  },
  {
    title: "التقويم",
    url: "/calendar",
    icon: Calendar,
    badge: null
  },
  {
    title: "المهام",
    url: "/tasks",
    icon: FileText,
    badge: "8"
  }
];

const systemItems = [
  {
    title: "الإعدادات",
    url: "/settings",
    icon: Settings,
    badge: null
  }
];

export function AppSidebar() {
  const { state } = useSidebar();
  const location = useLocation();
  const currentPath = location.pathname;
  const isCollapsed = state === "collapsed";

  const isActive = (path: string) => currentPath === path;

  const getNavClass = (path: string) => {
    const baseClass = "w-full flex items-center gap-3 px-3 py-2.5 rounded-lg transition-all duration-200 text-sm font-medium";
    if (isActive(path)) {
      return `${baseClass} bg-primary text-primary-foreground shadow-md`;
    }
    return `${baseClass} text-sidebar-foreground hover:bg-sidebar-accent hover:text-sidebar-accent-foreground hover:scale-105`;
  };

  return (
    <Sidebar
      className={`${isCollapsed ? "w-16" : "w-64"} border-l border-sidebar-border transition-all duration-300`}
    >
      <SidebarContent className="bg-sidebar">
        {/* Company Header */}
        <div className="p-4 border-b border-sidebar-border">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-primary rounded-lg flex items-center justify-center">
              <Briefcase className="w-6 h-6 text-primary-foreground" />
            </div>
            {!isCollapsed && (
              <div className="flex flex-col">
                <h2 className="text-base font-bold text-sidebar-foreground">نظام الموارد البشرية</h2>
                <p className="text-xs text-sidebar-foreground/60">الشركة الصناعية</p>
              </div>
            )}
          </div>
        </div>

        {/* Main Menu */}
        <SidebarGroup>
          <SidebarGroupLabel className="text-sidebar-foreground/80 font-semibold px-4 py-2">
            {!isCollapsed && "القائمة الرئيسية"}
          </SidebarGroupLabel>
          
          <SidebarGroupContent className="px-2">
            <SidebarMenu>
              {menuItems.map((item) => (
                <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton asChild className="h-auto p-0">
                    <NavLink to={item.url} className={getNavClass(item.url)}>
                      <item.icon className={`${isCollapsed ? "w-5 h-5" : "w-4 h-4"} flex-shrink-0`} />
                      {!isCollapsed && (
                        <>
                          <span className="flex-1">{item.title}</span>
                          {item.badge && (
                            <Badge className="text-xs px-2 py-0.5 bg-primary/10 text-primary border-primary/20">
                              {item.badge}
                            </Badge>
                          )}
                        </>
                      )}
                    </NavLink>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>

        {/* HR Sub-sections */}
        <SidebarGroup>
          <SidebarGroupLabel className="text-sidebar-foreground/80 font-semibold px-4 py-2">
            {!isCollapsed && "أقسام الموارد البشرية"}
          </SidebarGroupLabel>
          
          <SidebarGroupContent className="px-2">
            <SidebarMenu>
              {hrSubItems.map((item) => (
                <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton asChild className="h-auto p-0">
                    <NavLink to={item.url} className={getNavClass(item.url)}>
                      <item.icon className={`${isCollapsed ? "w-5 h-5" : "w-4 h-4"} flex-shrink-0`} />
                      {!isCollapsed && (
                        <>
                          <span className="flex-1">{item.title}</span>
                          {item.badge && (
                            <Badge className="text-xs px-2 py-0.5 bg-primary/10 text-primary border-primary/20">
                              {item.badge}
                            </Badge>
                          )}
                        </>
                      )}
                    </NavLink>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>

        {/* Reports Section */}
        <SidebarGroup>
          <SidebarGroupLabel className="text-sidebar-foreground/80 font-semibold px-4 py-2">
            {!isCollapsed && "التقارير والمتابعة"}
          </SidebarGroupLabel>
          
          <SidebarGroupContent className="px-2">
            <SidebarMenu>
              {reportsItems.map((item) => (
                <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton asChild className="h-auto p-0">
                    <NavLink to={item.url} className={getNavClass(item.url)}>
                      <item.icon className={`${isCollapsed ? "w-5 h-5" : "w-4 h-4"} flex-shrink-0`} />
                      {!isCollapsed && (
                        <>
                          <span className="flex-1">{item.title}</span>
                          {item.badge && (
                            <Badge className="text-xs px-2 py-0.5 bg-warning/10 text-warning border-warning/20">
                              {item.badge}
                            </Badge>
                          )}
                        </>
                      )}
                    </NavLink>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>

        {/* System Section */}
        <SidebarGroup>
          <SidebarGroupContent className="px-2 pb-4">
            <SidebarMenu>
              {systemItems.map((item) => (
                <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton asChild className="h-auto p-0">
                    <NavLink to={item.url} className={getNavClass(item.url)}>
                      <item.icon className={`${isCollapsed ? "w-5 h-5" : "w-4 h-4"} flex-shrink-0`} />
                      {!isCollapsed && <span className="flex-1">{item.title}</span>}
                    </NavLink>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
    </Sidebar>
  );
}