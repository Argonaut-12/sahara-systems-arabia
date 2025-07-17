import { MainLayout } from "@/components/Layout/MainLayout";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Stethoscope, Plus, Heart, UserCheck, Calendar } from "lucide-react";

const Medical = () => {
  return (
    <MainLayout>
      <div className="space-y-6">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
          <div>
            <h1 className="text-3xl font-bold text-foreground">الخدمات الطبية</h1>
            <p className="text-muted-foreground">إدارة التأمين الصحي والخدمات الطبية للموظفين</p>
          </div>
          <Button className="flex items-center gap-2">
            <Plus className="w-4 h-4" />
            إضافة فحص طبي
          </Button>
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">المؤمن عليهم</CardTitle>
              <UserCheck className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">235</div>
              <p className="text-xs text-muted-foreground">من أصل 248 موظف</p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">الفحوصات الشهرية</CardTitle>
              <Stethoscope className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">42</div>
              <p className="text-xs text-muted-foreground">هذا الشهر</p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">الحالات الطارئة</CardTitle>
              <Heart className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">3</div>
              <p className="text-xs text-muted-foreground">هذا الأسبوع</p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">المواعيد القادمة</CardTitle>
              <Calendar className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">18</div>
              <p className="text-xs text-muted-foreground">هذا الأسبوع</p>
            </CardContent>
          </Card>
        </div>

        <Card>
          <CardHeader>
            <CardTitle>السجلات الطبية الحديثة</CardTitle>
            <CardDescription>عرض آخر الفحوصات والمراجعات الطبية</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {[
                { employee: "أحمد محمد علي", type: "فحص دوري", date: "2024-01-15", status: "مكتمل" },
                { employee: "فاطمة أحمد", type: "تحليل دم", date: "2024-01-14", status: "قيد المراجعة" },
                { employee: "محمد سالم", type: "فحص عيون", date: "2024-01-13", status: "مكتمل" },
                { employee: "سارة خالد", type: "فحص أسنان", date: "2024-01-12", status: "مكتمل" },
                { employee: "عبدالله أحمد", type: "فحص قلب", date: "2024-01-11", status: "مؤجل" }
              ].map((record, index) => (
                <div key={index} className="flex items-center justify-between p-4 border rounded-lg">
                  <div className="flex items-center gap-4">
                    <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center">
                      <Stethoscope className="w-5 h-5 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-medium">{record.employee}</h3>
                      <p className="text-sm text-muted-foreground">{record.type} - {record.date}</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-2">
                    <Badge variant={
                      record.status === "مكتمل" ? "default" : 
                      record.status === "قيد المراجعة" ? "secondary" : "outline"
                    }>
                      {record.status}
                    </Badge>
                    <Button variant="outline" size="sm">
                      عرض التقرير
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

export default Medical;