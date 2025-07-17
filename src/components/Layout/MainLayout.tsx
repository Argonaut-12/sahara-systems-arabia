import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";
import { AppSidebar } from "./AppSidebar";
import { Toaster } from "@/components/ui/toaster";
import { Bell, User, Settings } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { useNavigate } from "react-router-dom";

interface MainLayoutProps {
  children: React.ReactNode;
}

export function MainLayout({ children }: MainLayoutProps) {
  const navigate = useNavigate();

  return (
    <SidebarProvider>
      <div className="min-h-screen w-full bg-background flex">
        <AppSidebar />
        
        <div className="flex-1 flex flex-col">
          {/* Header */}
          <header className="h-16 border-b border-border bg-card/50 backdrop-blur-sm">
            <div className="h-full flex items-center justify-between px-6">
              <div className="flex items-center gap-4">
                <SidebarTrigger className="text-foreground" />
                <div className="flex flex-col">
                  <h1 className="text-lg font-semibold text-foreground">نظام إدارة الموارد البشرية</h1>
                  <p className="text-sm text-muted-foreground">الشركة الصناعية المتقدمة</p>
                </div>
              </div>
              
              <div className="flex items-center gap-3">
                <Button variant="ghost" size="icon" className="relative hover-lift">
                  <Bell className="h-5 w-5" />
                  <Badge 
                    variant="destructive" 
                    className="absolute -top-1 -right-1 h-5 w-5 flex items-center justify-center p-0 text-xs"
                  >
                    3
                  </Badge>
                </Button>
                
                <Button 
                  variant="ghost" 
                  size="icon" 
                  className="hover-lift"
                  onClick={() => navigate("/settings")}
                >
                  <Settings className="h-5 w-5" />
                </Button>
                
                <div className="flex items-center gap-3 pr-3 border-r border-border">
                  <div className="text-right">
                    <p className="text-sm font-medium">أحمد محمد</p>
                    <p className="text-xs text-muted-foreground">مدير الموارد البشرية</p>
                  </div>
                  <Button variant="ghost" size="icon" className="hover-lift">
                    <User className="h-5 w-5" />
                  </Button>
                </div>
              </div>
            </div>
          </header>

          {/* Main Content */}
          <main className="flex-1 overflow-auto">
            <div className="content-container section-padding">
              {children}
            </div>
          </main>
        </div>
      </div>
      <Toaster />
    </SidebarProvider>
  );
}