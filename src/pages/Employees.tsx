import { MainLayout } from "@/components/Layout/MainLayout";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { 
  Users, Plus, Search, Filter, Calendar, DollarSign, 
  Clock, FileText, AlertCircle, CheckCircle, Eye,
  CalendarDays, Banknote, Timer
} from "lucide-react";

const employeesData = [
  {
    id: 1,
    name: "أحمد محمد علي",
    position: "مطور برمجيات",
    department: "تقنية المعلومات",
    status: "نشط",
    joinDate: "2020-01-15",
    workHours: "8:00 - 17:00",
    salary: 12000,
    annualLeaves: {
      total: 30,
      used: 12,
      remaining: 18
    },
    advances: {
      count: 2,
      totalAmount: 3000,
      status: "مسدد جزئياً"
    },
    endOfService: {
      yearsOfService: 4.5,
      calculatedAmount: 54000
    },
    attendanceToday: "حاضر - 8:15",
    lastUpdate: "2024-01-15 14:30"
  },
  {
    id: 2,
    name: "فاطمة أحمد",
    position: "محاسبة",
    department: "المالية",
    status: "نشط",
    joinDate: "2019-03-20",
    workHours: "8:30 - 17:30",
    salary: 10000,
    annualLeaves: {
      total: 30,
      used: 8,
      remaining: 22
    },
    advances: {
      count: 1,
      totalAmount: 1500,
      status: "مسدد"
    },
    endOfService: {
      yearsOfService: 5.2,
      calculatedAmount: 52000
    },
    attendanceToday: "حاضر - 8:00",
    lastUpdate: "2024-01-15 09:00"
  },
  {
    id: 3,
    name: "محمد سالم",
    position: "مدير مشروع",
    department: "تقنية المعلومات",
    status: "نشط",
    joinDate: "2018-06-10",
    workHours: "9:00 - 18:00",
    salary: 15000,
    annualLeaves: {
      total: 30,
      used: 15,
      remaining: 15
    },
    advances: {
      count: 3,
      totalAmount: 5000,
      status: "معلق"
    },
    endOfService: {
      yearsOfService: 6.1,
      calculatedAmount: 91500
    },
    attendanceToday: "حاضر - 8:45",
    lastUpdate: "2024-01-15 08:45"
  },
  {
    id: 4,
    name: "سارة خالد",
    position: "مختصة موارد بشرية",
    department: "الموارد البشرية",
    status: "إجازة",
    joinDate: "2021-09-01",
    workHours: "8:00 - 17:00",
    salary: 9000,
    annualLeaves: {
      total: 30,
      used: 20,
      remaining: 10
    },
    advances: {
      count: 0,
      totalAmount: 0,
      status: "لا يوجد"
    },
    endOfService: {
      yearsOfService: 2.8,
      calculatedAmount: 25200
    },
    attendanceToday: "إجازة سنوية",
    lastUpdate: "2024-01-10 16:00"
  },
  {
    id: 5,
    name: "عبدالله أحمد",
    position: "محلل أعمال",
    department: "التطوير",
    status: "نشط",
    joinDate: "2022-01-10",
    workHours: "8:30 - 17:30",
    salary: 11000,
    annualLeaves: {
      total: 30,
      used: 5,
      remaining: 25
    },
    advances: {
      count: 1,
      totalAmount: 2000,
      status: "نشط"
    },
    endOfService: {
      yearsOfService: 2.3,
      calculatedAmount: 25300
    },
    attendanceToday: "حاضر - 8:20",
    lastUpdate: "2024-01-15 08:20"
  }
];

const getStatusBadge = (status: string) => {
  switch (status) {
    case "نشط":
      return <Badge className="bg-[hsl(var(--success))] text-white">{status}</Badge>;
    case "إجازة":
      return <Badge variant="secondary">{status}</Badge>;
    case "معلق":
      return <Badge className="bg-[hsl(var(--warning))] text-white">{status}</Badge>;
    default:
      return <Badge variant="outline">{status}</Badge>;
  }
};

const getAdvanceStatusBadge = (status: string) => {
  switch (status) {
    case "مسدد":
      return <Badge className="bg-[hsl(var(--success))] text-white text-xs">{status}</Badge>;
    case "نشط":
    case "معلق":
      return <Badge className="bg-[hsl(var(--warning))] text-white text-xs">{status}</Badge>;
    case "مسدد جزئياً":
      return <Badge variant="secondary" className="text-xs">{status}</Badge>;
    default:
      return <Badge variant="outline" className="text-xs">{status}</Badge>;
  }
};

