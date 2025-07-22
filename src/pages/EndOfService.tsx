import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { MainLayout } from "@/components/Layout/MainLayout";
import { Plus, Search, Calculator, TrendingUp, Filter } from "lucide-react";

const EndOfService = () => {
  const endOfServiceBenefits = [
    {
      id: 1,
      employee: "أحمد محمد",
      department: "الهندسة",
      startDate: "2015-03-15",
      endDate: "2024-01-15",
      yearsOfService: 9,
      lastSalary: 15000,
      totalBenefit: 67500,
      status: "محسوبة",
      type: "استقالة"
    },
    {
      id: 2,
      employee: "فاطمة علي",
      department: "المالية",
      startDate: "2010-06-01",
      endDate: "2024-02-01",
      yearsOfService: 14,
      lastSalary: 18000,
      totalBenefit: 252000,
      status: "قيد الحساب",
      type: "تقاعد"
    },
    {
      id: 3,
      employee: "محمد صالح",
      department: "الإنتاج",
      startDate: "2018-09-10",
      endDate: "2024-01-20",
      yearsOfService: 5,
      lastSalary: 12000,
      totalBenefit: 30000,
      status: "مدفوعة",
      type: "إنهاء خدمة"
    }
  ];

  const getStatusBadge = (status: string) => {
    switch (status) {
      case "محسوبة":
        return <Badge className="bg-primary/10 text-primary border-primary/20">محسوبة</Badge>;
      case "قيد الحساب":
        return <Badge className="bg-warning/10 text-warning border-warning/20">قيد الحساب</Badge>;
      case "مدفوعة":
        return <Badge className="bg-success/10 text-success border-success/20">مدفوعة</Badge>;
      case "معلقة":
        return <Badge className="bg-destructive/10 text-destructive border-destructive/20">معلقة</Badge>;
      default:
        return <Badge>{status}</Badge>;
    }
  };

  const getTypeBadge = (type: string) => {
    switch (type) {
      case "استقالة":
        return <Badge variant="outline" className="border-primary/20 text-primary">استقالة</Badge>;
      case "تقاعد":
        return <Badge variant="outline" className="border-success/20 text-success">تقاعد</Badge>;
      case "إنهاء خدمة":
        return <Badge variant="outline" className="border-destructive/20 text-destructive">إنهاء خدمة</Badge>;
      default:
        return <Badge variant="outline">{type}</Badge>;
    }
  };

  return (
    <MainLayout>
      <div className="space-y-6">
        {/* Page Header */}
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-3xl font-bold text-foreground">مكافآت نهاية الخدمة</h1>
            <p className="text-muted-foreground">حساب وإدارة مكافآت نهاية الخدمة للموظفين</p>
          </div>
          <Button className="gap-2">
            <Calculator className="w-4 h-4" />
            حساب مكافأة جديدة
          </Button>
        </div>

        {/* Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          <Card>
            <CardHeader className="pb-2">
              <CardTitle className="text-sm font-medium text-muted-foreground">إجمالي المكافآت المستحقة</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-foreground">2,450,000 ريال</div>
              <p className="text-xs text-muted-foreground">15 موظف</p>
            </CardContent>
          </Card>
          
          <Card>
            <CardHeader className="pb-2">
              <CardTitle className="text-sm font-medium text-muted-foreground">المدفوع هذا الشهر</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-success">340,000 ريال</div>
              <p className="text-xs text-muted-foreground">3 مكافآت</p>
            </CardContent>
          </Card>
          
          <Card>
            <CardHeader className="pb-2">
              <CardTitle className="text-sm font-medium text-muted-foreground">قيد الحساب</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-warning">5</div>
              <p className="text-xs text-muted-foreground">يحتاج مراجعة</p>
            </CardContent>
          </Card>
          
          <Card>
            <CardHeader className="pb-2">
              <CardTitle className="text-sm font-medium text-muted-foreground">متوسط سنوات الخدمة</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-primary">9.3 سنة</div>
              <p className="text-xs text-muted-foreground">للموظفين المنتهية خدمتهم</p>
            </CardContent>
          </Card>
        </div>

        {/* Benefits Calculator Card */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Calculator className="w-5 h-5" />
              حاسبة مكافأة نهاية الخدمة
            </CardTitle>
            <CardDescription>
              احسب مكافأة نهاية الخدمة وفقاً لقانون العمل السعودي
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div>
                <label className="text-sm font-medium">سنوات الخدمة</label>
                <Input placeholder="عدد السنوات" type="number" />
              </div>
              <div>
                <label className="text-sm font-medium">الراتب الأساسي</label>
                <Input placeholder="الراتب بالريال" type="number" />
              </div>
              <div className="flex items-end">
                <Button className="w-full">احسب المكافأة</Button>
              </div>
            </div>
            <div className="mt-4 p-4 bg-muted rounded-lg">
              <p className="text-sm text-muted-foreground">
                <strong>ملاحظة:</strong> يتم احتساب نصف شهر لكل سنة من السنوات الخمس الأولى، وشهر كامل لكل سنة بعد ذلك
              </p>
            </div>
          </CardContent>
        </Card>

        {/* End of Service Benefits List */}
        <Card>
          <CardHeader>
            <CardTitle>قائمة مكافآت نهاية الخدمة</CardTitle>
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
                    <TableHead className="text-right">تاريخ التعيين</TableHead>
                    <TableHead className="text-right">تاريخ انتهاء الخدمة</TableHead>
                    <TableHead className="text-right">سنوات الخدمة</TableHead>
                    <TableHead className="text-right">آخر راتب</TableHead>
                    <TableHead className="text-right">مكافأة نهاية الخدمة</TableHead>
                    <TableHead className="text-right">نوع الإنهاء</TableHead>
                    <TableHead className="text-right">الحالة</TableHead>
                    <TableHead className="text-right">الإجراءات</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {endOfServiceBenefits.map((benefit) => (
                    <TableRow key={benefit.id}>
                      <TableCell className="font-medium">{benefit.employee}</TableCell>
                      <TableCell>{benefit.department}</TableCell>
                      <TableCell>{benefit.startDate}</TableCell>
                      <TableCell>{benefit.endDate}</TableCell>
                      <TableCell>{benefit.yearsOfService} سنة</TableCell>
                      <TableCell>{benefit.lastSalary.toLocaleString()} ريال</TableCell>
                      <TableCell className="font-medium text-success">
                        {benefit.totalBenefit.toLocaleString()} ريال
                      </TableCell>
                      <TableCell>{getTypeBadge(benefit.type)}</TableCell>
                      <TableCell>{getStatusBadge(benefit.status)}</TableCell>
                      <TableCell>
                        <div className="flex gap-2">
                          <Button size="sm" variant="outline">عرض</Button>
                          {benefit.status === "محسوبة" && (
                            <Button size="sm" className="bg-success text-success-foreground hover:bg-success/90">
                              دفع
                            </Button>
                          )}
                          <Button size="sm" variant="outline">طباعة</Button>
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

export default EndOfService;