import { MainLayout } from "@/components/Layout/MainLayout";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { BarChart3, Download, FileText, TrendingUp } from "lucide-react";

const Reports = () => {
  return (
    <MainLayout>
      <div className="space-y-6">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
          <div>
            <h1 className="text-3xl font-bold text-foreground">التقارير</h1>
            <p className="text-muted-foreground">تقارير شاملة عن أداء الموارد البشرية</p>
          </div>
          <Button className="flex items-center gap-2">
            <FileText className="w-4 h-4" />
            إنشاء تقرير جديد
          </Button>
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">التقارير المنجزة</CardTitle>
              <BarChart3 className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">156</div>
              <p className="text-xs text-muted-foreground">هذا الشهر</p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">التقارير المجدولة</CardTitle>
              <FileText className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">12</div>
              <p className="text-xs text-muted-foreground">قيد الإنجاز</p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">معدل النمو</CardTitle>
              <TrendingUp className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">+15%</div>
              <p className="text-xs text-muted-foreground">مقارنة بالشهر الماضي</p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">التقارير الآلية</CardTitle>
              <BarChart3 className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">8</div>
              <p className="text-xs text-muted-foreground">تقرير يومي</p>
            </CardContent>
          </Card>
        </div>

        <Card>
          <CardHeader>
            <CardTitle>التقارير المتاحة</CardTitle>
            <CardDescription>عرض وتحميل التقارير المختلفة</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {[
                { title: "تقرير الحضور والانصراف", type: "شهري", lastUpdate: "2024-01-15", status: "جاهز" },
                { title: "تقرير كشوف المرتبات", type: "شهري", lastUpdate: "2024-01-14", status: "جاهز" },
                { title: "تقرير الإجازات", type: "أسبوعي", lastUpdate: "2024-01-13", status: "قيد المعالجة" },
                { title: "تقرير أداء الموظفين", type: "ربع سنوي", lastUpdate: "2024-01-01", status: "جاهز" },
                { title: "تقرير التدريب والتطوير", type: "شهري", lastUpdate: "2024-01-12", status: "جاهز" }
              ].map((report, index) => (
                <div key={index} className="flex items-center justify-between p-4 border rounded-lg">
                  <div className="flex items-center gap-4">
                    <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center">
                      <BarChart3 className="w-5 h-5 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-medium">{report.title}</h3>
                      <p className="text-sm text-muted-foreground">{report.type} - آخر تحديث: {report.lastUpdate}</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-2">
                    <Badge variant={report.status === "جاهز" ? "default" : "secondary"}>
                      {report.status}
                    </Badge>
                    <Button variant="outline" size="sm">
                      <Download className="w-4 h-4 mr-2" />
                      تحميل
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

export default Reports;