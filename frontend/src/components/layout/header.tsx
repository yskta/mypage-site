"use client";

import { MobileSidebar } from "./sidebar";

interface HeaderProps {
  title?: string;
  subtitle?: string;
  actions?: React.ReactNode;
}

export function Header({ title, subtitle, actions }: HeaderProps) {
  return (
    <header className="sticky top-0 z-40 border-b bg-white/95 dark:bg-slate-900/95 backdrop-blur supports-[backdrop-filter]:bg-white/60 dark:supports-[backdrop-filter]:bg-slate-900/60">
      <div className="flex h-16 items-center gap-4 px-4 md:px-6">
        {/* モバイル用ハンバーガーメニュー */}
        <MobileSidebar />

        {/* ページタイトル */}
        <div className="flex-1">
          {title && (
            <div>
              <h1 className="text-lg font-semibold text-slate-900 dark:text-slate-100">
                {title}
              </h1>
              {subtitle && (
                <p className="text-sm text-slate-500 dark:text-slate-400">
                  {subtitle}
                </p>
              )}
            </div>
          )}
        </div>

        {/* アクション（ページ固有のボタンなど） */}
        {actions && (
          <div className="flex items-center gap-2">
            {actions}
          </div>
        )}
      </div>
    </header>
  );
}