"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  Rocket,
  Layers,
  Database,
  ShieldCheck,
  LayoutTemplate,
  Server,
  LogOut
} from "lucide-react";
import { ModeToggle } from "@/components/mode-toggle";
import { authClient } from "@/lib/auth-client";
import { useRouter } from "next/navigation";

export default function Home() {
  const router = useRouter();
  const { data: session } = authClient.useSession();

  const handleSignOut = async () => {
    await authClient.signOut({
      fetchOptions: {
        onSuccess: () => {
          router.refresh();
        },
      },
    });
  };

  const features = [
    {
      title: "Next.js 15",
      description: "App Router, Server Actions, and the latest React 19 features.",
      icon: <Layers className="h-6 w-6 text-blue-500" />,
    },
    {
      title: "Tailwind CSS v4",
      description: "Utility-first CSS framework for rapid UI development.",
      icon: <LayoutTemplate className="h-6 w-6 text-sky-400" />,
    },
    {
      title: "shadcn/ui",
      description: "Re-usable components built using Radix UI and Tailwind CSS.",
      icon: <Rocket className="h-6 w-6 text-orange-500" />,
    },
    {
      title: "PostgreSQL",
      description: "Powerful, open source object-relational database system.",
      icon: <Database className="h-6 w-6 text-indigo-400" />,
    },
    {
      title: "Prisma ORM",
      description: "Next-generation Node.js and TypeScript ORM.",
      icon: <Server className="h-6 w-6 text-teal-500" />,
    },
    {
      title: "Better-Auth",
      description: "The most comprehensive authentication framework for TypeScript.",
      icon: <ShieldCheck className="h-6 w-6 text-green-500" />,
    },
  ];

  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="flex-1 flex flex-col items-center justify-center space-y-10 py-24 px-6 text-center bg-gradient-to-b from-background to-muted/20">
        <Badge variant="secondary" className="px-4 py-2 text-sm">
          🚀 Production Ready Starter
        </Badge>
        <div className="space-y-4 max-w-3xl">
          <h1 className="text-4xl font-extrabold tracking-tight lg:text-6xl bg-clip-text text-transparent bg-gradient-to-r from-gray-900 to-gray-600 dark:from-white dark:to-gray-400">
            Welcome to Azy Stack
          </h1>
          <p className="text-xl text-muted-foreground">
            The ultimate starter kit for your next full-stack web application.
            Pre-configured with the best modern tools so you can focus on building.
          </p>
        </div>
        <div className="flex gap-4 items-center">
          {session ? (
            <div className="flex items-center gap-4">
              <div className="text-sm font-medium">
                Welcome back, {session.user.name}
              </div>
              <Button onClick={handleSignOut} variant="destructive">
                <LogOut className="mr-2 h-4 w-4" /> Sign Out
              </Button>
            </div>
          ) : (
            <div className="flex gap-4">
               <Button size="lg" asChild>
                <Link href="/sign-up">
                  Get Started
                </Link>
              </Button>
              <Button size="lg" variant="outline" asChild>
                <Link href="/sign-in">
                  Sign In
                </Link>
              </Button>
            </div>
          )}
          <ModeToggle />
        </div>
      </section>

      {/* Features Grid */}
      <section className="container mx-auto px-6 py-24">
        <h2 className="text-3xl font-bold tracking-tight text-center mb-12">
          Everything You Need
        </h2>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {features.map((feature) => (
            <Card key={feature.title} className="border-muted bg-card/50 hover:bg-card transition-colors">
              <CardHeader>
                <div className="mb-2 w-fit rounded-lg bg-background p-3 ring-1 ring-muted shadow-sm">
                  {feature.icon}
                </div>
                <CardTitle>{feature.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base">
                  {feature.description}
                </CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t py-6 text-center text-sm text-muted-foreground">
        <p>Built with ❤️ by Azy Stack Team</p>
      </footer>
    </div>
  );
}
