# ⚡️ Azy Stack

<div align="center">

![Next.js](https://img.shields.io/badge/Next.js_15-black?style=for-the-badge&logo=next.js&logoColor=white)
![TypeScript](https://img.shields.io/badge/TypeScript-007ACC?style=for-the-badge&logo=typescript&logoColor=white)
![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white)
![Prisma](https://img.shields.io/badge/Prisma-2D3748?style=for-the-badge&logo=prisma&logoColor=white)
![PostgreSQL](https://img.shields.io/badge/PostgreSQL-316192?style=for-the-badge&logo=postgresql&logoColor=white)

**The ultimate production-ready starter kit for modern full-stack web applications.**
Designed for speed, developer experience, and scalability.

[Features](#-features) • [Getting Started](#-getting-started) • [Database Setup](#-database-setup) • [Configuration](#-configuration) • [Deployment](#-deployment)

</div>

---

## 🚀 Features

- **🧠 Modern Core:** Built on [Next.js 15](https://nextjs.org) (App Router) and [React 19](https://react.dev).
- **🛡️ Type Safety:** End-to-end type safety with [TypeScript](https://www.typescriptlang.org) and [Zod](https://zod.dev).
- **🔐 Auth:** Complete authentication with [Better-Auth](https://better-auth.com) (Email/Pass + Google).
- **🗄️ Database:** [Prisma ORM](https://www.prisma.io) with PostgreSQL.
- **⚡️ State & Forms:** Powered by [TanStack Query](https://tanstack.com/query) & [TanStack Form](https://tanstack.com/form).
- **🎨 UI/UX:** Beautiful UI with [Shadcn UI](https://ui.shadcn.com) and [Tailwind CSS 4](https://tailwindcss.com).
- **🌗 Theme:** Built-in Dark/Light mode support via `next-themes`.
- **🍞 Toasts:** Elegant notifications using [Sonner](https://sonner.emilkowal.ski).

---

## 🏁 Getting Started

### Prerequisites

Ensure you have **Node.js 18+** installed on your machine.

### Installation

1.  **Clone the repository**
    \`\`\`bash
    git clone https://github.com/keremeersoy/azy-stack.git
    cd azy-stack
    \`\`\`

2.  **Install Dependencies**
    \`\`\`bash
    npm install
    \`\`\`

3.  **Setup Environment**
    \`\`\`bash
    cp .env.example .env
    \`\`\`
    *(See [Configuration](#-configuration) for details)*

4.  **Run Development Server**
    \`\`\`bash
    npm run dev
    \`\`\`

---

## 🗄️ Database Setup

This project uses **PostgreSQL**. We recommend cloud providers like **Neon** or **Supabase** for the easiest setup.

1.  Create a project on [Neon](https://neon.tech) or [Supabase](https://supabase.com).
2.  Get your **Connection String** from the dashboard.
3.  Add it to your `.env` file as `DATABASE_URL`.

\`\`\`bash
npx prisma db push
\`\`\`
*Run this command to sync your schema with the database.*

---

## ⚙️ Configuration

Create a `.env` file in the root directory with the following variables:

\`\`\`env
# 🗄️ Database
DATABASE_URL="postgres://user:pass@host:5432/db?sslmode=require"

# 🔐 Authentication
BETTER_AUTH_SECRET="your-generated-secret-key"
BETTER_AUTH_URL="http://localhost:3000" # Production URL when deployed

# 🌐 Social Auth (Optional)
GOOGLE_CLIENT_ID="your-google-client-id"
GOOGLE_CLIENT_SECRET="your-google-client-secret"
\`\`\`

> 💡 **Tip:** Generate a secure secret key by running: `openssl rand -base64 32`

---

## � Project Structure

\`\`\`txt
├── app/                  # Application routes (App Router)
│   ├── api/              # API Routes
│   ├── (auth)/           # Auth pages group
│   └── layout.tsx        # Root layout
├── components/           # UI Components
│   ├── ui/               # Shadcn primitives
│   └── providers.tsx     # Global providers
├── lib/                  # Utilities & Config
│   ├── auth.ts           # Auth configuration
│   └── utils.ts          # Helper functions
└── prisma/               # Database Schema
\`\`\`

---

## � Deployment

The easiest way to deploy is using **Vercel**.

1.  Push your code to GitHub.
2.  Import the project in [Vercel](https://vercel.com).
3.  Add your `Environment Variables`.
4.  **Deploy!** 🚀

---

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.
