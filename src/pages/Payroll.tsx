import { MainLayout } from "@/components/Layout/MainLayout";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { DollarSign, Download, FileText, Calculator } from "lucide-react";

const Payroll = () => {
  return (
    <MainLayout>
      <div className="space-y-6">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
          <div>
            <h1 className="text-3xl font-bold text-foreground">كشوف المرتبات</h1>
            <p className="text-muted-foreground">إدارة رواتب الموظفين والمدفوعات</p>
          </div>
          <Button className="flex items-center gap-2">
            <Calculator className="w-4 h-4" />
            حساب المرتبات
          </Button>
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">إجمالي المرتبات</CardTitle>
              <DollarSign className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">1,250,000 ر.س</div>
              <p className="text-xs text-muted-foreground">لهذا الشهر</p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">الرواتب المدفوعة</CardTitle>
              <DollarSign className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">1,180,000 ر.س</div>
              <p className="text-xs text-muted-foreground">94% مكتملة</p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">الرواتب المعلقة</CardTitle>
              <DollarSign className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">70,000 ر.س</div>
              <p className="text-xs text-muted-foreground">15 موظف</p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">الاستقطاعات</CardTitle>
              <DollarSign className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">125,000 ر.س</div>
              <p className="text-xs text-muted-foreground">تأمينات وضرائب</p>
            </CardContent>
          </Card>
        </div>

        <Card>
          <CardHeader>
            <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
              <div>
                <CardTitle>كشوف المرتبات الشهرية</CardTitle>
                <CardDescription>عرض وإدارة مرتبات الموظفين</CardDescription>
              </div>
              <div className="flex gap-2">
                <Button variant="outline" size="sm">
                  <Download className="w-4 h-4 mr-2" />
                  تصدير Excel
                </Button>
                <Button variant="outline" size="sm">
                  <FileText className="w-4 h-4 mr-2" />
                  طباعة التقرير
                </Button>
              </div>
            </div>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {[
                { month: "يناير 2024", employees: 248, total: "1,250,000", status: "مكتمل" },
                { month: "ديسمبر 2023", employees: 245, total: "1,225,000", status: "مكتمل" },
                { month: "نوفمبر 2023", employees: 243, total: "1,215,000", status: "مكتمل" },
                { month: "أكتوبر 2023", employees: 240, total: "1,200,000", status: "مكتمل" },
                { month: "سبتمبر 2023", employees: 238, total: "1,190,000", status: "مكتمل" }
              ].map((payroll, index) => (
                <div key={index} className="flex items-center justify-between p-4 border rounded-lg">
                  <div className="flex items-center gap-4">
                    <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center">
                      <DollarSign className="w-5 h-5 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-medium">{payroll.month}</h3>
                      <p className="text-sm text-muted-foreground">{payroll.employees} موظف - {payroll.total} ر.س</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-2">
                    <Badge variant="default">
                      {payroll.status}
                    </Badge>
                    <Button variant="outline" size="sm">
                      عرض التفاصيل
                    </Button>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </MainLayout>
  );
};

export default Payroll;