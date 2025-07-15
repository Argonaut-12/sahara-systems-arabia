import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { MainLayout } from "@/components/Layout/MainLayout";
import { Plus, Search, Calendar, Clock, Filter } from "lucide-react";

const Leaves = () => {
  const leaveRequests = [
    {
      id: 1,
      employee: "أحمد محمد",
      department: "الهندسة",
      type: "إجازة سنوية",
      startDate: "2024-01-15",
      endDate: "2024-01-20",
      days: 5,
      status: "معتمدة",
      reason: "إجازة عائلية"
    },
    {
      id: 2,
      employee: "فاطمة علي",
      department: "المالية",
      type: "إجازة مرضية",
      startDate: "2024-01-18",
      endDate: "2024-01-19",
      days: 2,
      status: "قيد المراجعة",
      reason: "مرض"
    },
    {
      id: 3,
      employee: "محمد صالح",
      department: "الإنتاج",
      type: "إجازة تعويضية",
      startDate: "2024-01-25",
      endDate: "2024-01-25",
      days: 1,
      status: "مرفوضة",
      reason: "عمل إضافي"
    }
  ];

  const getStatusBadge = (status: string) => {
    switch (status) {
      case "معتمدة":
        return <Badge className="bg-success/10 text-success border-success/20">معتمدة</Badge>;
      case "قيد المراجعة":
        return <Badge className="bg-warning/10 text-warning border-warning/20">قيد المراجعة</Badge>;
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
            <h1 className="text-3xl font-bold text-foreground">إدارة الإجازات</h1>
            <p className="text-muted-foreground">إدارة طلبات الإجازات والإجازات التعويضية</p>
          </div>
          <Button className="gap-2">
            <Plus className="w-4 h-4" />
            طلب إجازة جديد
          </Button>
        </div>

        {/* Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          <Card>
            <CardHeader className="pb-2">
              <CardTitle className="text-sm font-medium text-muted-foreground">إجمالي الطلبات</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-foreground">156</div>
              <p className="text-xs text-muted-foreground">هذا الشهر</p>
            </CardContent>
          </Card>
          
          <Card>
            <CardHeader className="pb-2">
              <CardTitle className="text-sm font-medium text-muted-foreground">طلبات معتمدة</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-success">124</div>
              <p className="text-xs text-muted-foreground">+12% من الشهر السابق</p>
            </CardContent>
          </Card>
          
          <Card>
            <CardHeader className="pb-2">
              <CardTitle className="text-sm font-medium text-muted-foreground">قيد المراجعة</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-warning">18</div>
              <p className="text-xs text-muted-foreground">يحتاج موافقة</p>
            </CardContent>
          </Card>
          
          <Card>
            <CardHeader className="pb-2">
              <CardTitle className="text-sm font-medium text-muted-foreground">إجازات تعويضية</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-primary">32</div>
              <p className="text-xs text-muted-foreground">هذا الشهر</p>
            </CardContent>
          </Card>
        </div>

        {/* Filters and Search */}
        <Card>
          <CardHeader>
            <CardTitle>قائمة طلبات الإجازات</CardTitle>
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
                تصفية
              </Button>
              <Button variant="outline" className="gap-2">
                <Calendar className="w-4 h-4" />
                التاريخ
              </Button>
            </div>

            <div className="rounded-md border">
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead className="text-right">الموظف</TableHead>
                    <TableHead className="text-right">القسم</TableHead>
                    <TableHead className="text-right">نوع الإجازة</TableHead>
                    <TableHead className="text-right">تاريخ البداية</TableHead>
                    <TableHead className="text-right">تاريخ النهاية</TableHead>
                    <TableHead className="text-right">عدد الأيام</TableHead>
                    <TableHead className="text-right">السبب</TableHead>
                    <TableHead className="text-right">الحالة</TableHead>
                    <TableHead className="text-right">الإجراءات</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {leaveRequests.map((request) => (
                    <TableRow key={request.id}>
                      <TableCell className="font-medium">{request.employee}</TableCell>
                      <TableCell>{request.department}</TableCell>
                      <TableCell>{request.type}</TableCell>
                      <TableCell>{request.startDate}</TableCell>
                      <TableCell>{request.endDate}</TableCell>
                      <TableCell>{request.days} أيام</TableCell>
                      <TableCell>{request.reason}</TableCell>
                      <TableCell>{getStatusBadge(request.status)}</TableCell>
                      <TableCell>
                        <div className="flex gap-2">
                          <Button size="sm" variant="outline">عرض</Button>
                          {request.status === "قيد المراجعة" && (
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
      </div>
    </MainLayout>
  );
};

export default Leaves;