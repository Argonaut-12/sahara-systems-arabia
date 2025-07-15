import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { MainLayout } from "@/components/Layout/MainLayout";
import { Plus, Search, Clock, TrendingUp, Filter, Calendar } from "lucide-react";

const Overtime = () => {
  const overtimeRecords = [
    {
      id: 1,
      employee: "أحمد محمد",
      department: "الهندسة",
      date: "2024-01-15",
      startTime: "17:00",
      endTime: "20:00",
      hours: 3,
      hourlyRate: 50,
      totalAmount: 150,
      reason: "مشروع عاجل",
      status: "معتمدة",
      approvedBy: "مدير الهندسة"
    },
    {
      id: 2,
      employee: "فاطمة علي",
      department: "المالية",
      date: "2024-01-14",
      startTime: "17:00",
      endTime: "19:30",
      hours: 2.5,
      hourlyRate: 45,
      totalAmount: 112.5,
      reason: "إنهاء التقارير الشهرية",
      status: "قيد المراجعة",
      approvedBy: "-"
    },
    {
      id: 3,
      employee: "محمد صالح",
      department: "الإنتاج",
      date: "2024-01-13",
      startTime: "18:00",
      endTime: "22:00",
      hours: 4,
      hourlyRate: 40,
      totalAmount: 160,
      reason: "صيانة الآلات",
      status: "مدفوعة",
      approvedBy: "مدير الإنتاج"
    }
  ];

  const getStatusBadge = (status: string) => {
    switch (status) {
      case "معتمدة":
        return <Badge className="bg-primary/10 text-primary border-primary/20">معتمدة</Badge>;
      case "قيد المراجعة":
        return <Badge className="bg-warning/10 text-warning border-warning/20">قيد المراجعة</Badge>;
      case "مدفوعة":
        return <Badge className="bg-success/10 text-success border-success/20">مدفوعة</Badge>;
      case "مرفوضة":
        return <Badge className="bg-destructive/10 text-destructive border-destructive/20">مرفوضة</Badge>;
      default:
        return <Badge>{status}</Badge>;
    }
  };

  return (
    <MainLayout>
      <div className="space-y-6">
        {/* Page Header */}
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-3xl font-bold text-foreground">الساعات الإضافية والغياب</h1>
            <p className="text-muted-foreground">إدارة الساعات الإضافية وتسجيل حالات الغياب</p>
          </div>
          <div className="flex gap-2">
            <Button variant="outline" className="gap-2">
              <Calendar className="w-4 h-4" />
              تقرير شهري
            </Button>
            <Button className="gap-2">
              <Plus className="w-4 h-4" />
              تسجيل ساعات إضافية
            </Button>
          </div>
        </div>

        {/* Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          <Card>
            <CardHeader className="pb-2">
              <CardTitle className="text-sm font-medium text-muted-foreground">إجمالي الساعات الإضافية</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-foreground">324.5 ساعة</div>
              <p className="text-xs text-muted-foreground">هذا الشهر</p>
            </CardContent>
          </Card>
          
          <Card>
            <CardHeader className="pb-2">
              <CardTitle className="text-sm font-medium text-muted-foreground">إجمالي المستحقات</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-success">14,625 ريال</div>
              <p className="text-xs text-muted-foreground">للساعات الإضافية</p>
            </CardContent>
          </Card>
          
          <Card>
            <CardHeader className="pb-2">
              <CardTitle className="text-sm font-medium text-muted-foreground">قيد المراجعة</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-warning">12</div>
              <p className="text-xs text-muted-foreground">طلب ساعات إضافية</p>
            </CardContent>
          </Card>
          
          <Card>
            <CardHeader className="pb-2">
              <CardTitle className="text-sm font-medium text-muted-foreground">حالات الغياب</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-destructive">18</div>
              <p className="text-xs text-muted-foreground">هذا الشهر</p>
            </CardContent>
          </Card>
        </div>

        {/* Quick Stats by Department */}
        <Card>
          <CardHeader>
            <CardTitle>إحصائيات الساعات الإضافية بالأقسام</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="p-4 bg-muted rounded-lg">
                <div className="flex items-center justify-between">
                  <div>
                    <h3 className="font-medium">قسم الهندسة</h3>
                    <p className="text-2xl font-bold text-primary">89.5 ساعة</p>
                  </div>
                  <div className="text-right">
                    <p className="text-sm text-muted-foreground">4,025 ريال</p>
                    <p className="text-sm text-success">+15%</p>
                  </div>
                </div>
              </div>
              
              <div className="p-4 bg-muted rounded-lg">
                <div className="flex items-center justify-between">
                  <div>
                    <h3 className="font-medium">قسم الإنتاج</h3>
                    <p className="text-2xl font-bold text-primary">156.0 ساعة</p>
                  </div>
                  <div className="text-right">
                    <p className="text-sm text-muted-foreground">6,240 ريال</p>
                    <p className="text-sm text-success">+8%</p>
                  </div>
                </div>
              </div>
              
              <div className="p-4 bg-muted rounded-lg">
                <div className="flex items-center justify-between">
                  <div>
                    <h3 className="font-medium">قسم المالية</h3>
                    <p className="text-2xl font-bold text-primary">79.0 ساعة</p>
                  </div>
                  <div className="text-right">
                    <p className="text-sm text-muted-foreground">3,560 ريال</p>
                    <p className="text-sm text-warning">-5%</p>
                  </div>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Overtime Records */}
        <Card>
          <CardHeader>
            <CardTitle>سجل الساعات الإضافية</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="flex flex-col md:flex-row gap-4 mb-6">
              <div className="relative flex-1">
                <Search className="absolute right-3 top-3 h-4 w-4 text-muted-foreground" />
                <Input
                  placeholder="البحث بالاسم أو القسم..."
                  className="pr-10"
                />
              </div>
              <Button variant="outline" className="gap-2">
                <Filter className="w-4 h-4" />
                تصفية بالقسم
              </Button>
              <Button variant="outline" className="gap-2">
                <Calendar className="w-4 h-4" />
                اختيار الفترة
              </Button>
            </div>

            <div className="rounded-md border">
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead className="text-right">الموظف</TableHead>
                    <TableHead className="text-right">القسم</TableHead>
                    <TableHead className="text-right">التاريخ</TableHead>
                    <TableHead className="text-right">وقت البداية</TableHead>
                    <TableHead className="text-right">وقت النهاية</TableHead>
                    <TableHead className="text-right">عدد الساعات</TableHead>
                    <TableHead className="text-right">سعر الساعة</TableHead>
                    <TableHead className="text-right">إجمالي المبلغ</TableHead>
                    <TableHead className="text-right">السبب</TableHead>
                    <TableHead className="text-right">معتمد بواسطة</TableHead>
                    <TableHead className="text-right">الحالة</TableHead>
                    <TableHead className="text-right">الإجراءات</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {overtimeRecords.map((record) => (
                    <TableRow key={record.id}>
                      <TableCell className="font-medium">{record.employee}</TableCell>
                      <TableCell>{record.department}</TableCell>
                      <TableCell>{record.date}</TableCell>
                      <TableCell>{record.startTime}</TableCell>
                      <TableCell>{record.endTime}</TableCell>
                      <TableCell className="font-medium">{record.hours} ساعة</TableCell>
                      <TableCell>{record.hourlyRate} ريال</TableCell>
                      <TableCell className="font-medium text-success">
                        {record.totalAmount.toLocaleString()} ريال
                      </TableCell>
                      <TableCell>{record.reason}</TableCell>
                      <TableCell>{record.approvedBy}</TableCell>
                      <TableCell>{getStatusBadge(record.status)}</TableCell>
                      <TableCell>
                        <div className="flex gap-2">
                          <Button size="sm" variant="outline">عرض</Button>
                          {record.status === "قيد المراجعة" && (
                            <>
                              <Button size="sm" className="bg-success text-success-foreground hover:bg-success/90">
                                موافقة
                              </Button>
                              <Button size="sm" variant="destructive">رفض</Button>
                            </>
                          )}
                        </div>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </div>
          </CardContent>
        </Card>

        {/* Absence Records */}
        <Card>
          <CardHeader>
            <CardTitle>سجل حالات الغياب</CardTitle>
            <CardDescription>عرض وإدارة حالات الغياب غير المبررة</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="text-center py-8 text-muted-foreground">
              <p>لا توجد حالات غياب غير مبررة اليوم</p>
              <Button variant="outline" className="mt-4">
                عرض سجل الغياب الكامل
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </MainLayout>
  );
};

export default Overtime;