import { MainLayout } from "@/components/Layout/MainLayout";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Calendar as CalendarIcon, Plus, Clock, Users } from "lucide-react";

const Calendar = () => {
  return (
    <MainLayout>
      <div className="space-y-6">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
          <div>
            <h1 className="text-3xl font-bold text-foreground">التقويم</h1>
            <p className="text-muted-foreground">إدارة المواعيد والأحداث والفعاليات</p>
          </div>
          <Button className="flex items-center gap-2">
            <Plus className="w-4 h-4" />
            إضافة موعد جديد
          </Button>
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">مواعيد اليوم</CardTitle>
              <CalendarIcon className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">8</div>
              <p className="text-xs text-muted-foreground">موعد مجدول</p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">مواعيد الأسبوع</CardTitle>
              <CalendarIcon className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">42</div>
              <p className="text-xs text-muted-foreground">موعد مجدول</p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">الاجتماعات</CardTitle>
              <Users className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">15</div>
              <p className="text-xs text-muted-foreground">هذا الأسبوع</p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">الأحداث القادمة</CardTitle>
              <Clock className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">5</div>
              <p className="text-xs text-muted-foreground">حدث مهم</p>
            </CardContent>
          </Card>
        </div>

        <Card>
          <CardHeader>
            <CardTitle>مواعيد اليوم</CardTitle>
            <CardDescription>المواعيد والأحداث المجدولة لهذا اليوم</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {[
                { title: "اجتماع فريق التطوير", time: "09:00 - 10:30", attendees: 8, type: "اجتماع" },
                { title: "مقابلة وظيفية - أحمد علي", time: "11:00 - 11:45", attendees: 3, type: "مقابلة" },
                { title: "تدريب الأمن السيبراني", time: "14:00 - 16:00", attendees: 25, type: "تدريب" },
                { title: "مراجعة الأداء الشهري", time: "16:30 - 17:30", attendees: 5, type: "مراجعة" },
                { title: "اجتماع مجلس الإدارة", time: "18:00 - 19:00", attendees: 12, type: "اجتماع" }
              ].map((appointment, index) => (
                <div key={index} className="flex items-center justify-between p-4 border rounded-lg">
                  <div className="flex items-center gap-4">
                    <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center">
                      <CalendarIcon className="w-5 h-5 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-medium">{appointment.title}</h3>
                      <p className="text-sm text-muted-foreground">{appointment.time} - {appointment.attendees} مشارك</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-2">
                    <Badge variant="outline">
                      {appointment.type}
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

export default Calendar;