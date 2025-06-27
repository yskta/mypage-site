import { MainLayout } from "@/components/layout/main-layout";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { 
  Code, 
  Database, 
  Globe, 
  Plus,
  ExternalLink,
  BarChart3,
  Zap,
  Settings
} from "lucide-react";

export default function Home() {
  const services = [
    {
      name: "Service 1",
      description: "サンプルサービス1の説明",
      status: "開発中",
      icon: <Code className="h-6 w-6" />,
      enabled: true
    },
    {
      name: "Service 2", 
      description: "サンプルサービス2の説明",
      status: "計画中",
      icon: <Database className="h-6 w-6" />,
      enabled: false
    },
    {
      name: "Service 3",
      description: "サービス3の説明",
      status: "計画中",
      icon: <Globe className="h-6 w-6" />,
      enabled: false
    }
  ];

  const stats = [
    { label: "総プロジェクト数", value: "3", icon: <BarChart3 className="h-5 w-5" /> },
    { label: "アクティブサービス", value: "1", icon: <Zap className="h-5 w-5" /> },
    { label: "技術スタック", value: "6", icon: <Settings className="h-5 w-5" /> }
  ];

  // ヘッダーのアクションボタン
  const headerActions = (
    <Button>
      <Plus className="h-4 w-4 mr-2" />
      新しいサービス
    </Button>
  );

  return (
    <MainLayout 
      title="ホーム" 
      subtitle="個人開発プラットフォームの概要"
      headerActions={headerActions}
    >
      {/* Welcome Section */}
      <section className="mb-8">
        <div className="bg-gradient-to-r from-blue-50 to-purple-50 dark:from-blue-950/50 dark:to-purple-950/50 rounded-lg p-6 border">
          <h2 className="text-2xl font-bold mb-2 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
            Welcome to Personal Dev Platform
          </h2>
          <p className="text-slate-600 dark:text-slate-300 mb-4">
            技術検証とサービス開発のための統合プラットフォーム
          </p>
        </div>
      </section>

      {/* Stats Section */}
      <section className="mb-8">
        <h3 className="text-xl font-semibold mb-4">統計情報</h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {stats.map((stat, index) => (
            <Card key={index}>
              <CardContent className="pt-6">
                <div className="flex items-center space-x-2">
                  <div className="p-2 bg-blue-100 dark:bg-blue-900 rounded-lg">
                    {stat.icon}
                  </div>
                  <div>
                    <div className="text-2xl font-bold">{stat.value}</div>
                    <div className="text-sm text-slate-600 dark:text-slate-400">{stat.label}</div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* Services Section */}
      <section>
        <div className="flex items-center justify-between mb-6">
          <h3 className="text-xl font-semibold">サービス一覧</h3>
          <span className="text-sm text-slate-500 dark:text-slate-400">
            {services.filter(s => s.enabled).length} / {services.length} アクティブ
          </span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <Card key={index} className={`transition-all hover:shadow-lg ${!service.enabled ? 'opacity-60' : ''}`}>
              <CardHeader>
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-3">
                    <div className="p-2 bg-blue-100 dark:bg-blue-900 rounded-lg">
                      {service.icon}
                    </div>
                    <div>
                      <CardTitle className="text-lg">{service.name}</CardTitle>
                      <Badge variant={service.status === '開発中' ? 'default' : service.status === '計画中' ? 'secondary' : 'outline'} className="text-xs">
                        {service.status}
                      </Badge>
                    </div>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <CardDescription className="mb-4">
                  {service.description}
                </CardDescription>
                <div className="flex space-x-2">
                  <Button 
                    variant={service.enabled ? "default" : "secondary"} 
                    size="sm" 
                    className="flex-1"
                    disabled={!service.enabled}
                  >
                    {service.enabled ? (
                      <>
                        <ExternalLink className="h-4 w-4 mr-2" />
                        開く
                      </>
                    ) : (
                      '準備中'
                    )}
                  </Button>
                  <Button variant="outline" size="sm">
                    設定
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* Quick Actions */}
      <section className="mt-8">
        <Card className="bg-slate-50 dark:bg-slate-800 border-dashed">
          <CardContent className="pt-6">
            <div className="text-center">
              <h4 className="text-lg font-medium mb-2">新しいサービスを追加</h4>
              <Button>
                <Plus className="h-4 w-4 mr-2" />
                サービスを追加
              </Button>
            </div>
          </CardContent>
        </Card>
      </section>
    </MainLayout>
  );
}