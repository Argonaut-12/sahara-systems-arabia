import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { MainLayout } from "@/components/Layout/MainLayout";
import { Plus, Search, DollarSign, TrendingUp, Filter } from "lucide-react";

const Advances = () => {
  const advances = [
    {
      id: 1,
      employee: "أحمد محمد",
      department: "الهندسة",
      amount: 5000,
      requestDate: "2024-01-10",
      dueDate: "2024-06-10",
      monthlyDeduction: 1000,
      remainingAmount: 2000,
      status: "نشطة",
      reason: "ظروف طارئة"
    },
    {
      id: 2,
      employee: "فاطمة علي",
      department: "المالية",
      amount: 3000,
      requestDate: "2024-01-05",
      dueDate: "2024-04-05",
      monthlyDeduction: 750,
      remainingAmount: 750,
      status: "قيد المراجعة",
      reason: "مصروفات تعليمية"
    },
    {
      id: 3,
      employee: "محمد صالح",
      department: "الإنتاج",
      amount: 2000,
      requestDate: "2023-12-15",
      dueDate: "2024-02-15",
      monthlyDeduction: 500,
      remainingAmount: 0,
      status: "مكتملة",
      reason: "مصروفات طبية"
    }
  ];

  const getStatusBadge = (status: string) => {
    switch (status) {
      case "نشطة":
        return <Badge className="bg-primary/10 text-primary border-primary/20">نشطة</Badge>;
      case "قيد المراجعة":
        return <Badge className="bg-warning/10 text-warning border-warning/20">قيد المراجعة</Badge>;
      case "مكتملة":
        return <Badge className="bg-success/10 text-success border-success/20">مكتملة</Badge>;
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
            <h1 className="text-3xl font-bold text-foreground">نظام السلف</h1>
            <p className="text-muted-foreground">إدارة السلف والقروض للموظفين</p>
          </div>
          <Button className="gap-2">
            <Plus className="w-4 h-4" />
            طلب سلفة جديدة
          </Button>
        </div>

        {/* Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          <Card>
            <CardHeader className="pb-2">
              <CardTitle className="text-sm font-medium text-muted-foreground">إجمالي السلف النشطة</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-foreground">450,000 ريال</div>
              <p className="text-xs text-muted-foreground">68 سلفة نشطة</p>
            </CardContent>
          </Card>
          
          <Card>
            <CardHeader className="pb-2">
              <CardTitle className="text-sm font-medium text-muted-foreground">السلف الجديدة</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-primary">12</div>
              <p className="text-xs text-muted-foreground">هذا الشهر</p>
            </CardContent>
          </Card>
          
          <Card>
            <CardHeader className="pb-2">
              <CardTitle className="text-sm font-medium text-muted-foreground">قيد المراجعة</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-warning">8</div>
              <p className="text-xs text-muted-foreground">يحتاج موافقة</p>
            </CardContent>
          </Card>
          
          <Card>
            <CardHeader className="pb-2">
              <CardTitle className="text-sm font-medium text-muted-foreground">المحصل هذا الشهر</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-success">85,000 ريال</div>
              <p className="text-xs text-muted-foreground">+5% من الشهر السابق</p>
            </CardContent>
          </Card>
        </div>

        {/* Advances List */}
        <Card>
          <CardHeader>
            <CardTitle>قائمة السلف</CardTitle>
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
            </div>

            <div className="rounded-md border">
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead className="text-right">الموظف</TableHead>
                    <TableHead className="text-right">القسم</TableHead>
                    <TableHead className="text-right">المبلغ الأصلي</TableHead>
                    <TableHead className="text-right">تاريخ الطلب</TableHead>
                    <TableHead className="text-right">تاريخ الاستحقاق</TableHead>
                    <TableHead className="text-right">الخصم الشهري</TableHead>
                    <TableHead className="text-right">المبلغ المتبقي</TableHead>
                    <TableHead className="text-right">السبب</TableHead>
                    <TableHead className="text-right">الحالة</TableHead>
                    <TableHead className="text-right">الإجراءات</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {advances.map((advance) => (
                    <TableRow key={advance.id}>
                      <TableCell className="font-medium">{advance.employee}</TableCell>
                      <TableCell>{advance.department}</TableCell>
                      <TableCell>{advance.amount.toLocaleString()} ريال</TableCell>
                      <TableCell>{advance.requestDate}</TableCell>
                      <TableCell>{advance.dueDate}</TableCell>
                      <TableCell>{advance.monthlyDeduction.toLocaleString()} ريال</TableCell>
                      <TableCell className={advance.remainingAmount === 0 ? "text-success font-medium" : ""}>
                        {advance.remainingAmount.toLocaleString()} ريال
                      </TableCell>
                      <TableCell>{advance.reason}</TableCell>
                      <TableCell>{getStatusBadge(advance.status)}</TableCell>
                      <TableCell>
                        <div className="flex gap-2">
                          <Button size="sm" variant="outline">عرض</Button>
                          {advance.status === "قيد المراجعة" && (
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

export default Advances;