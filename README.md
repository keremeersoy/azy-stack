# Azy Stack

A robust, modern full-stack starter template built with **Next.js 16**, **React 19**, and **Tailwind CSS 4**. This project is pre-configured with industry-standard tools for authentication, database management, form handling, and UI components, allowing you to focus on building features immediately.

## 🚀 Key Features

- **Modern Framework**: Built on Next.js 16 and React 19 for optimal performance and developer experience.
- **Type-Safe Database**: Integrated **Prisma ORM** with **PostgreSQL** for reliable data management.
- **Secure Authentication**: Fully configured **Better-Auth** supporting Email/Password and Google OAuth.
- **Advanced Forms**: **TanStack Form** with **Zod** validation for complex form state management.
- **Stunning UI**: **Tailwind CSS 4** combined with **shadcn/ui** components and **Lucide React** icons.
- **State Management**: **TanStack Query** for efficient server state handling.
- **Toast Notifications**: **Sonner** for beautiful, customizable toast notifications.

## 🛠️ Tech Stack

- **Framework**: [Next.js 16](https://nextjs.org/)
- **Language**: [TypeScript](https://www.typescriptlang.org/)
- **Styling**: [Tailwind CSS 4](https://tailwindcss.com/)
- **Database**: [PostgreSQL](https://www.postgresql.org/) & [Prisma](https://www.prisma.io/)
- **Authentication**: [Better-Auth](https://better-auth.com/)
- **Forms**: [TanStack Form](https://tanstack.com/form) & [Zod](https://zod.dev/)
- **UI Components**: [shadcn/ui](https://ui.shadcn.com/) & [Radix UI](https://www.radix-ui.com/)
- **Icons**: [Lucide React](https://lucide.dev/)
- **Utilities**: `clsx`, `tailwind-merge`

## 🏁 Getting Started

Follow these steps to get the project up and running locally.

### Prerequisites

- Node.js (v20 or higher recommended)
- npm or pnpm
- PostgreSQL database

### Installation

1.  **Clone the repository:**

    ```bash
    git clone https://github.com/yourusername/azy-stack.git
    cd azy-stack
    ```

2.  **Install dependencies:**

    ```bash
    npm install
    # or
    pnpm install
    ```

3.  **Environment Setup:**

    Create a `.env` file in the root directory and add the following variables:

    ```env
    # Database
    DATABASE_URL="postgresql://user:password@localhost:5432/azy_stack?schema=public"

    # Authentication (Better-Auth)
    BETTER_AUTH_SECRET="your_secret_key"
    BETTER_AUTH_URL="http://localhost:3000"

    # Google OAuth (Optional)
    GOOGLE_CLIENT_ID="your_google_client_id"
    GOOGLE_CLIENT_SECRET="your_google_client_secret"
    ```

4.  **Database Setup:**

    Push the Prisma schema to your database:

    ```bash
    npx prisma db push
    ```

5.  **Run the Development Server:**

    ```bash
    npm run dev
    ```

    Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## 📂 Project Structure

```text
azy-stack/
├── app/                  # Next.js App Router pages and layouts
│   ├── sign-in/          # Authentication pages
│   └── ...
├── components/           # Reusable UI components
│   ├── ui/               # shadcn/ui primitives
│   └── ...
├── lib/                  # Utility functions and configurations
│   ├── auth.ts           # Better-Auth configuration
│   └── utils.ts          # Helper functions
├── prisma/               # Database schema and migrations
│   └── schema.prisma
├── public/               # Static assets
└── ...
```

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

1.  Fork the project
2.  Create your feature branch (`git checkout -b feature/AmazingFeature`)
3.  Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4.  Push to the branch (`git push origin feature/AmazingFeature`)
5.  Open a Pull Request

## 📄 License

This project is open source and available under the MIT License.
