# Azy Stack - Full-Stack Next.js Starter

A production-ready generic starter template for building modern full-stack web applications. Optimized for speed, developer experience, and scalability.

## 🚀 Tech Stack

- **Framework:** [Next.js 15 (App Router)](https://nextjs.org)
- **Language:** [TypeScript](https://www.typescriptlang.org)
- **Styling:** [Tailwind CSS 4](https://tailwindcss.com) & [Shadcn UI](https://ui.shadcn.com)
- **Auth:** [Better-Auth](https://better-auth.com) (Email/Pass & Google)
- **Database (ORM):** [Prisma](https://www.prisma.io) with PostgreSQL
- **State & Forms:** [TanStack Query](https://tanstack.com/query) & [TanStack Form](https://tanstack.com/form)
- **Validation:** [Zod](https://zod.dev)
- **Toasts:** [Sonner](https://sonner.emilkowal.ski)
- **Theme:** Dark/Light mode support (`next-themes`)

---

## 🛠️ Prerequisites

Before you begin, ensure you have the following installed:

- **Node.js** (v18 or higher) -> [Download](https://nodejs.org/)

---

## 🏁 Getting Started

### 1. Clone the repository

\`\`\`bash
git clone https://github.com/your-username/azy-stack.git
cd azy-stack
\`\`\`

### 2. Install dependencies

\`\`\`bash
npm install
\`\`\`

### 3. Setup Environment Variables

Create a \`.env\` file in the root directory:

\`\`\`bash
cp .env.example .env
\`\`\`

*(If `.env.example` is missing, create a `.env` file and check the Configuration section below.)*

---

## 🗄️ Database Setup (Cloud)

This project is configured for **PostgreSQL**. We recommend using a cloud provider like **Neon** or **Supabase**.

1.  **Create a Project:** Go to [Neon](https://neon.tech) or [Supabase](https://supabase.com) and create a new project.
2.  **Get Connection String:** Copy the connection string.
    *   **Neon:** Look for the "Connection string" in the Dashboard.
    *   **Supabase:** Go to Project Settings -> Database -> Connection URI -> Transaction (ensure "Use connection pooling" is checked if available, though direct connection works too for starters).
3.  **Add to `.env`:** Paste it as your `DATABASE_URL`.

\`\`\`env
DATABASE_URL="postgres://user:password@endpoint.neon.tech/neondb?sslmode=require"
\`\`\`

> **Note:** You can connect to this same database URL using tools like **pgAdmin4**, **DBeaver**, or **TablePlus** to view and manage your data manually from your computer.

---

## ⚙️ Configuration (.env)

Your `.env` file should look like this:

\`\`\`env
# Database Connection (from Neon/Supabase/etc.)
DATABASE_URL="postgres://..."

# Authentication (Better-Auth)
BETTER_AUTH_SECRET="REPLACE_WITH_A_SECURE_RANDOM_STRING"
BETTER_AUTH_URL="http://localhost:3000" # Change to your domain in production

# OAuth Providers (Optional, needed for Google Sign In)
GOOGLE_CLIENT_ID="your-google-client-id"
GOOGLE_CLIENT_SECRET="your-google-client-secret"
\`\`\`

> **Tip:** You can generate a random secret for `BETTER_AUTH_SECRET` by running `openssl rand -base64 32` in your terminal.

---

## 💾 Initialize the Database

Once your `.env` is set up with your cloud database URL, run the migration to create the tables:

\`\`\`bash
npx prisma db push
\`\`\`

This command connects to your remote database and creates the necessary tables defined in `prisma/schema.prisma`.

---

## ▶️ Running the App

Start the development server:

\`\`\`bash
npm run dev
\`\`\`

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

---

## 📁 Project Structure

\`\`\`
├── app/                  # Next.js App Router pages and API routes
├── components/           # Reusable UI components
│   ├── ui/               # Shadcn UI primitives
│   └── ...               # Custom components
├── lib/                  # Utilities, auth config, clients
├── prisma/               # Database schema
└── public/               # Static assets
\`\`\`

## 🔄 Deployment

This application is ready to be deployed on **Vercel**.

1.  Push your code to GitHub.
2.  Import the project in Vercel.
3.  Add your **Environment Variables** (DATABASE_URL, BETTER_AUTH_SECRET, etc.) in the specific Vercel project settings.
4.  Deploy!

---

## ❓ Troubleshooting

**"User was denied access on the database"**
- Check if your `DATABASE_URL` is correct.
- Ensure your cloud database password doesn't contain special characters that break the URL format (if so, URL encode them).

**"Sign in failed"**
- Ensure you have run `npx prisma db push`.
- Check browser console and server terminal for logs.
