import { useState } from "react";
import { MainLayout } from "@/components/Layout/MainLayout";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Separator } from "@/components/ui/separator";
import { Badge } from "@/components/ui/badge";
import { Textarea } from "@/components/ui/textarea";
import { Download, FileText, User, Calendar, DollarSign, AlertCircle } from "lucide-react";
import jsPDF from 'jspdf';
import html2canvas from 'html2canvas';

// بيانات تجريبية للموظفين
const employees = [
  { id: 1, name: "أحمد محمد علي", position: "مهندس برمجيات", department: "تكنولوجيا المعلومات", joinDate: "2020-01-15", baseSalary: 8500 },
  { id: 2, name: "فاطمة عبدالله", position: "مديرة الموارد البشرية", department: "الموارد البشرية", joinDate: "2019-03-10", baseSalary: 12000 },
  { id: 3, name: "محمد حسن", position: "محاسب أول", department: "المحاسبة", joinDate: "2021-06-20", baseSalary: 7200 },
];

export default function BenefitsStatement() {
  const [selectedEmployee, setSelectedEmployee] = useState("");
  const [statementType, setStatementType] = useState("");
  const [leaveType, setLeaveType] = useState("");
  const [leaveDuration, setLeaveDuration] = useState("");
  const [terminationReason, setTerminationReason] = useState("");
  const [terminationDate, setTerminationDate] = useState("");
  const [isGenerating, setIsGenerating] = useState(false);

  const selectedEmp = employees.find(emp => emp.id === parseInt(selectedEmployee));

  // حساب سنوات الخدمة
  const calculateServiceYears = (joinDate: string) => {
    const join = new Date(joinDate);
    const today = new Date();
    const years = today.getFullYear() - join.getFullYear();
    const months = today.getMonth() - join.getMonth();
    return years + (months < 0 ? -1 : 0);
  };

  // حساب مستحقات نهاية الخدمة
  const calculateEndOfServiceBenefits = (baseSalary: number, serviceYears: number) => {
    let benefit = 0;
    
    if (serviceYears >= 5) {
      // الخمس سنوات الأولى: نصف شهر عن كل سنة
      benefit += (baseSalary / 2) * 5;
      // ما بعد الخمس سنوات: شهر كامل عن كل سنة
      benefit += baseSalary * (serviceYears - 5);
    } else {
      // أقل من 5 سنوات: نصف شهر عن كل سنة
      benefit += (baseSalary / 2) * serviceYears;
    }
    
    return benefit;
  };

  // حساب مستحقات الإجازة
  const calculateLeaveBenefits = (baseSalary: number, days: number) => {
    const dailyRate = baseSalary / 30;
    return dailyRate * days;
  };

  const generatePDF = async () => {
    if (!selectedEmp || !statementType) return;

    setIsGenerating(true);

    try {
      const element = document.getElementById('benefits-statement');
      if (!element) return;

      const canvas = await html2canvas(element, {
        scale: 2,
        useCORS: true,
        allowTaint: true,
        backgroundColor: '#ffffff'
      });

      const imgData = canvas.toDataURL('image/png');
      const pdf = new jsPDF('p', 'mm', 'a4');
      
      const pdfWidth = pdf.internal.pageSize.getWidth();
      const pdfHeight = pdf.internal.pageSize.getHeight();
      const imgWidth = canvas.width;
      const imgHeight = canvas.height;
      const ratio = Math.min(pdfWidth / imgWidth, pdfHeight / imgHeight);
      const imgX = (pdfWidth - imgWidth * ratio) / 2;
      const imgY = 10;

      pdf.addImage(imgData, 'PNG', imgX, imgY, imgWidth * ratio, imgHeight * ratio);
      
      const fileName = `بيان_مستحقات_${selectedEmp.name}_${new Date().toISOString().split('T')[0]}.pdf`;
      pdf.save(fileName);
    } catch (error) {
      console.error('خطأ في إنتاج PDF:', error);
    } finally {
      setIsGenerating(false);
    }
  };

  const serviceYears = selectedEmp ? calculateServiceYears(selectedEmp.joinDate) : 0;
  const endOfServiceBenefit = selectedEmp ? calculateEndOfServiceBenefits(selectedEmp.baseSalary, serviceYears) : 0;
  const leaveBenefit = selectedEmp && leaveDuration ? calculateLeaveBenefits(selectedEmp.baseSalary, parseInt(leaveDuration)) : 0;

  return (
    <MainLayout>
      <div className="section-padding">
        <div className="content-container">
          {/* Header */}
          <div className="flex items-center justify-between mb-8">
            <div>
              <h1 className="text-3xl font-bold text-foreground mb-2">بيان مستحقات الموظف</h1>
              <p className="text-muted-foreground">إنشاء وتصدير بيان المستحقات حسب نوع الطلب</p>
            </div>
            <Button 
              onClick={generatePDF}
              disabled={!selectedEmp || !statementType || isGenerating}
              className="btn-primary gap-2"
            >
              <Download className="w-4 h-4" />
              {isGenerating ? "جاري الإنتاج..." : "تصدير PDF"}
            </Button>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            {/* نموذج الإدخال */}
            <div className="lg:col-span-1">
              <Card className="card-professional">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <User className="w-5 h-5 text-primary" />
                    بيانات الطلب
                  </CardTitle>
                  <CardDescription>اختر الموظف ونوع البيان المطلوب</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  {/* اختيار الموظف */}
                  <div className="space-y-2">
                    <Label htmlFor="employee">الموظف</Label>
                    <Select value={selectedEmployee} onValueChange={setSelectedEmployee}>
                      <SelectTrigger>
                        <SelectValue placeholder="اختر الموظف" />
                      </SelectTrigger>
                      <SelectContent>
                        {employees.map((emp) => (
                          <SelectItem key={emp.id} value={emp.id.toString()}>
                            {emp.name} - {emp.position}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>

                  {/* نوع البيان */}
                  <div className="space-y-2">
                    <Label htmlFor="type">نوع البيان</Label>
                    <Select value={statementType} onValueChange={setStatementType}>
                      <SelectTrigger>
                        <SelectValue placeholder="اختر نوع البيان" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="leave">بيان مستحقات إجازة</SelectItem>
                        <SelectItem value="end-of-service">بيان مستحقات نهاية الخدمة</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  {/* خيارات الإجازة */}
                  {statementType === "leave" && (
                    <>
                      <div className="space-y-2">
                        <Label htmlFor="leave-type">نوع الإجازة</Label>
                        <Select value={leaveType} onValueChange={setLeaveType}>
                          <SelectTrigger>
                            <SelectValue placeholder="اختر نوع الإجازة" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="annual">إجازة سنوية</SelectItem>
                            <SelectItem value="sick">إجازة مرضية</SelectItem>
                            <SelectItem value="emergency">إجازة طارئة</SelectItem>
                            <SelectItem value="maternity">إجازة أمومة</SelectItem>
                            <SelectItem value="unpaid">إجازة بدون راتب</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="duration">عدد الأيام</Label>
                        <Input 
                          id="duration"
                          type="number"
                          placeholder="أدخل عدد الأيام"
                          value={leaveDuration}
                          onChange={(e) => setLeaveDuration(e.target.value)}
                        />
                      </div>
                    </>
                  )}

                  {/* خيارات نهاية الخدمة */}
                  {statementType === "end-of-service" && (
                    <>
                      <div className="space-y-2">
                        <Label htmlFor="termination-reason">سبب الإنهاء</Label>
                        <Select value={terminationReason} onValueChange={setTerminationReason}>
                          <SelectTrigger>
                            <SelectValue placeholder="اختر سبب الإنهاء" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="resignation">استقالة</SelectItem>
                            <SelectItem value="retirement">تقاعد</SelectItem>
                            <SelectItem value="termination">إنهاء خدمة</SelectItem>
                            <SelectItem value="contract-end">انتهاء العقد</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="termination-date">تاريخ الإنهاء</Label>
                        <Input 
                          id="termination-date"
                          type="date"
                          value={terminationDate}
                          onChange={(e) => setTerminationDate(e.target.value)}
                        />
                      </div>
                    </>
                  )}
                </CardContent>
              </Card>
            </div>

            {/* البيان */}
            <div className="lg:col-span-2">
              <Card className="card-professional">
                <CardContent className="p-8" id="benefits-statement">
                  {selectedEmp && statementType ? (
                    <div className="space-y-6">
                      {/* Header الشركة */}
                      <div className="text-center border-b pb-6">
                        <h2 className="text-2xl font-bold text-primary mb-2">الشركة الصناعية</h2>
                        <h3 className="text-xl font-semibold text-foreground">
                          {statementType === "leave" ? "بيان مستحقات إجازة" : "بيان مستحقات نهاية الخدمة"}
                        </h3>
                        <p className="text-sm text-muted-foreground mt-2">
                          تاريخ الإصدار: {new Date().toLocaleDateString('ar-SA')}
                        </p>
                      </div>

                      {/* بيانات الموظف */}
                      <div className="grid grid-cols-2 gap-4 p-4 bg-muted rounded-lg">
                        <div>
                          <span className="font-semibold text-muted-foreground">اسم الموظف:</span>
                          <p className="font-medium">{selectedEmp.name}</p>
                        </div>
                        <div>
                          <span className="font-semibold text-muted-foreground">المسمى الوظيفي:</span>
                          <p className="font-medium">{selectedEmp.position}</p>
                        </div>
                        <div>
                          <span className="font-semibold text-muted-foreground">القسم:</span>
                          <p className="font-medium">{selectedEmp.department}</p>
                        </div>
                        <div>
                          <span className="font-semibold text-muted-foreground">تاريخ التوظيف:</span>
                          <p className="font-medium">{new Date(selectedEmp.joinDate).toLocaleDateString('ar-SA')}</p>
                        </div>
                        <div>
                          <span className="font-semibold text-muted-foreground">سنوات الخدمة:</span>
                          <p className="font-medium">{serviceYears} سنة</p>
                        </div>
                        <div>
                          <span className="font-semibold text-muted-foreground">الراتب الأساسي:</span>
                          <p className="font-medium">{selectedEmp.baseSalary.toLocaleString()} ريال</p>
                        </div>
                      </div>

                      {/* تفاصيل المستحقات - عرض دائماً */}
                      <div className="space-y-6">
                        {/* معلومات الراتب والخدمة */}
                        <div className="bg-primary/5 p-4 rounded-lg">
                          <h4 className="text-lg font-semibold text-foreground border-b pb-2 mb-4">تفاصيل الراتب والخدمة</h4>
                          <div className="grid grid-cols-2 gap-4">
                            <div>
                              <span className="font-semibold text-muted-foreground">الراتب الشهري:</span>
                              <p className="font-bold text-xl text-primary">{selectedEmp.baseSalary.toLocaleString()} ريال</p>
                            </div>
                            <div>
                              <span className="font-semibold text-muted-foreground">راتب اليوم الواحد:</span>
                              <p className="font-bold text-xl text-primary">{(selectedEmp.baseSalary / 30).toFixed(2)} ريال</p>
                            </div>
                            <div>
                              <span className="font-semibold text-muted-foreground">راتب الساعة:</span>
                              <p className="font-bold text-xl text-primary">{(selectedEmp.baseSalary / 30 / 8).toFixed(2)} ريال</p>
                            </div>
                            <div>
                              <span className="font-semibold text-muted-foreground">سنوات الخدمة:</span>
                              <p className="font-bold text-xl text-primary">{serviceYears} سنة</p>
                            </div>
                          </div>
                        </div>

                        {/* معلومات الإجازات */}
                        <div className="bg-warning/5 p-4 rounded-lg">
                          <h4 className="text-lg font-semibold text-foreground border-b pb-2 mb-4">رصيد الإجازات</h4>
                          <div className="grid grid-cols-2 gap-4">
                            <div>
                              <span className="font-semibold text-muted-foreground">الإجازة السنوية المستحقة:</span>
                              <p className="font-bold text-lg text-success">30 يوم</p>
                            </div>
                            <div>
                              <span className="font-semibold text-muted-foreground">المستخدم من الإجازات:</span>
                              <p className="font-bold text-lg text-destructive">15 يوم</p>
                            </div>
                            <div>
                              <span className="font-semibold text-muted-foreground">الرصيد المتبقي:</span>
                              <p className="font-bold text-lg text-success">15 يوم</p>
                            </div>
                            <div>
                              <span className="font-semibold text-muted-foreground">قيمة الرصيد المتبقي:</span>
                              <p className="font-bold text-lg text-success">{((selectedEmp.baseSalary / 30) * 15).toFixed(2)} ريال</p>
                            </div>
                          </div>
                        </div>

                        {/* حساب مكافأة نهاية الخدمة */}
                        <div className="bg-success/5 p-4 rounded-lg">
                          <h4 className="text-lg font-semibold text-foreground border-b pb-2 mb-4">مكافأة نهاية الخدمة</h4>
                          <div className="space-y-3">
                            <div className="flex justify-between">
                              <span>سنوات الخدمة:</span>
                              <span className="font-medium">{serviceYears} سنة</span>
                            </div>
                            {serviceYears >= 5 ? (
                              <>
                                <div className="flex justify-between">
                                  <span>الخمس سنوات الأولى (نصف شهر × 5):</span>
                                  <span className="font-medium">{((selectedEmp.baseSalary / 2) * 5).toLocaleString()} ريال</span>
                                </div>
                                <div className="flex justify-between">
                                  <span>ما بعد الخمس سنوات (شهر × {serviceYears - 5}):</span>
                                  <span className="font-medium">{(selectedEmp.baseSalary * (serviceYears - 5)).toLocaleString()} ريال</span>
                                </div>
                              </>
                            ) : (
                              <div className="flex justify-between">
                                <span>أقل من 5 سنوات (نصف شهر × {serviceYears}):</span>
                                <span className="font-medium">{endOfServiceBenefit.toLocaleString()} ريال</span>
                              </div>
                            )}
                            <Separator />
                            <div className="flex justify-between font-bold text-xl text-success">
                              <span>إجمالي مكافأة نهاية الخدمة:</span>
                              <span>{endOfServiceBenefit.toLocaleString()} ريال</span>
                            </div>
                          </div>
                        </div>
                      </div>

                      {/* تفاصيل البيان حسب النوع */}
                      {statementType === "leave" && (
                        <div className="space-y-4 mt-6">
                          <h4 className="text-lg font-semibold text-foreground border-b pb-2">تفاصيل الإجازة المطلوبة</h4>
                          {leaveType && leaveDuration ? (
                            <>
                              <div className="grid grid-cols-2 gap-4">
                                <div>
                                  <span className="font-semibold text-muted-foreground">نوع الإجازة:</span>
                                  <p className="font-medium">
                                    {leaveType === "annual" && "إجازة سنوية"}
                                    {leaveType === "sick" && "إجازة مرضية"}
                                    {leaveType === "emergency" && "إجازة طارئة"}
                                    {leaveType === "maternity" && "إجازة أمومة"}
                                    {leaveType === "unpaid" && "إجازة بدون راتب"}
                                  </p>
                                </div>
                                <div>
                                  <span className="font-semibold text-muted-foreground">عدد الأيام:</span>
                                  <p className="font-medium">{leaveDuration} يوم</p>
                                </div>
                              </div>
                              
                              <div className="bg-success-light p-4 rounded-lg border border-success/20">
                                <h5 className="font-semibold mb-3 text-success">حساب المستحقات المالية:</h5>
                                <div className="space-y-2">
                                  <div className="flex justify-between">
                                    <span>راتب اليوم الواحد:</span>
                                    <span className="font-medium">{(selectedEmp.baseSalary / 30).toFixed(2)} ريال</span>
                                  </div>
                                  <div className="flex justify-between">
                                    <span>عدد الأيام:</span>
                                    <span className="font-medium">{leaveDuration} يوم</span>
                                  </div>
                                  <Separator />
                                  <div className="flex justify-between font-bold text-xl text-success">
                                    <span>إجمالي المستحقات:</span>
                                    <span>{leaveBenefit.toFixed(2)} ريال</span>
                                  </div>
                                </div>
                              </div>
                            </>
                          ) : (
                            <div className="text-center py-6 text-muted-foreground bg-muted/20 rounded-lg">
                              <FileText className="w-12 h-12 mx-auto mb-2 opacity-50" />
                              <p>يرجى اختيار نوع الإجازة وعدد الأيام لعرض التفاصيل</p>
                            </div>
                          )}
                        </div>
                      )}

                      {statementType === "end-of-service" && (
                        <div className="space-y-4 mt-6">
                          <h4 className="text-lg font-semibold text-foreground border-b pb-2">تفاصيل إنهاء الخدمة</h4>
                          
                          {terminationReason ? (
                            <div className="bg-warning-light p-4 rounded-lg border border-warning/20">
                              <h5 className="font-semibold mb-3 flex items-center gap-2 text-warning">
                                <AlertCircle className="w-5 h-5" />
                                بند إنهاء الخدمة:
                              </h5>
                              <div className="grid grid-cols-2 gap-4">
                                <div>
                                  <span className="font-semibold text-muted-foreground">سبب الإنهاء:</span>
                                  <p className="font-medium">
                                    {terminationReason === "resignation" && "استقالة"}
                                    {terminationReason === "retirement" && "تقاعد"}
                                    {terminationReason === "termination" && "إنهاء خدمة"}
                                    {terminationReason === "contract-end" && "انتهاء العقد"}
                                  </p>
                                </div>
                                {terminationDate && (
                                  <div>
                                    <span className="font-semibold text-muted-foreground">تاريخ الإنهاء:</span>
                                    <p className="font-medium">{new Date(terminationDate).toLocaleDateString('ar-SA')}</p>
                                  </div>
                                )}
                              </div>
                            </div>
                          ) : (
                            <div className="text-center py-6 text-muted-foreground bg-muted/20 rounded-lg">
                              <AlertCircle className="w-12 h-12 mx-auto mb-2 opacity-50" />
                              <p>يرجى اختيار سبب الإنهاء لعرض التفاصيل الكاملة</p>
                            </div>
                          )}
                        </div>
                      )}

                      {/* التوقيعات */}
                      <div className="mt-8 pt-6 border-t">
                        <div className="grid grid-cols-3 gap-8 text-center">
                          <div>
                            <div className="border-t border-muted-foreground pt-2 mt-8">
                              <p className="font-semibold">مدير الموارد البشرية</p>
                            </div>
                          </div>
                          <div>
                            <div className="border-t border-muted-foreground pt-2 mt-8">
                              <p className="font-semibold">المدير المالي</p>
                            </div>
                          </div>
                          <div>
                            <div className="border-t border-muted-foreground pt-2 mt-8">
                              <p className="font-semibold">المدير العام</p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  ) : (
                    <div className="text-center py-12">
                      <FileText className="w-16 h-16 text-muted-foreground mx-auto mb-4" />
                      <h3 className="text-lg font-semibold text-muted-foreground mb-2">
                        اختر الموظف ونوع البيان
                      </h3>
                      <p className="text-muted-foreground">
                        قم بملء البيانات المطلوبة لإنشاء بيان المستحقات
                      </p>
                    </div>
                  )}
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </MainLayout>
  );
}