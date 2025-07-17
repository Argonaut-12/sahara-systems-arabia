import { MainLayout } from "@/components/Layout/MainLayout";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { GraduationCap, Plus, BookOpen, Users } from "lucide-react";

const Training = () => {
  return (
    <MainLayout>
      <div className="space-y-6">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
          <div>
            <h1 className="text-3xl font-bold text-foreground">التدريب والتطوير</h1>
            <p className="text-muted-foreground">إدارة برامج التدريب وتطوير المهارات</p>
          </div>
          <Button className="flex items-center gap-2">
            <Plus className="w-4 h-4" />
            إضافة برنامج تدريبي
          </Button>
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">البرامج النشطة</CardTitle>
              <GraduationCap className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">15</div>
              <p className="text-xs text-muted-foreground">برنامج تدريبي</p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">المتدربين</CardTitle>
              <Users className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">185</div>
              <p className="text-xs text-muted-foreground">متدرب نشط</p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">البرامج المكتملة</CardTitle>
              <BookOpen className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">42</div>
              <p className="text-xs text-muted-foreground">هذا العام</p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">معدل الإكمال</CardTitle>
              <GraduationCap className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">87%</div>
              <p className="text-xs text-muted-foreground">نسبة النجاح</p>
            </CardContent>
          </Card>
        </div>

        <Card>
          <CardHeader>
            <CardTitle>البرامج التدريبية الحالية</CardTitle>
            <CardDescription>عرض وإدارة البرامج التدريبية النشطة</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {[
                { title: "تطوير مهارات القيادة", participants: 25, duration: "6 أسابيع", status: "جاري" },
                { title: "أساسيات الأمن السيبراني", participants: 18, duration: "4 أسابيع", status: "جاري" },
                { title: "إدارة المشاريع المتقدمة", participants: 15, duration: "8 أسابيع", status: "قريباً" },
                { title: "تحليل البيانات", participants: 22, duration: "5 أسابيع", status: "جاري" },
                { title: "التواصل الفعال", participants: 30, duration: "3 أسابيع", status: "مكتمل" }
              ].map((program, index) => (
                <div key={index} className="flex items-center justify-between p-4 border rounded-lg">
                  <div className="flex items-center gap-4">
                    <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center">
                      <GraduationCap className="w-5 h-5 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-medium">{program.title}</h3>
                      <p className="text-sm text-muted-foreground">{program.participants} متدرب - {program.duration}</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-2">
                    <Badge variant={
                      program.status === "جاري" ? "default" : 
                      program.status === "مكتمل" ? "secondary" : "outline"
                    }>
                      {program.status}
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

export default Training;