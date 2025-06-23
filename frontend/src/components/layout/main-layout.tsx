import { DesktopSidebar } from "./sidebar";
import { Header } from "./header";

interface MainLayoutProps {
  children: React.ReactNode;
  title?: string;
  subtitle?: string;
  headerActions?: React.ReactNode;
}

export function MainLayout({ 
  children, 
  title, 
  subtitle, 
  headerActions 
}: MainLayoutProps) {
  return (
    <div className="min-h-screen bg-slate-50 dark:bg-slate-900">
      {/* デスクトップサイドバー */}
      <DesktopSidebar />
      
      {/* メインコンテンツエリア */}
      <div className="md:pl-64">
        {/* ヘッダー */}
        <Header 
          title={title} 
          subtitle={subtitle} 
          actions={headerActions} 
        />
        
        {/* メインコンテンツ */}
        <main className="flex-1">
          <div className="container mx-auto px-4 py-6 md:px-6">
            {children}
          </div>
        </main>
        
        {/* フッター */}
        <footer className="border-t bg-white/50 dark:bg-slate-900/50 backdrop-blur-sm">
          <div className="container mx-auto px-4 py-6 md:px-6">
            <div className="text-center text-sm text-slate-500 dark:text-slate-400">
              <p>&copy; 2025 Personal Development Platform. Built with Next.js & FastAPI.</p>
            </div>
          </div>
        </footer>
      </div>
    </div>
  );
}