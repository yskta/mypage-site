import { MainLayout } from "@/components/layout/main-layout";

export default function About() {
  return (
    <MainLayout title="About">
      <div className="max-w-4xl mx-auto">
        <p className="text-slate-600 dark:text-slate-400">About page content goes here...</p>
      </div>
    </MainLayout>
  );
}