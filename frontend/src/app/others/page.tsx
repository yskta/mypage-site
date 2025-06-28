"use client";

import { useState } from "react";
import { MainLayout } from "@/components/layout/main-layout";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";

export default function Others() {
  const [count, setCount] = useState(0);

  const increment = () => setCount(count + 1);
  const decrement = () => setCount(count - 1);
  const reset = () => setCount(0);

  return (
    <MainLayout title="Others">
      <div className="max-w-4xl mx-auto">
        <Card className="p-8 text-center">
          <h2 className="text-2xl font-bold mb-6">Counter</h2>
          <div className="text-6xl font-mono mb-8 text-blue-600 dark:text-blue-400">
            {count}
          </div>
          <div className="flex gap-4 justify-center">
            <Button onClick={decrement} variant="outline" size="lg">
              -1
            </Button>
            <Button onClick={reset} variant="secondary" size="lg">
              Reset
            </Button>
            <Button onClick={increment} size="lg">
              +1
            </Button>
          </div>
        </Card>
      </div>
    </MainLayout>
  );
}