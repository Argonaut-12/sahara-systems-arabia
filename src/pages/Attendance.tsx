import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { MainLayout } from "@/components/Layout/MainLayout";
import { Plus, Search, Clock, Calendar, Users, Filter } from "lucide-react";

const Attendance = () => {
  const attendanceRecords = [
    {
      id: 1,
      employee: "أحمد محمد",
      department: "الهندسة",
      date: "2024-01-15",
      checkIn: "07:45",
      checkOut: "16:30",
      workingHours: "8:45",
      overtime: "0:45",
      status: "حاضر",
      lateMinutes: 0
    },
    {
      id: 2,
      employee: "فاطمة علي",
      department: "المالية",
      date: "2024-01-15",
      checkIn: "08:15",
      checkOut: "17:00",
      workingHours: "8:45",
      overtime: "1:00",
      status: "متأخر",
      lateMinutes: 15
    },
    {
      id: 3,
      employee: "محمد صالح",
      department: "الإنتاج",
      date: "2024-01-15",
      checkIn: "-",
      checkOut: "-",
      workingHours: "0:00",
      overtime: "0:00",
      status: "غائب",
      lateMinutes: 0
    },
    {
      id: 4,
      employee: "سارة أحمد",
      department: "التسويق",
      date: "2024-01-15",
      checkIn: "07:55",
      checkOut: "19:00",
      workingHours: "11:05",
      overtime: "3:05",
      status: "حاضر",
      lateMinutes: 0
    }
  ];

  const getStatusBadge = (status: string, lateMinutes: number) => {
    if (status === "غائب") {
      return <Badge className="bg-destructive/10 text-destructive border-destructive/20">غائب</Badge>;
    } else if (status === "متأخر" || lateMinutes > 0) {
      return <Badge className="bg-warning/10 text-warning border-warning/20">متأخر</Badge>;
    } else {
      return <Badge className="bg-success/10 text-success border-success/20">حاضر</Badge>;
    }
  };

  return (
    <MainLayout>
      <div className="space-y-6">
        {/* Page Header */}
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-3xl font-bold text-foreground">الحضور والانصراف</h1>
            <p className="text-muted-foreground">إدارة حضور الموظفين والساعات الإضافية والغياب</p>
          </div>
          <div className="flex gap-2">
            <Button variant="outline" className="gap-2">
              <Calendar className="w-4 h-4" />
              تقرير شهري
            </Button>
            <Button className="gap-2">
              <Plus className="w-4 h-4" />
              تسجيل حضور يدوي
            </Button>
          </div>
        </div>

        {/* Today's Stats */}
        <div className="grid grid-cols-1 md:grid-cols-5 gap-6">
          <Card>
            <CardHeader className="pb-2">
              <CardTitle className="text-sm font-medium text-muted-foreground">الحاضرون اليوم</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-success">235</div>
              <p className="text-xs text-muted-foreground">من أصل 248 موظف</p>
            </CardContent>
          </Card>
          
          <Card>
            <CardHeader className="pb-2">
              <CardTitle className="text-sm font-medium text-muted-foreground">الغائبون</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-destructive">13</div>
              <p className="text-xs text-muted-foreground">5.2% من الموظفين</p>
            </CardContent>
          </Card>
          
          <Card>
            <CardHeader className="pb-2">
              <CardTitle className="text-sm font-medium text-muted-foreground">المتأخرون</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-warning">8</div>
              <p className="text-xs text-muted-foreground">أكثر من 15 دقيقة</p>
            </CardContent>
          </Card>
          
          <Card>
            <CardHeader className="pb-2">
              <CardTitle className="text-sm font-medium text-muted-foreground">إجمالي الساعات الإضافية</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-primary">47.5 ساعة</div>
              <p className="text-xs text-muted-foreground">اليوم</p>
            </CardContent>
          </Card>
          
          <Card>
            <CardHeader className="pb-2">
              <CardTitle className="text-sm font-medium text-muted-foreground">متوسط ساعات العمل</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-foreground">8.3 ساعة</div>
              <p className="text-xs text-muted-foreground">اليوم</p>
            </CardContent>
          </Card>
        </div>

        {/* Quick Actions */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <Card className="cursor-pointer hover:shadow-md transition-shadow">
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-lg">
                <Clock className="w-5 h-5 text-primary" />
                تسجيل الحضور
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">تسجيل حضور الموظفين يدوياً</p>
            </CardContent>
          </Card>
          
          <Card className="cursor-pointer hover:shadow-md transition-shadow">
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-lg">
                <Users className="w-5 h-5 text-success" />
                تقرير الحضور
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">عرض تقارير الحضور اليومية والشهرية</p>
            </CardContent>
          </Card>
          
          <Card className="cursor-pointer hover:shadow-md transition-shadow">
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-lg">
                <Calendar className="w-5 h-5 text-warning" />
                إعدادات المواعيد
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">تعديل أوقات العمل والمناوبات</p>
            </CardContent>
          </Card>
        </div>

        {/* Attendance Records */}
        <Card>
          <CardHeader>
            <CardTitle>سجل الحضور اليومي - {new Date().toLocaleDateString('ar-SA')}</CardTitle>
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
                اختيار التاريخ
              </Button>
            </div>

            <div className="rounded-md border">
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead className="text-right">الموظف</TableHead>
                    <TableHead className="text-right">القسم</TableHead>
                    <TableHead className="text-right">التاريخ</TableHead>
                    <TableHead className="text-right">وقت الحضور</TableHead>
                    <TableHead className="text-right">وقت الانصراف</TableHead>
                    <TableHead className="text-right">ساعات العمل</TableHead>
                    <TableHead className="text-right">الساعات الإضافية</TableHead>
                    <TableHead className="text-right">دقائق التأخير</TableHead>
                    <TableHead className="text-right">الحالة</TableHead>
                    <TableHead className="text-right">الإجراءات</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {attendanceRecords.map((record) => (
                    <TableRow key={record.id}>
                      <TableCell className="font-medium">{record.employee}</TableCell>
                      <TableCell>{record.department}</TableCell>
                      <TableCell>{record.date}</TableCell>
                      <TableCell>{record.checkIn}</TableCell>
                      <TableCell>{record.checkOut}</TableCell>
                      <TableCell>{record.workingHours}</TableCell>
                      <TableCell className={record.overtime !== "0:00" ? "text-primary font-medium" : ""}>
                        {record.overtime}
                      </TableCell>
                      <TableCell className={record.lateMinutes > 0 ? "text-warning font-medium" : ""}>
                        {record.lateMinutes > 0 ? `${record.lateMinutes} دقيقة` : "-"}
                      </TableCell>
                      <TableCell>{getStatusBadge(record.status, record.lateMinutes)}</TableCell>
                      <TableCell>
                        <div className="flex gap-2">
                          <Button size="sm" variant="outline">تعديل</Button>
                          <Button size="sm" variant="outline">تفاصيل</Button>
                        </div>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </div>
          </CardContent>
        </Card>
      </div>
    </MainLayout>
  );
};

export default Attendance;