const Employees = () => {
  return (
    <MainLayout>
      <div className="space-y-6">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
          <div>
            <h1 className="text-3xl font-bold text-foreground">إدارة الموظفين</h1>
            <p className="text-muted-foreground">إدارة بيانات الموظفين مع التفاصيل الشاملة</p>
          </div>
          <Button className="flex items-center gap-2">
            <Plus className="w-4 h-4" />
            إضافة موظف جديد
          </Button>
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">إجمالي الموظفين</CardTitle>
              <Users className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">248</div>
              <p className="text-xs text-muted-foreground">+12 من الشهر الماضي</p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">الموظفين النشطين</CardTitle>
              <Users className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">235</div>
              <p className="text-xs text-muted-foreground">95% من إجمالي الموظفين</p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">الموظفين الجدد</CardTitle>
              <Users className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">12</div>
              <p className="text-xs text-muted-foreground">هذا الشهر</p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">الموظفين المغادرين</CardTitle>
              <Users className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">5</div>
              <p className="text-xs text-muted-foreground">هذا الشهر</p>
            </CardContent>
          </Card>
        </div>

        <Card>
          <CardHeader>
            <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
              <div>
                <CardTitle>قائمة الموظفين</CardTitle>
                <CardDescription>إدارة بيانات وملفات الموظفين</CardDescription>
              </div>
              <div className="flex gap-2">
                <Button variant="outline" size="sm">
                  <Search className="w-4 h-4 mr-2" />
                  البحث
                </Button>
                <Button variant="outline" size="sm">
                  <Filter className="w-4 h-4 mr-2" />
                  تصفية
                </Button>
              </div>
            </div>
          </CardHeader>
          <CardContent>
            <div className="space-y-6">
              {employeesData.map((employee) => (
                <Card key={employee.id} className="border-l-4 border-l-primary/20">
                  <CardContent className="p-6">
                    {/* معلومات أساسية */}
                    <div className="flex items-start justify-between mb-6">
                      <div className="flex items-center gap-4">
                        <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
                          <Users className="w-6 h-6 text-primary" />
                        </div>
                        <div>
                          <h3 className="text-lg font-semibold text-foreground">{employee.name}</h3>
                          <p className="text-muted-foreground">{employee.position}</p>
                          <div className="flex items-center gap-2 mt-1">
                            <Badge variant="outline" className="text-xs">{employee.department}</Badge>
                            {getStatusBadge(employee.status)}
                          </div>
                        </div>
                      </div>
                      <div className="text-left">
                        <p className="text-sm text-muted-foreground">آخر تحديث</p>
                        <p className="text-xs text-muted-foreground">{employee.lastUpdate}</p>
                      </div>
                    </div>

                    {/* الشبكة التفصيلية */}
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-4">
                      {/* بيانات التوظيف */}
                      <div className="space-y-3">
                        <h4 className="font-medium text-sm text-muted-foreground flex items-center gap-2">
                          <Calendar className="w-4 h-4" />
                          بيانات التوظيف
                        </h4>
                        <div className="space-y-2 text-sm">
                          <div>
                            <span className="text-muted-foreground">تاريخ التوظيف:</span>
                            <p className="font-medium">{employee.joinDate}</p>
                          </div>
                          <div>
                            <span className="text-muted-foreground">ساعات العمل:</span>
                            <p className="font-medium">{employee.workHours}</p>
                          </div>
                          <div>
                            <span className="text-muted-foreground">الراتب:</span>
                            <p className="font-medium text-[hsl(var(--success))]">{employee.salary.toLocaleString()} ريال</p>
                          </div>
                        </div>
                      </div>

                      {/* الإجازات السنوية */}
                      <div className="space-y-3">
                        <h4 className="font-medium text-sm text-muted-foreground flex items-center gap-2">
                          <CalendarDays className="w-4 h-4" />
                          الإجازات السنوية
                        </h4>
                        <div className="space-y-2 text-sm">
                          <div>
                            <span className="text-muted-foreground">المجموع:</span>
                            <p className="font-medium">{employee.annualLeaves.total} يوم</p>
                          </div>
                          <div>
                            <span className="text-muted-foreground">المستخدم:</span>
                            <p className="font-medium text-[hsl(var(--warning))]">{employee.annualLeaves.used} يوم</p>
                          </div>
                          <div>
                            <span className="text-muted-foreground">المتبقي:</span>
                            <p className="font-medium text-[hsl(var(--success))]">{employee.annualLeaves.remaining} يوم</p>
                          </div>
                        </div>
                      </div>

                      {/* السلف */}
                      <div className="space-y-3">
                        <h4 className="font-medium text-sm text-muted-foreground flex items-center gap-2">
                          <Banknote className="w-4 h-4" />
                          السلف
                        </h4>
                        <div className="space-y-2 text-sm">
                          <div>
                            <span className="text-muted-foreground">العدد:</span>
                            <p className="font-medium">{employee.advances.count}</p>
                          </div>
                          <div>
                            <span className="text-muted-foreground">المبلغ:</span>
                            <p className="font-medium">{employee.advances.totalAmount.toLocaleString()} ريال</p>
                          </div>
                          <div>
                            <span className="text-muted-foreground">الحالة:</span>
                            <div className="mt-1">
                              {getAdvanceStatusBadge(employee.advances.status)}
                            </div>
                          </div>
                        </div>
                      </div>

                      {/* مستحقات نهاية الخدمة */}
                      <div className="space-y-3">
                        <h4 className="font-medium text-sm text-muted-foreground flex items-center gap-2">
                          <DollarSign className="w-4 h-4" />
                          نهاية الخدمة
                        </h4>
                        <div className="space-y-2 text-sm">
                          <div>
                            <span className="text-muted-foreground">سنوات الخدمة:</span>
                            <p className="font-medium">{employee.endOfService.yearsOfService} سنة</p>
                          </div>
                          <div>
                            <span className="text-muted-foreground">المستحقات:</span>
                            <p className="font-medium text-[hsl(var(--success))]">{employee.endOfService.calculatedAmount.toLocaleString()} ريال</p>
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* شريط الحضور والأزرار */}
                    <div className="flex items-center justify-between pt-4 border-t">
                      <div className="flex items-center gap-3">
                        <div className="flex items-center gap-2">
                          <Timer className="w-4 h-4 text-muted-foreground" />
                          <span className="text-sm text-muted-foreground">الحضور اليوم:</span>
                          <span className="text-sm font-medium text-foreground">{employee.attendanceToday}</span>
                        </div>
                      </div>
                      <div className="flex items-center gap-2">
                        <Button variant="outline" size="sm">
                          <Eye className="w-4 h-4 mr-1" />
                          عرض التفاصيل
                        </Button>
                        <Button variant="outline" size="sm">
                          <FileText className="w-4 h-4 mr-1" />
                          التقارير
                        </Button>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </MainLayout>
  );
};

export default Employees;