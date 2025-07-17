import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { MainLayout } from "@/components/Layout/MainLayout";
import { 
  Download, 
  FileText, 
  Database, 
  Settings as SettingsIcon,
  Users,
  Calendar,
  DollarSign,
  Clock,
  Archive,
  FileSpreadsheet,
  Package
} from "lucide-react";

const Settings = () => {
  const projectStats = {
    employees: 248,
    departments: 8,
    activeLeaves: 23,
    pendingAdvances: 8,
    totalAdvances: 450000,
    attendanceRecords: 12450,
    overtimeHours: 1840
  };

  const exportOptions = [
    {
      title: "بيانات الموظفين",
      description: "تصدير قائمة جميع الموظفين مع التفاصيل الشخصية والوظيفية",
      icon: Users,
      format: "Excel",
      count: projectStats.employees
    },
    {
      title: "سجلات الحضور والانصراف",
      description: "تصدير بيانات الحضور والانصراف لجميع الموظفين",
      icon: Clock,
      format: "Excel",
      count: projectStats.attendanceRecords
    },
    {
      title: "طلبات الإجازات",
      description: "تصدير جميع طلبات الإجازات والإجازات التعويضية",
      icon: Calendar,
      format: "PDF/Excel",
      count: projectStats.activeLeaves
    },
    {
      title: "نظام السلف",
      description: "تصدير بيانات السلف والمبالغ والاستقطاعات",
      icon: DollarSign,
      format: "Excel",
      count: projectStats.pendingAdvances
    },
    {
      title: "العمل الإضافي",
      description: "تصدير ساعات العمل الإضافي والمكافآت",
      icon: Clock,
      format: "Excel",
      count: projectStats.overtimeHours
    },
    {
      title: "تقارير نهاية الخدمة",
      description: "تصدير حسابات ومكافآت نهاية الخدمة",
      icon: Archive,
      format: "PDF",
      count: 12
    }
  ];

  const systemInfo = {
    version: "2.1.0",
    lastBackup: "2024-01-15 14:30",
    totalUsers: 45,
    storage: "2.4 GB",
    uptime: "99.8%"
  };

  const handleExport = (type: string) => {
    // In a real app, this would trigger the actual export
    console.log(`Exporting ${type}...`);
    
    // Create a mock file download
    const element = document.createElement('a');
    const file = new Blob([`تصدير ${type} - ${new Date().toISOString()}`], {type: 'text/plain'});
    element.href = URL.createObjectURL(file);
    element.download = `${type}_${new Date().toISOString().split('T')[0]}.txt`;
    document.body.appendChild(element);
    element.click();
    document.body.removeChild(element);
  };

  const handleExportAll = () => {
    // Export all data
    const allData = {
      employees: projectStats.employees,
      departments: projectStats.departments,
      leaves: projectStats.activeLeaves,
      advances: projectStats.pendingAdvances,
      attendance: projectStats.attendanceRecords,
      overtime: projectStats.overtimeHours,
      exportDate: new Date().toISOString(),
      systemInfo: systemInfo
    };

    const element = document.createElement('a');
    const file = new Blob([JSON.stringify(allData, null, 2)], {type: 'application/json'});
    element.href = URL.createObjectURL(file);
    element.download = `hr_system_complete_export_${new Date().toISOString().split('T')[0]}.json`;
    document.body.appendChild(element);
    element.click();
    document.body.removeChild(element);
  };

  return (
    <MainLayout>
      <div className="space-y-6">
        {/* Page Header */}
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-3xl font-bold text-foreground">الإعدادات والتصدير</h1>
            <p className="text-muted-foreground">إدارة النظام وتصدير البيانات</p>
          </div>
          <Button onClick={handleExportAll} className="gap-2 bg-primary text-primary-foreground">
            <Package className="w-4 h-4" />
            تصدير جميع البيانات
          </Button>
        </div>

        {/* System Overview */}
        <div className="grid grid-cols-1 md:grid-cols-5 gap-6">
          <Card>
            <CardHeader className="pb-2">
              <CardTitle className="text-sm font-medium text-muted-foreground">إجمالي الموظفين</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-primary">{projectStats.employees}</div>
            </CardContent>
          </Card>
          
          <Card>
            <CardHeader className="pb-2">
              <CardTitle className="text-sm font-medium text-muted-foreground">الأقسام</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-foreground">{projectStats.departments}</div>
            </CardContent>
          </Card>
          
          <Card>
            <CardHeader className="pb-2">
              <CardTitle className="text-sm font-medium text-muted-foreground">الإجازات النشطة</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-[hsl(var(--warning))]">{projectStats.activeLeaves}</div>
            </CardContent>
          </Card>
          
          <Card>
            <CardHeader className="pb-2">
              <CardTitle className="text-sm font-medium text-muted-foreground">السلف المعلقة</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-foreground">{projectStats.pendingAdvances}</div>
            </CardContent>
          </Card>
          
          <Card>
            <CardHeader className="pb-2">
              <CardTitle className="text-sm font-medium text-muted-foreground">وقت التشغيل</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-[hsl(var(--success))]">{systemInfo.uptime}</div>
            </CardContent>
          </Card>
        </div>

        {/* Export Options */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Download className="w-5 h-5" />
              خيارات التصدير
            </CardTitle>
            <CardDescription>
              تصدير بيانات النظام بصيغ مختلفة
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {exportOptions.map((option, index) => (
                <div key={index} className="border rounded-lg p-4 space-y-3">
                  <div className="flex items-start justify-between">
                    <div className="flex items-center gap-3">
                      <div className="p-2 rounded-md bg-primary/10">
                        <option.icon className="w-4 h-4 text-primary" />
                      </div>
                      <div>
                        <h4 className="font-medium">{option.title}</h4>
                        <p className="text-sm text-muted-foreground">{option.description}</p>
                      </div>
                    </div>
                    <Badge variant="secondary">{option.count}</Badge>
                  </div>
                  <div className="flex items-center justify-between">
                    <Badge variant="outline">{option.format}</Badge>
                    <Button 
                      size="sm" 
                      onClick={() => handleExport(option.title)}
                      className="gap-2"
                    >
                      <FileSpreadsheet className="w-3 h-3" />
                      تصدير
                    </Button>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* System Information */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <SettingsIcon className="w-5 h-5" />
              معلومات النظام
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <div>
                  <h4 className="font-medium mb-2">إصدار النظام</h4>
                  <Badge className="bg-primary/10 text-primary">{systemInfo.version}</Badge>
                </div>
                <div>
                  <h4 className="font-medium mb-2">آخر نسخة احتياطية</h4>
                  <p className="text-sm text-muted-foreground">{systemInfo.lastBackup}</p>
                </div>
                <div>
                  <h4 className="font-medium mb-2">إجمالي المستخدمين</h4>
                  <p className="text-sm text-muted-foreground">{systemInfo.totalUsers} مستخدم</p>
                </div>
              </div>
              <div className="space-y-4">
                <div>
                  <h4 className="font-medium mb-2">مساحة التخزين المستخدمة</h4>
                  <p className="text-sm text-muted-foreground">{systemInfo.storage}</p>
                </div>
                <div>
                  <h4 className="font-medium mb-2">نوع المشروع</h4>
                  <Badge variant="outline">نظام إدارة الموارد البشرية</Badge>
                </div>
                <div>
                  <h4 className="font-medium mb-2">التقنيات المستخدمة</h4>
                  <div className="flex gap-2 flex-wrap">
                    <Badge variant="secondary">React</Badge>
                    <Badge variant="secondary">TypeScript</Badge>
                    <Badge variant="secondary">Tailwind CSS</Badge>
                    <Badge variant="secondary">Vite</Badge>
                  </div>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Quick Actions */}
        <Card>
          <CardHeader>
            <CardTitle>إجراءات سريعة</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="flex flex-wrap gap-4">
              <Button variant="outline" className="gap-2">
                <Database className="w-4 h-4" />
                نسخة احتياطية
              </Button>
              <Button variant="outline" className="gap-2">
                <FileText className="w-4 h-4" />
                تقرير شامل
              </Button>
              <Button variant="outline" className="gap-2">
                <Archive className="w-4 h-4" />
                أرشفة البيانات
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </MainLayout>
  );
};

export default Settings;