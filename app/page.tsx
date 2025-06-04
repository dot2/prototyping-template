"use client";

import Image from "next/image";

export default function Home() {
  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start max-w-3xl w-full">
        <Image
          className="dark:invert"
          src="/next.svg"
          alt="Next.js logo"
          width={180}
          height={32}
          priority
        />
        
        <section className="w-full text-center sm:text-left">
          <h1 className="text-3xl sm:text-4xl font-bold mb-4 text-foreground">Prototyping with Cursor</h1>
          <p className="text-lg text-muted-foreground mb-6">
            This template is designed to help you build high fidelity prototypes with Cursor. Configured with a component library, state management, and custom AI rules you can start exploring ideas faster.
          </p>
        </section>

        <section className="w-full">
          <h2 className="text-2xl font-semibold mb-3 text-foreground border-b pb-2">Key Features & Technologies</h2>
          <ul className="list-disc list-inside space-y-2 text-muted-foreground">
            <li><strong className="font-medium text-foreground">Next.js App Router:</strong> Optimized routing, layouts, and server components.</li>
            <li>
              <a 
                href="https://bun.sh/package-manager"
                target="_blank"
                rel="noopener noreferrer"
                className="font-medium text-primary underline underline-offset-4 hover:text-primary/80"
              >
                <strong className="font-medium text-primary">Bun</strong>
              </a>
              : Fast JavaScript runtime, bundler, and package manager.
            </li>
            <li><strong className="font-medium text-foreground">Tailwind CSS:</strong> Utility-first CSS for rapid UI development.</li>
            <li><strong className="font-medium text-foreground">Framer Motion:</strong> Fluid animations and interactions.</li>
            <li><strong className="font-medium text-foreground">Zustand:</strong> Lightweight global state management.</li>
            <li><strong className="font-medium text-foreground">Shadcn/UI Primitives:</strong> Accessible components in <code>components/ui</code>.</li>
          </ul>
        </section>

        <section className="w-full">
          <h2 className="text-2xl font-semibold mb-3 text-foreground border-b pb-2">Getting Started</h2>
          <p className="text-muted-foreground mb-4">
            To begin customizing your project:
          </p>
          <ol className="list-decimal list-inside space-y-3 text-muted-foreground">
            <li>
              Customize your Shadcn UI components to match your brand or design system using{" "}
              <a 
                href="https://tweakcn.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="font-medium text-primary underline underline-offset-4 hover:text-primary/80"
              >
                TweakCN
              </a>
              . This tool allows you to quickly generate theme configurations for <code>components.json</code>, giving extra depth to your prototypes.
            </li>
            <li>
              If you haven't already, you'll need to{" "}
              <a 
                href="https://bun.sh/package-manager"
                target="_blank"
                rel="noopener noreferrer"
                className="font-medium text-primary underline underline-offset-4 hover:text-primary/80"
              >
                install Bun
              </a>
              . Then, familiarize yourself with using Bun for package management (e.g., <code>bun add &lt;package&gt;</code>) and running scripts (e.g., <code>bun run dev</code>).
            </li>
            <li>
              Modify this page by editing{" "}
              <code className="bg-muted px-1.5 py-1 rounded font-[family-name:var(--font-geist-mono)] font-semibold text-foreground">
                app/page.tsx
              </code>.
            </li>
            <li>
              Explore the folder structure:
              <ul className="list-disc list-inside ml-6 mt-2 space-y-1 text-sm">
                <li><code>app/</code>: Routes, layouts, and page UIs.</li>
                <li><code>components/custom/</code>: Your project-specific React components.</li>
                <li><code>components/ui/</code>: Reusable UI building blocks (e.g., from Shadcn).</li>
                <li><code>lib/</code>: Utility functions, constants, and Supabase client.</li>
                <li><code>stores/</code>: Zustand state stores for global state.</li>
                <li><code>hooks/</code>: Custom React hooks for reusable logic.</li>
                <li><code>documentation/</code>: Project documentation, including <code>project-details.md</code>.</li>
              </ul>
            </li>
          </ol>
        </section>

        <section className="w-full mt-6 text-center sm:text-left">
          <h2 className="text-2xl font-semibold mb-3 text-foreground">Next Steps</h2>
          <p className="text-muted-foreground mb-4">
            Ready to build something amazing?
          </p>
          <div className="flex flex-col sm:flex-row gap-3">
            <a
              className="inline-flex items-center justify-center rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-primary text-primary-foreground hover:bg-primary/90 h-10 px-4 py-2"
              href="https://nextjs.org/docs"
              target="_blank" 
              rel="noopener noreferrer"
              title="View project-details.md"
            >
              Explore Next.js Docs
            </a>
          </div>
        </section>
      </main>
      <footer className="row-start-3 flex gap-[24px] flex-wrap items-center justify-center">
        <a
          className="flex items-center gap-2 hover:underline hover:underline-offset-4"
          href="https://nextjs.org/learn?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            aria-hidden
            src="/file.svg"
            alt="File icon"
            width={16}
            height={16}
          />
          Learn
        </a>
        <a
          className="flex items-center gap-2 hover:underline hover:underline-offset-4"
          href="https://vercel.com/templates?framework=next.js&utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            aria-hidden
            src="/window.svg"
            alt="Window icon"
            width={16}
            height={16}
          />
          Examples
        </a>
        <a
          className="flex items-center gap-2 hover:underline hover:underline-offset-4"
          href="https://nextjs.org?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            aria-hidden
            src="/globe.svg"
            alt="Globe icon"
            width={16}
            height={16}
          />
          Go to nextjs.org →
        </a>
      </footer>
    </div>
  );
}
