"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import {
  Code,
  Database,
  Globe,
  Home,
  Settings,
  Menu,
  Plus,
  BarChart3
} from "lucide-react";

// サービス設定（後で外部ファイルに移動予定）
const services = [
  {
    id: "service1",
    name: "Service 1",
    description: "サンプルサービス1",
    icon: Code,
    href: "/service1",
    enabled: true,
    status: "開発中"
  },
  {
    id: "service2", 
    name: "Service 2",
    description: "サンプルサービス2",
    icon: Database,
    href: "/service2",
    enabled: false,
    status: "計画中"
  },
  {
    id: "service3",
    name: "Service 3",
    description: "サービス3の説明",
    icon: Globe,
    href: "/service3",
    enabled: false,
    status: "計画中"
  }
];

const navigationItems = [
  {
    title: "ホーム",
    href: "/",
    icon: Home
  },
  {
    title: "ダッシュボード",
    href: "/dashboard",
    icon: BarChart3
  }
];

interface SidebarContentProps {
  onItemClick?: () => void;
}

function SidebarContent({ onItemClick }: SidebarContentProps) {
  const pathname = usePathname();

  return (
    <div className="flex h-full flex-col">
      {/* Logo */}
      <div className="flex h-16 items-center border-b px-6">
        <Link href="/" className="flex items-center space-x-2" onClick={onItemClick}>
          <div className="w-8 h-8 bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg flex items-center justify-center">
            <Code className="h-5 w-5 text-white" />
          </div>
          <span className="text-lg font-semibold">Dev Platform</span>
        </Link>
      </div>

      <ScrollArea className="flex-1 px-3">
        <div className="space-y-4 py-4">
          {/* ナビゲーション */}
          <div className="space-y-2">
            <h3 className="px-3 text-xs font-semibold text-slate-500 dark:text-slate-400 uppercase tracking-wider">
              ナビゲーション
            </h3>
            {navigationItems.map((item) => {
              const Icon = item.icon;
              const isActive = pathname === item.href;
              
              return (
                <Link key={item.href} href={item.href} onClick={onItemClick}>
                  <Button
                    variant={isActive ? "secondary" : "ghost"}
                    className={cn(
                      "w-full justify-start",
                      isActive && "bg-blue-100 text-blue-700 dark:bg-blue-900 dark:text-blue-100"
                    )}
                  >
                    <Icon className="mr-2 h-4 w-4" />
                    {item.title}
                  </Button>
                </Link>
              );
            })}
          </div>

          <Separator />

          {/* サービス一覧 */}
          <div className="space-y-2">
            <div className="flex items-center justify-between px-3">
              <h3 className="text-xs font-semibold text-slate-500 dark:text-slate-400 uppercase tracking-wider">
                サービス
              </h3>
              <Button variant="ghost" size="sm" className="h-6 w-6 p-0">
                <Plus className="h-3 w-3" />
              </Button>
            </div>
            
            {services.map((service) => {
              const Icon = service.icon;
              const isActive = pathname === service.href;
              
              return (
                <div key={service.id}>
                  <Link href={service.enabled ? service.href : "#"} onClick={onItemClick}>
                    <Button
                      variant={isActive ? "secondary" : "ghost"}
                      className={cn(
                        "w-full justify-start",
                        !service.enabled && "opacity-50 cursor-not-allowed",
                        isActive && "bg-blue-100 text-blue-700 dark:bg-blue-900 dark:text-blue-100"
                      )}
                      disabled={!service.enabled}
                    >
                      <Icon className="mr-2 h-4 w-4" />
                      <span className="flex-1 text-left">{service.name}</span>
                      <Badge 
                        variant={service.status === '開発中' ? 'default' : 'outline'}
                        className="text-xs h-5"
                      >
                        {service.status}
                      </Badge>
                    </Button>
                  </Link>
                </div>
              );
            })}
          </div>

          <Separator />

          {/* 設定 */}
          <div className="space-y-2">
            <Link href="/settings" onClick={onItemClick}>
              <Button
                variant={pathname === "/settings" ? "secondary" : "ghost"}
                className="w-full justify-start"
              >
                <Settings className="mr-2 h-4 w-4" />
                設定
              </Button>
            </Link>
          </div>
        </div>
      </ScrollArea>
    </div>
  );
}

// デスクトップ用サイドバー
export function DesktopSidebar() {
  return (
    <div className="hidden md:flex md:w-64 md:flex-col md:fixed md:inset-y-0 z-50">
      <div className="flex flex-col flex-grow border-r bg-white dark:bg-slate-900">
        <SidebarContent />
      </div>
    </div>
  );
}

// モバイル用サイドバー
export function MobileSidebar() {
  const [open, setOpen] = useState(false);

  return (
    <Sheet open={open} onOpenChange={setOpen}>
      <SheetTrigger asChild>
        <Button variant="ghost" size="icon" className="md:hidden">
          <Menu className="h-5 w-5" />
        </Button>
      </SheetTrigger>
      <SheetContent side="left" className="p-0 w-64">
        <SidebarContent onItemClick={() => setOpen(false)} />
      </SheetContent>
    </Sheet>
  );
}