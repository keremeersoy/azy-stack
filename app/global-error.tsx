"use client";

import { useEffect } from "react";
import { Button } from "@/components/ui/button";
import { AlertTriangle } from "lucide-react";
import "./globals.css"; // Ensure styles are loaded

export default function GlobalError({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <html>
      <body className="antialiased">
        <div className="flex h-screen w-full flex-col items-center justify-center gap-4 bg-background text-foreground">
          <div className="flex flex-col items-center justify-center gap-2 text-center">
            <div className="flex h-20 w-20 items-center justify-center rounded-full bg-red-100 dark:bg-red-900/20">
              <AlertTriangle className="h-10 w-10 text-red-600 dark:text-red-500" />
            </div>
            <h1 className="text-4xl font-bold tracking-tight">
              Critical Error
            </h1>
            <p className="text-muted-foreground max-w-[500px]">
              A critical error occurred that prevents the application from loading.
            </p>
          </div>
          <div className="flex gap-2">
            <Button onClick={() => reset()}>Try again</Button>
            <Button variant="outline" onClick={() => window.location.reload()}>
              Reload Page
            </Button>
          </div>
        </div>
      </body>
    </html>
  );
}
