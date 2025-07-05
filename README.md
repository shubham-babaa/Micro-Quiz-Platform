This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev

```

State Management During Quizzes
Problem: Managing complex quiz state across multiple questions while providing immediate feedback
Solution: Implemented a comprehensive state object tracking current question, selected answers, and score

Dynamic Routing
Problem: Creating category-specific routes with dynamic data
Solution: Used Next.js dynamic routing with [category] folder structure

Data Fetching Strategies
Problem: Deciding between SSG, SSR, and CSR for different pages
Solution:

SSG for home page (static categories)

SSR for category pages (dynamic quizzes)

CSR for quiz interactions

Progress Visualization
Problem: Showing quiz progress in a user-friendly way
Solution: Implemented a progress bar that updates in real-time

AI Tool Usage
During development, I utilized AI coding assistants for:

Generating boilerplate code for API routes

Refactoring components for better performance

Debugging TypeScript type errors

Optimizing Tailwind CSS class usage

Generating mock quiz data

Testing Note
This project uses App Router and focuses on demonstrating Next.js features. Due to the nature of the assignment and time constraints, unit and functional testing were not implemented.
