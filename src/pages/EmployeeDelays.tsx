import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Calendar, Clock, AlertTriangle, FileText, Search } from "lucide-react";
import { format, subMonths, isWithinInterval } from "date-fns";
import { ar } from "date-fns/locale";

interface DelayRecord {
  id: string;
  employeeId: string;
  employeeName: string;
  department: string;
  date: Date;
  delayMinutes: number;
  previousViolations: ViolationRecord[];
  currentPenalty: PenaltyLevel;
  penaltyAmount?: number;
}

interface ViolationRecord {
  id: string;
  date: Date;
  type: 'delay' | 'absence';
  penaltyLevel: PenaltyLevel;
}

type PenaltyLevel = 'none' | 'verbal_warning' | 'written_warning' | 'salary_deduction' | 'final_warning' | 'termination';

const DelayCalculationPage = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedDepartment, setSelectedDepartment] = useState("all");
  
  // بيانات تجريبية للموظفين والتأخيرات
  const delayRecords: DelayRecord[] = [
    {
      id: "1",
      employeeId: "EMP001",
      employeeName: "أحمد محمد",
      department: "الموارد البشرية",
      date: new Date(),
      delayMinutes: 15,
      previousViolations: [
        {
          id: "v1",
          date: subMonths(new Date(), 2),
          type: 'delay',
          penaltyLevel: 'verbal_warning'
        }
      ],
      currentPenalty: 'written_warning'
    },
    {
      id: "2",
      employeeId: "EMP002",
      employeeName: "فاطمة أحمد",
      department: "المحاسبة",
      date: new Date(),
      delayMinutes: 30,
      previousViolations: [
        {
          id: "v2",
          date: subMonths(new Date(), 1),
          type: 'delay',
          penaltyLevel: 'written_warning'
        },
        {
          id: "v3",
          date: subMonths(new Date(), 3),
          type: 'absence',
          penaltyLevel: 'verbal_warning'
        }
      ],
      currentPenalty: 'salary_deduction',
      penaltyAmount: 100
    },
    {
      id: "3",
      employeeId: "EMP003",
      employeeName: "محمد علي",
      department: "تقنية المعلومات",
      date: new Date(),
      delayMinutes: 45,
      previousViolations: [
        {
          id: "v4",
          date: subMonths(new Date(), 1),
          type: 'delay',
          penaltyLevel: 'salary_deduction'
        },
        {
          id: "v5",
          date: subMonths(new Date(), 4),
          type: 'delay',
          penaltyLevel: 'written_warning'
        }
      ],
      currentPenalty: 'final_warning'
    }
  ];

  // حساب العقوبة بناءً على نظام العمل السعودي
  const calculatePenalty = (delayMinutes: number, previousViolations: ViolationRecord[]): { penalty: PenaltyLevel, amount?: number } => {
    const sixMonthsAgo = subMonths(new Date(), 6);
    const recentViolations = previousViolations.filter(v => 
      isWithinInterval(v.date, { start: sixMonthsAgo, end: new Date() })
    );

    // تحديد آخر مستوى عقوبة
    const lastPenaltyLevel = recentViolations.length > 0 
      ? recentViolations.sort((a, b) => b.date.getTime() - a.date.getTime())[0].penaltyLevel
      : 'none';

    // نظام العقوبات التدريجي
    if (delayMinutes >= 15) {
      switch (lastPenaltyLevel) {
        case 'none':
          return { penalty: 'verbal_warning' };
        case 'verbal_warning':
          return { penalty: 'written_warning' };
        case 'written_warning':
          if (delayMinutes >= 30) {
            return { penalty: 'salary_deduction', amount: Math.floor(delayMinutes / 15) * 50 };
          }
          return { penalty: 'written_warning' };
        case 'salary_deduction':
          if (delayMinutes >= 45) {
            return { penalty: 'final_warning' };
          }
          return { penalty: 'salary_deduction', amount: Math.floor(delayMinutes / 15) * 50 };
        case 'final_warning':
          if (delayMinutes >= 60) {
            return { penalty: 'termination' };
          }
          return { penalty: 'final_warning' };
        default:
          return { penalty: 'verbal_warning' };
      }
    }
    
    return { penalty: 'none' };
  };

  const getPenaltyBadge = (penalty: PenaltyLevel) => {
    const penaltyConfig = {
      none: { label: "لا توجد عقوبة", variant: "secondary" as const },
      verbal_warning: { label: "إنذار شفهي", variant: "default" as const },
      written_warning: { label: "إنذار كتابي", variant: "destructive" as const },
      salary_deduction: { label: "خصم من الراتب", variant: "destructive" as const },
      final_warning: { label: "إنذار نهائي", variant: "destructive" as const },
      termination: { label: "فصل", variant: "destructive" as const }
    };

    const config = penaltyConfig[penalty];
    return <Badge variant={config.variant}>{config.label}</Badge>;
  };

  const filteredRecords = delayRecords.filter(record => {
    const matchesSearch = record.employeeName.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         record.employeeId.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesDepartment = selectedDepartment === "all" || record.department === selectedDepartment;
    return matchesSearch && matchesDepartment;
  });

  const departments = [...new Set(delayRecords.map(record => record.department))];

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold">حساب تأخيرات الموظفين</h1>
          <p className="text-muted-foreground">
            حساب العقوبات حسب نظام العمل السعودي مع مراجعة المخالفات السابقة
          </p>
        </div>
        <div className="flex gap-2">
          <Button>
            <FileText className="w-4 h-4 ml-2" />
            تصدير التقرير
          </Button>
        </div>
      </div>

      {/* Statistics Cards */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">إجمالي المتأخرين</CardTitle>
            <Clock className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{delayRecords.length}</div>
            <p className="text-xs text-muted-foreground">موظف</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">خصوم مالية</CardTitle>
            <AlertTriangle className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">
              {delayRecords.filter(r => r.penaltyAmount).length}
            </div>
            <p className="text-xs text-muted-foreground">حالة</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">إنذارات نهائية</CardTitle>
            <AlertTriangle className="h-4 w-4 text-destructive" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">
              {delayRecords.filter(r => r.currentPenalty === 'final_warning').length}
            </div>
            <p className="text-xs text-muted-foreground">موظف</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">إجمالي الخصوم</CardTitle>
            <Calendar className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">
              {delayRecords.reduce((sum, r) => sum + (r.penaltyAmount || 0), 0)} ريال
            </div>
            <p className="text-xs text-muted-foreground">هذا الشهر</p>
          </CardContent>
        </Card>
      </div>

      {/* Filters */}
      <Card>
        <CardHeader>
          <CardTitle>فلترة وبحث</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="flex gap-4">
            <div className="flex-1">
              <div className="relative">
                <Search className="absolute right-3 top-3 h-4 w-4 text-muted-foreground" />
                <Input
                  placeholder="البحث بالاسم أو رقم الموظف..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="pr-10"
                />
              </div>
            </div>
            <Select value={selectedDepartment} onValueChange={setSelectedDepartment}>
              <SelectTrigger className="w-48">
                <SelectValue placeholder="اختر القسم" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">جميع الأقسام</SelectItem>
                {departments.map((dept) => (
                  <SelectItem key={dept} value={dept}>
                    {dept}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>
        </CardContent>
      </Card>

      {/* Delay Records Table */}
      <Card>
        <CardHeader>
          <CardTitle>سجلات التأخير والعقوبات</CardTitle>
        </CardHeader>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>الموظف</TableHead>
                <TableHead>القسم</TableHead>
                <TableHead>التاريخ</TableHead>
                <TableHead>دقائق التأخير</TableHead>
                <TableHead>المخالفات السابقة</TableHead>
                <TableHead>العقوبة الحالية</TableHead>
                <TableHead>مبلغ الخصم</TableHead>
                <TableHead>الإجراءات</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {filteredRecords.map((record) => (
                <TableRow key={record.id}>
                  <TableCell>
                    <div>
                      <div className="font-medium">{record.employeeName}</div>
                      <div className="text-sm text-muted-foreground">{record.employeeId}</div>
                    </div>
                  </TableCell>
                  <TableCell>{record.department}</TableCell>
                  <TableCell>
                    {format(record.date, "dd MMM yyyy", { locale: ar })}
                  </TableCell>
                  <TableCell>
                    <Badge variant="destructive">{record.delayMinutes} دقيقة</Badge>
                  </TableCell>
                  <TableCell>
                    <div className="space-y-1">
                      {record.previousViolations.length === 0 ? (
                        <span className="text-sm text-muted-foreground">لا توجد مخالفات</span>
                      ) : (
                        record.previousViolations.slice(0, 2).map((violation, index) => (
                          <div key={violation.id} className="text-xs">
                            {format(violation.date, "dd/MM/yyyy", { locale: ar })} - {violation.type === 'delay' ? 'تأخير' : 'غياب'}
                          </div>
                        ))
                      )}
                      {record.previousViolations.length > 2 && (
                        <div className="text-xs text-muted-foreground">
                          +{record.previousViolations.length - 2} أخرى
                        </div>
                      )}
                    </div>
                  </TableCell>
                  <TableCell>{getPenaltyBadge(record.currentPenalty)}</TableCell>
                  <TableCell>
                    {record.penaltyAmount ? (
                      <span className="font-medium text-destructive">
                        {record.penaltyAmount} ريال
                      </span>
                    ) : (
                      <span className="text-muted-foreground">-</span>
                    )}
                  </TableCell>
                  <TableCell>
                    <div className="flex gap-2">
                      <Button variant="outline" size="sm">
                        تفاصيل
                      </Button>
                      <Button variant="outline" size="sm">
                        تعديل
                      </Button>
                    </div>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </CardContent>
      </Card>

      {/* Penalty System Explanation */}
      <Card>
        <CardHeader>
          <CardTitle>نظام العقوبات التدريجي</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="space-y-3">
              <h4 className="font-medium">مستويات العقوبات:</h4>
              <div className="space-y-2 text-sm">
                <div className="flex items-center gap-2">
                  <Badge variant="default">1</Badge>
                  <span>إنذار شفهي (أول مخالفة)</span>
                </div>
                <div className="flex items-center gap-2">
                  <Badge variant="default">2</Badge>
                  <span>إنذار كتابي (ثاني مخالفة)</span>
                </div>
                <div className="flex items-center gap-2">
                  <Badge variant="destructive">3</Badge>
                  <span>خصم من الراتب (ثالث مخالفة)</span>
                </div>
                <div className="flex items-center gap-2">
                  <Badge variant="destructive">4</Badge>
                  <span>إنذار نهائي (رابع مخالفة)</span>
                </div>
                <div className="flex items-center gap-2">
                  <Badge variant="destructive">5</Badge>
                  <span>فصل من العمل (خامس مخالفة)</span>
                </div>
              </div>
            </div>
            <div className="space-y-3">
              <h4 className="font-medium">احتساب الخصوم:</h4>
              <div className="space-y-2 text-sm">
                <div>• 15-29 دقيقة: 50 ريال</div>
                <div>• 30-44 دقيقة: 100 ريال</div>
                <div>• 45-59 دقيقة: 150 ريال</div>
                <div>• 60+ دقيقة: إنذار نهائي أو فصل</div>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default DelayCalculationPage;