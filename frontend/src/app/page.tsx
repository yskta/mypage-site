import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { 
  Code, 
  Database, 
  Globe, 
  Zap, 
  Settings, 
  BarChart3,
  Plus,
  ExternalLink
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
      name: "Web Scraper",
      description: "Webスクレイピングツール",
      status: "アイデア",
      icon: <Globe className="h-6 w-6" />,
      enabled: false
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100 dark:from-slate-900 dark:to-slate-800">
      {/* Header */}
      <header className="border-b bg-white/50 dark:bg-slate-900/50 backdrop-blur-sm sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center space-x-4">
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg flex items-center justify-center">
                <Code className="h-5 w-5 text-white" />
              </div>
              <h1 className="text-xl font-bold">Personal Dev Platform</h1>
            </div>
          </div>
          <nav className="hidden md:flex items-center space-x-6">
            {/* <a href="#services" className="text-sm hover:text-blue-600 transition-colors">Services</a> */}
            {/* <Button variant="outline" size="sm">
              <Settings className="h-4 w-4 mr-2" />
              Settings
            </Button> */}
          </nav>
        </div>
      </header>

      <main className="container mx-auto px-4 py-8">
        {/* Services Section */}
        <section id="services" className="py-8">
          <div className="flex items-center justify-between mb-8">
            <h3 className="text-2xl font-bold">サービス一覧</h3>
            <Button>
              <Plus className="h-4 w-4 mr-2" />
              新しいサービス
            </Button>
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
      </main>

      {/* Footer */}
      <footer className="border-t bg-white/50 dark:bg-slate-900/50 backdrop-blur-sm mt-16">
        <div className="container mx-auto px-4 py-8 text-center text-sm text-slate-600 dark:text-slate-400">
          <p>&copy; 2025 Personal Development Platform.</p>
        </div>
      </footer>
    </div>
  );
}