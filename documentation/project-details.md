This is your project details file. Here you can start by giving a brief overview of the project so the AI can get some understanding of the project. This documentation file is linked in the cursor project rules. So every time the AI runs, it will reference this file to understand the latest project details. Once it has completed the task, it will update this file with the latest details. Allowing your AI partner to always stay up to date with the project.

## Project Overview

This project is a Next.js-based template designed to accelerate the development of modern web applications. It incorporates best practices for frontend development, including a robust tech stack featuring Next.js, Tailwind CSS, Motion for animations, Supabase for backend services, and Zustand for state management.

## Package Management and Build Process

This project utilizes **Bun** as its primary package manager and JavaScript runtime. This choice is aimed at leveraging Bun's speed and efficiency for dependency management and build processes.

- **Lockfile**: You will find a `bun.lockb` file in the root directory, which is Bun's binary lockfile.
- **NPM/Yarn**: `package-lock.json` (for npm) or `yarn.lock` (for Yarn) are not used in this project to ensure consistency with Bun.
- **Vercel Deployment**: The project is configured to use Bun for deployments on Vercel via the `vercel.json` file, which specifies `bun install` for installing dependencies and `bun run build` for the build command.
- **Local Development**: It is recommended to use Bun commands for managing packages (e.g., `bun install`, `bun add <package>`, `bun remove <package>`) and running scripts (e.g., `bun run dev`, `bun run build`).

This setup ensures a consistent and fast development and deployment experience.

## Folder Structure and Conventions

Below is a high-level overview of the main project directories and their intended purpose:

- **`app/`**: Contains all routes, layouts, and UI for the Next.js App Router. This includes `page.tsx` for individual routes, `layout.tsx` for shared UI, `loading.tsx` for loading states, and `error.tsx` for error handling within routes.

- **`components/`**: Houses all React components used throughout the application.
    - **`components/custom/`**: This is where you'll create bespoke components tailored specifically for this project. These components might compose multiple UI primitives or implement unique application features.
    - **`components/ui/`**: Contains general-purpose UI components, often sourced from a library like Shadcn UI. These are the building blocks (buttons, inputs, cards, etc.) used to construct more complex interfaces.

- **`documentation/`**: Holds all project-related documentation. The `project-details.md` (this file) is the primary source of truth for project context, architecture, and conventions.

- **`hooks/`**: A dedicated space for custom React hooks. Hooks in this directory should encapsulate reusable stateful logic or side effects that can be shared across multiple components.

- **`lib/`**: A general-purpose directory for utility functions, helper scripts, constants, and configurations for third-party libraries. For example, Supabase client initialization or date formatting functions would reside here.

- **`public/`**: Stores static assets that are publicly accessible via the web server. This includes images, favicons, fonts (if not handled by Next/Font), and other files that don't require processing by the build system.

- **`stores/`**: Contains all Zustand state management stores. Each store typically resides in its own file and defines a slice of the global application state and its related actions.

## State Management (Zustand)

We use Zustand for global state management due to its simplicity, small bundle size, and hook-based API. It helps manage application-wide state without excessive boilerplate or the need for context providers.

### Stores

- **`stores/useBearStore.ts`**: A sample store to demonstrate basic Zustand functionality, managing a count of bears with actions to modify this count. This serves as an initial example and can be adapted or removed as project-specific stores are developed.

This setup provides a foundation for scalable state management as the application grows.