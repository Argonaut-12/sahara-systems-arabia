import { MainLayout } from "@/components/Layout/MainLayout";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { ArrowLeft, Download, FileText, Eye, Users, DollarSign, TrendingDown, Calculator } from "lucide-react";
import { useNavigate } from "react-router-dom";

const PayrollDetails = () => {
  const navigate = useNavigate();

  const employeeData = [
    {
      id: "EMP001",
      name: "أحمد محمد السالم",
      position: "مدير تنفيذي",
      department: "الإدارة العليا",
      baseSalary: 15000,
      housingAllowance: 2000,
      transportAllowance: 500,
      mealAllowance: 300,
      phoneAllowance: 200,
      overtimeAmount: 0,
      totalEarnings: 18000,
      socialInsurance: 1350,
      incomeTax: 900,
      loanDeduction: 500,
      absenceDeduction: 0,
      lateDeduction: 0,
      otherDeductions: 250,
      totalDeductions: 3000,
      netSalary: 15000,
      status: "مدفوع",
      paymentDate: "2024-01-28",
      workingDays: 22,
      absenceDays: 0,
      overtimeHours: 0
    },
    {
      id: "EMP002",
      name: "فاطمة عبدالله النور",
      position: "مديرة موارد بشرية",
      department: "الموارد البشرية",
      baseSalary: 12000,
      housingAllowance: 1500,
      transportAllowance: 300,
      mealAllowance: 200,
      phoneAllowance: 0,
      overtimeAmount: 0,
      totalEarnings: 14000,
      socialInsurance: 1050,
      incomeTax: 700,
      loanDeduction: 0,
      absenceDeduction: 0,
      lateDeduction: 0,
      otherDeductions: 100,
      totalDeductions: 1850,
      netSalary: 12150,
      status: "مدفوع",
      paymentDate: "2024-01-28",
      workingDays: 22,
      absenceDays: 0,
      overtimeHours: 0
    },
    {
      id: "EMP003",
      name: "خالد عبدالعزيز الحمد",
      position: "محاسب أول",
      department: "المالية",
      baseSalary: 8000,
      housingAllowance: 1000,
      transportAllowance: 300,
      mealAllowance: 200,
      phoneAllowance: 0,
      overtimeAmount: 0,
      totalEarnings: 9500,
      socialInsurance: 712,
      incomeTax: 475,
      loanDeduction: 800,
      absenceDeduction: 0,
      lateDeduction: 0,
      otherDeductions: 0,
      totalDeductions: 1987,
      netSalary: 7513,
      status: "معلق",
      paymentDate: null,
      workingDays: 22,
      absenceDays: 0,
      overtimeHours: 0
    },
    {
      id: "EMP004",
      name: "نورا سالم القحطاني",
      position: "مطورة برمجيات",
      department: "تقنية المعلومات",
      baseSalary: 10000,
      housingAllowance: 800,
      transportAllowance: 200,
      mealAllowance: 0,
      phoneAllowance: 0,
      overtimeAmount: 0,
      totalEarnings: 11000,
      socialInsurance: 825,
      incomeTax: 550,
      loanDeduction: 600,
      absenceDeduction: 0,
      lateDeduction: 25,
      otherDeductions: 50,
      totalDeductions: 2025,
      netSalary: 8975,
      status: "مدفوع",
      paymentDate: "2024-01-30",
      workingDays: 21,
      absenceDays: 1,
      overtimeHours: 0
    },
    {
      id: "EMP005",
      name: "محمد صالح العتيبي",
      position: "مهندس شبكات",
      department: "تقنية المعلومات",
      baseSalary: 9000,
      housingAllowance: 600,
      transportAllowance: 200,
      mealAllowance: 0,
      phoneAllowance: 0,
      overtimeAmount: 0,
      totalEarnings: 9800,
      socialInsurance: 735,
      incomeTax: 490,
      loanDeduction: 400,
      absenceDeduction: 0,
      lateDeduction: 0,
      otherDeductions: 75,
      totalDeductions: 1700,
      netSalary: 8100,
      status: "مدفوع",
      paymentDate: "2024-01-28",
      workingDays: 22,
      absenceDays: 0,
      overtimeHours: 5
    }
  ];

  const totalStats = {
    totalEmployees: employeeData.length,
    totalEarnings: employeeData.reduce((sum, emp) => sum + emp.totalEarnings, 0),
    totalDeductions: employeeData.reduce((sum, emp) => sum + emp.totalDeductions, 0),
    totalNetSalary: employeeData.reduce((sum, emp) => sum + emp.netSalary, 0),
    paidEmployees: employeeData.filter(emp => emp.status === "مدفوع").length,
    pendingEmployees: employeeData.filter(emp => emp.status === "معلق").length
  };

  return (
    <MainLayout>
      <div className="space-y-6">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
          <div className="flex items-center gap-4">
            <Button variant="outline" size="sm" onClick={() => navigate("/payroll")}>
              <ArrowLeft className="w-4 h-4" />
            </Button>
            <div>
              <h1 className="text-3xl font-bold text-foreground">تفاصيل كشف مرتبات يناير 2024</h1>
              <p className="text-muted-foreground">عرض تفصيلي لجميع الموظفين والمدفوعات</p>
            </div>
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
            <Button>
              <Calculator className="w-4 h-4 mr-2" />
              إعادة حساب
            </Button>
          </div>
        </div>

        {/* إحصائيات سريعة */}
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">إجمالي الموظفين</CardTitle>
              <Users className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{totalStats.totalEmployees}</div>
              <p className="text-xs text-muted-foreground">
                مدفوع: {totalStats.paidEmployees} | معلق: {totalStats.pendingEmployees}
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">إجمالي الاستحقاق</CardTitle>
              <DollarSign className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-green-600">{totalStats.totalEarnings.toLocaleString()} ر.س</div>
              <p className="text-xs text-muted-foreground">قبل الخصومات</p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">إجمالي الخصومات</CardTitle>
              <TrendingDown className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-red-600">{totalStats.totalDeductions.toLocaleString()} ر.س</div>
              <p className="text-xs text-muted-foreground">جميع أنواع الخصومات</p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">صافي المدفوعات</CardTitle>
              <DollarSign className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-blue-600">{totalStats.totalNetSalary.toLocaleString()} ر.س</div>
              <p className="text-xs text-muted-foreground">المبلغ المدفوع فعلياً</p>
            </CardContent>
          </Card>
        </div>

        <Tabs defaultValue="detailed" className="w-full">
          <TabsList className="grid w-full grid-cols-3">
            <TabsTrigger value="detailed">التفاصيل الكاملة</TabsTrigger>
            <TabsTrigger value="allowances">البدلات</TabsTrigger>
            <TabsTrigger value="deductions">الخصومات</TabsTrigger>
          </TabsList>

          <TabsContent value="detailed" className="space-y-4">
            <Card>
              <CardHeader>
                <CardTitle>جدول الموظفين التفصيلي</CardTitle>
                <CardDescription>عرض شامل لجميع البيانات المالية والإدارية</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="overflow-x-auto">
                  <Table>
                    <TableHeader>
                      <TableRow>
                        <TableHead className="text-right">رقم الموظف</TableHead>
                        <TableHead className="text-right">الاسم</TableHead>
                        <TableHead className="text-right">القسم</TableHead>
                        <TableHead className="text-right">الوظيفة</TableHead>
                        <TableHead className="text-right">أيام العمل</TableHead>
                        <TableHead className="text-right">الغياب</TableHead>
                        <TableHead className="text-right">الراتب الأساسي</TableHead>
                        <TableHead className="text-right">إجمالي البدلات</TableHead>
                        <TableHead className="text-right">إجمالي الاستحقاق</TableHead>
                        <TableHead className="text-right">إجمالي الخصومات</TableHead>
                        <TableHead className="text-right">صافي الراتب</TableHead>
                        <TableHead className="text-right">تاريخ الدفع</TableHead>
                        <TableHead className="text-right">الحالة</TableHead>
                        <TableHead className="text-right">الإجراءات</TableHead>
                      </TableRow>
                    </TableHeader>
                    <TableBody>
                      {employeeData.map((employee) => {
                        const totalAllowances = employee.housingAllowance + employee.transportAllowance + 
                                              employee.mealAllowance + employee.phoneAllowance + employee.overtimeAmount;
                        
                        return (
                          <TableRow key={employee.id}>
                            <TableCell className="font-medium">{employee.id}</TableCell>
                            <TableCell className="font-medium">{employee.name}</TableCell>
                            <TableCell>{employee.department}</TableCell>
                            <TableCell>{employee.position}</TableCell>
                            <TableCell>{employee.workingDays}</TableCell>
                            <TableCell className={employee.absenceDays > 0 ? "text-red-600" : ""}>
                              {employee.absenceDays}
                            </TableCell>
                            <TableCell>{employee.baseSalary.toLocaleString()} ر.س</TableCell>
                            <TableCell>{totalAllowances.toLocaleString()} ر.س</TableCell>
                            <TableCell className="font-medium text-green-600">
                              {employee.totalEarnings.toLocaleString()} ر.س
                            </TableCell>
                            <TableCell className="font-medium text-red-600">
                              {employee.totalDeductions.toLocaleString()} ر.س
                            </TableCell>
                            <TableCell className="font-bold text-blue-600">
                              {employee.netSalary.toLocaleString()} ر.س
                            </TableCell>
                            <TableCell>
                              {employee.paymentDate ? new Date(employee.paymentDate).toLocaleDateString('ar-SA') : "-"}
                            </TableCell>
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
                        );
                      })}
                    </TableBody>
                  </Table>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="allowances" className="space-y-4">
            <Card>
              <CardHeader>
                <CardTitle>تفصيل البدلات</CardTitle>
                <CardDescription>عرض جميع أنواع البدلات لكل موظف</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="overflow-x-auto">
                  <Table>
                    <TableHeader>
                      <TableRow>
                        <TableHead className="text-right">اسم الموظف</TableHead>
                        <TableHead className="text-right">بدل السكن</TableHead>
                        <TableHead className="text-right">بدل المواصلات</TableHead>
                        <TableHead className="text-right">بدل الوجبات</TableHead>
                        <TableHead className="text-right">بدل الهاتف</TableHead>
                        <TableHead className="text-right">العمل الإضافي</TableHead>
                        <TableHead className="text-right">إجمالي البدلات</TableHead>
                      </TableRow>
                    </TableHeader>
                    <TableBody>
                      {employeeData.map((employee) => {
                        const totalAllowances = employee.housingAllowance + employee.transportAllowance + 
                                              employee.mealAllowance + employee.phoneAllowance + employee.overtimeAmount;
                        
                        return (
                          <TableRow key={employee.id}>
                            <TableCell className="font-medium">{employee.name}</TableCell>
                            <TableCell>{employee.housingAllowance.toLocaleString()} ر.س</TableCell>
                            <TableCell>{employee.transportAllowance.toLocaleString()} ر.س</TableCell>
                            <TableCell>{employee.mealAllowance.toLocaleString()} ر.س</TableCell>
                            <TableCell>{employee.phoneAllowance.toLocaleString()} ر.س</TableCell>
                            <TableCell>{employee.overtimeAmount.toLocaleString()} ر.س</TableCell>
                            <TableCell className="font-bold text-green-600">
                              {totalAllowances.toLocaleString()} ر.س
                            </TableCell>
                          </TableRow>
                        );
                      })}
                    </TableBody>
                  </Table>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="deductions" className="space-y-4">
            <Card>
              <CardHeader>
                <CardTitle>تفصيل الخصومات</CardTitle>
                <CardDescription>عرض جميع أنواع الخصومات لكل موظف</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="overflow-x-auto">
                  <Table>
                    <TableHeader>
                      <TableRow>
                        <TableHead className="text-right">اسم الموظف</TableHead>
                        <TableHead className="text-right">التأمينات الاجتماعية</TableHead>
                        <TableHead className="text-right">ضريبة الدخل</TableHead>
                        <TableHead className="text-right">خصم القروض</TableHead>
                        <TableHead className="text-right">خصم الغياب</TableHead>
                        <TableHead className="text-right">خصم التأخير</TableHead>
                        <TableHead className="text-right">خصومات أخرى</TableHead>
                        <TableHead className="text-right">إجمالي الخصومات</TableHead>
                      </TableRow>
                    </TableHeader>
                    <TableBody>
                      {employeeData.map((employee) => (
                        <TableRow key={employee.id}>
                          <TableCell className="font-medium">{employee.name}</TableCell>
                          <TableCell className="text-red-600">{employee.socialInsurance.toLocaleString()} ر.س</TableCell>
                          <TableCell className="text-red-600">{employee.incomeTax.toLocaleString()} ر.س</TableCell>
                          <TableCell className="text-red-600">{employee.loanDeduction.toLocaleString()} ر.س</TableCell>
                          <TableCell className="text-red-600">{employee.absenceDeduction.toLocaleString()} ر.س</TableCell>
                          <TableCell className="text-red-600">{employee.lateDeduction.toLocaleString()} ر.س</TableCell>
                          <TableCell className="text-red-600">{employee.otherDeductions.toLocaleString()} ر.س</TableCell>
                          <TableCell className="font-bold text-red-600">
                            {employee.totalDeductions.toLocaleString()} ر.س
                          </TableCell>
                        </TableRow>
                      ))}
                    </TableBody>
                  </Table>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </MainLayout>
  );
};

export default PayrollDetails;