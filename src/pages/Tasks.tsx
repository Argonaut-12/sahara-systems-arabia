import { MainLayout } from "@/components/Layout/MainLayout";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { FileText, Plus, CheckCircle, Clock, AlertCircle } from "lucide-react";

const Tasks = () => {
  return (
    <MainLayout>
      <div className="space-y-6">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
          <div>
            <h1 className="text-3xl font-bold text-foreground">المهام</h1>
            <p className="text-muted-foreground">إدارة مهام الموارد البشرية والمتابعة</p>
          </div>
          <Button className="flex items-center gap-2">
            <Plus className="w-4 h-4" />
            إضافة مهمة جديدة
          </Button>
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">المهام النشطة</CardTitle>
              <FileText className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">24</div>
              <p className="text-xs text-muted-foreground">قيد التنفيذ</p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">المهام المكتملة</CardTitle>
              <CheckCircle className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">156</div>
              <p className="text-xs text-muted-foreground">هذا الشهر</p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">المهام المتأخرة</CardTitle>
              <AlertCircle className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">8</div>
              <p className="text-xs text-muted-foreground">تحتاج متابعة</p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">المهام المجدولة</CardTitle>
              <Clock className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">12</div>
              <p className="text-xs text-muted-foreground">هذا الأسبوع</p>
            </CardContent>
          </Card>
        </div>

        <Card>
          <CardHeader>
            <CardTitle>المهام الحالية</CardTitle>
            <CardDescription>عرض وإدارة المهام النشطة</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {[
                { title: "مراجعة طلبات الإجازة", assignee: "سارة خالد", dueDate: "2024-01-16", priority: "عالية", status: "قيد التنفيذ" },
                { title: "إعداد كشوف المرتبات", assignee: "أحمد محمد", dueDate: "2024-01-18", priority: "عالية", status: "قيد التنفيذ" },
                { title: "تحديث بيانات الموظفين", assignee: "فاطمة أحمد", dueDate: "2024-01-20", priority: "متوسطة", status: "جديدة" },
                { title: "إعداد تقرير الحضور", assignee: "محمد سالم", dueDate: "2024-01-15", priority: "عالية", status: "متأخرة" },
                { title: "تنظيم جلسة تدريبية", assignee: "عبدالله أحمد", dueDate: "2024-01-22", priority: "منخفضة", status: "مجدولة" }
              ].map((task, index) => (
                <div key={index} className="flex items-center justify-between p-4 border rounded-lg">
                  <div className="flex items-center gap-4">
                    <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center">
                      <FileText className="w-5 h-5 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-medium">{task.title}</h3>
                      <p className="text-sm text-muted-foreground">{task.assignee} - موعد التسليم: {task.dueDate}</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-2">
                    <Badge variant={
                      task.priority === "عالية" ? "destructive" : 
                      task.priority === "متوسطة" ? "default" : "secondary"
                    }>
                      {task.priority}
                    </Badge>
                    <Badge variant={
                      task.status === "مكتملة" ? "default" : 
                      task.status === "متأخرة" ? "destructive" : "outline"
                    }>
                      {task.status}
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

export default Tasks;