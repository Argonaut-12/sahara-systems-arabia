import { MainLayout } from "@/components/Layout/MainLayout";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { DollarSign, Download, FileText, Calculator, Eye } from "lucide-react";

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

        <Card>
          <CardHeader>
            <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
              <div>
                <CardTitle>تفاصيل كشف المرتبات - يناير 2024</CardTitle>
                <CardDescription>جدول تفصيلي بالمرتبات والخصومات لكل موظف</CardDescription>
              </div>
              <div className="flex gap-2">
                <Button variant="outline" size="sm">
                  <Download className="w-4 h-4 mr-2" />
                  تصدير PDF
                </Button>
                <Button variant="outline" size="sm">
                  <FileText className="w-4 h-4 mr-2" />
                  طباعة الكشف
                </Button>
              </div>
            </div>
          </CardHeader>
          <CardContent>
            <div className="overflow-x-auto">
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead className="text-right">اسم الموظف</TableHead>
                    <TableHead className="text-right">الوظيفة</TableHead>
                    <TableHead className="text-right">الراتب الأساسي</TableHead>
                    <TableHead className="text-right">البدلات</TableHead>
                    <TableHead className="text-right">إجمالي الإستحقاق</TableHead>
                    <TableHead className="text-right">التأمينات الاجتماعية</TableHead>
                    <TableHead className="text-right">ضريبة الدخل</TableHead>
                    <TableHead className="text-right">القروض</TableHead>
                    <TableHead className="text-right">خصومات أخرى</TableHead>
                    <TableHead className="text-right">إجمالي الخصومات</TableHead>
                    <TableHead className="text-right">صافي الراتب</TableHead>
                    <TableHead className="text-right">الحالة</TableHead>
                    <TableHead className="text-right">الإجراءات</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {[
                    {
                      name: "أحمد محمد السالم",
                      position: "مدير تنفيذي",
                      baseSalary: 15000,
                      allowances: 3000,
                      totalEarnings: 18000,
                      socialInsurance: 1350,
                      incomeTax: 900,
                      loans: 500,
                      otherDeductions: 250,
                      totalDeductions: 3000,
                      netSalary: 15000,
                      status: "مدفوع"
                    },
                    {
                      name: "فاطمة عبدالله النور",
                      position: "مديرة موارد بشرية",
                      baseSalary: 12000,
                      allowances: 2000,
                      totalEarnings: 14000,
                      socialInsurance: 1050,
                      incomeTax: 700,
                      loans: 0,
                      otherDeductions: 100,
                      totalDeductions: 1850,
                      netSalary: 12150,
                      status: "مدفوع"
                    },
                    {
                      name: "خالد عبدالعزيز الحمد",
                      position: "محاسب أول",
                      baseSalary: 8000,
                      allowances: 1500,
                      totalEarnings: 9500,
                      socialInsurance: 712,
                      incomeTax: 475,
                      loans: 800,
                      otherDeductions: 0,
                      totalDeductions: 1987,
                      netSalary: 7513,
                      status: "معلق"
                    },
                    {
                      name: "نورا سالم القحطاني",
                      position: "مطورة برمجيات",
                      baseSalary: 10000,
                      allowances: 1000,
                      totalEarnings: 11000,
                      socialInsurance: 825,
                      incomeTax: 550,
                      loans: 600,
                      otherDeductions: 50,
                      totalDeductions: 2025,
                      netSalary: 8975,
                      status: "مدفوع"
                    },
                    {
                      name: "محمد صالح العتيبي",
                      position: "مهندس شبكات",
                      baseSalary: 9000,
                      allowances: 800,
                      totalEarnings: 9800,
                      socialInsurance: 735,
                      incomeTax: 490,
                      loans: 400,
                      otherDeductions: 75,
                      totalDeductions: 1700,
                      netSalary: 8100,
                      status: "مدفوع"
                    }
                  ].map((employee, index) => (
                    <TableRow key={index}>
                      <TableCell className="font-medium">{employee.name}</TableCell>
                      <TableCell>{employee.position}</TableCell>
                      <TableCell>{employee.baseSalary.toLocaleString()} ر.س</TableCell>
                      <TableCell>{employee.allowances.toLocaleString()} ر.س</TableCell>
                      <TableCell className="font-medium text-green-600">{employee.totalEarnings.toLocaleString()} ر.س</TableCell>
                      <TableCell className="text-red-600">{employee.socialInsurance.toLocaleString()} ر.س</TableCell>
                      <TableCell className="text-red-600">{employee.incomeTax.toLocaleString()} ر.س</TableCell>
                      <TableCell className="text-red-600">{employee.loans.toLocaleString()} ر.س</TableCell>
                      <TableCell className="text-red-600">{employee.otherDeductions.toLocaleString()} ر.س</TableCell>
                      <TableCell className="font-medium text-red-600">{employee.totalDeductions.toLocaleString()} ر.س</TableCell>
                      <TableCell className="font-bold text-blue-600">{employee.netSalary.toLocaleString()} ر.س</TableCell>
                      <TableCell>
                        <Badge variant={employee.status === "مدفوع" ? "default" : "destructive"}>
                          {employee.status}
                        </Badge>
                      </TableCell>
                      <TableCell>
                        <Button variant="outline" size="sm">
                          <Eye className="w-4 h-4" />
                        </Button>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </div>
            
            <div className="mt-6 p-4 bg-muted/50 rounded-lg">
              <div className="grid grid-cols-2 md:grid-cols-5 gap-4 text-sm">
                <div className="text-center">
                  <div className="font-semibold text-green-600">إجمالي الاستحقاق</div>
                  <div className="text-lg font-bold">62,300 ر.س</div>
                </div>
                <div className="text-center">
                  <div className="font-semibold text-red-600">التأمينات</div>
                  <div className="text-lg font-bold">4,672 ر.س</div>
                </div>
                <div className="text-center">
                  <div className="font-semibold text-red-600">الضرائب</div>
                  <div className="text-lg font-bold">3,115 ر.س</div>
                </div>
                <div className="text-center">
                  <div className="font-semibold text-red-600">إجمالي الخصومات</div>
                  <div className="text-lg font-bold">10,562 ر.س</div>
                </div>
                <div className="text-center">
                  <div className="font-semibold text-blue-600">صافي الإجمالي</div>
                  <div className="text-lg font-bold">51,738 ر.س</div>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </MainLayout>
  );
};

export default Payroll;