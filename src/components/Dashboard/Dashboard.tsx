import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Users, Clock, DollarSign, TrendingUp, AlertCircle, CheckCircle } from "lucide-react";
import { Badge } from "@/components/ui/badge";

export function Dashboard() {
  const stats = [
    {
      title: "إجمالي الموظفين",
      value: "248",
      change: "+12",
      changeType: "increase",
      icon: Users,
      color: "bg-primary"
    },
    {
      title: "الحضور اليوم",
      value: "236",
      change: "95%",
      changeType: "neutral",
      icon: Clock,
      color: "bg-success"
    },
    {
      title: "إجمالي المرتبات",
      value: "2.4M",
      change: "+8%",
      changeType: "increase",
      icon: DollarSign,
      color: "bg-warning"
    },
    {
      title: "دورات التدريب",
      value: "15",
      change: "5 نشط",
      changeType: "neutral",
      icon: TrendingUp,
      color: "bg-primary"
    }
  ];

  return (
    <div className="space-y-6 animate-fade-in">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-foreground">لوحة التحكم</h1>
          <p className="text-muted-foreground mt-1">نظرة عامة على نظام الموارد البشرية</p>
        </div>
        <Badge className="bg-primary/10 text-primary border-primary/20 px-4 py-2">
          التحديث: اليوم 9:30 ص
        </Badge>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {stats.map((stat, index) => (
          <Card key={stat.title} className="card-stats hover-lift" style={{ animationDelay: `${index * 0.1}s` }}>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium text-muted-foreground">
                {stat.title}
              </CardTitle>
              <div className={`p-2 rounded-lg ${stat.color}/10`}>
                <stat.icon className={`h-4 w-4 text-${stat.color.replace('bg-', '')}`} />
              </div>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-foreground">{stat.value}</div>
              <p className="text-xs text-muted-foreground mt-1">
                {stat.change}
              </p>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Quick Actions */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <Card className="card-professional">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <AlertCircle className="h-5 w-5 text-warning" />
              التنبيهات والمهام العاجلة
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-3">
            <div className="flex items-center justify-between p-3 bg-warning/10 rounded-lg">
              <span className="text-sm">مراجعة طلبات الإجازات</span>
              <Badge className="bg-warning/20 text-warning">12 طلب</Badge>
            </div>
            <div className="flex items-center justify-between p-3 bg-primary/10 rounded-lg">
              <span className="text-sm">تقييمات الأداء المتأخرة</span>
              <Badge className="bg-primary/20 text-primary">8 موظف</Badge>
            </div>
          </CardContent>
        </Card>

        <Card className="card-professional">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <CheckCircle className="h-5 w-5 text-success" />
              الإنجازات الحديثة
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-3">
            <div className="flex items-center justify-between p-3 bg-success/10 rounded-lg">
              <span className="text-sm">اكتمال برنامج السلامة</span>
              <Badge className="bg-success/20 text-success">100%</Badge>
            </div>
            <div className="flex items-center justify-between p-3 bg-success/10 rounded-lg">
              <span className="text-sm">توظيف مهندسين جدد</span>
              <Badge className="bg-success/20 text-success">15 موظف</Badge>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}