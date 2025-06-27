"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import {
  Code,
  Home,
  User,
  FileText,
  ExternalLink,
  Menu,
  Folder,
  Mail,
  Github,
  Linkedin,
  Twitter
} from "lucide-react";

// メインナビゲーション
const navigationItems = [
  {
    title: "Home",
    href: "/",
    icon: Home
  },
  {
    title: "About",
    href: "/about",
    icon: User
  },
  {
    title: "Projects",
    href: "/projects", 
    icon: Folder
  },
  {
    title: "Blog",
    href: "/blog",
    icon: FileText
  },
  {
    title: "Others",
    href: "/others",
    icon: Folder
  }
];

interface SidebarContentProps {
  onItemClick?: () => void;
}

function SidebarContent({ onItemClick }: SidebarContentProps) {
  const pathname = usePathname();

  return (
    <div className="flex h-full flex-col">
      {/* Logo/Profile */}
      <div className="flex h-16 items-center border-b px-6">
        <Link href="/" className="flex items-center space-x-2" onClick={onItemClick}>
          <div className="w-8 h-8 bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg flex items-center justify-center">
            <Code className="h-5 w-5 text-white" />
          </div>
          {/* <span className="text-lg font-semibold">Portfolio</span> */}
        </Link>
      </div>

      <ScrollArea className="flex-1 px-3">
        <div className="space-y-4 py-4">
          <div className="space-y-2">
            <h3 className="px-3 text-xs font-semibold text-slate-500 dark:text-slate-400 uppercase tracking-wider">
              Navigation
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