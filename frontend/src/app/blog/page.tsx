import { MainLayout } from "@/components/layout/main-layout";

export default function Blog() {
  return (
    <MainLayout title="Blog">
      <div className="max-w-4xl mx-auto">
        <p className="text-slate-600 dark:text-slate-400">Blog page content goes here...</p>
      </div>
    </MainLayout>
  );
}