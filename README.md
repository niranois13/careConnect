# 🧩 careConnect

![careConnect](https://i.imgur.com/fyMEF6H.png)

---

- [🧩 careConnect](#-careconnect)
  - [📖 Project Overview](#-project-overview)
  - [⚙️ Tech Stack](#️-tech-stack)
  - [🚧 Development Status](#-development-status)
  - [🚀 Getting Started](#-getting-started)
  - [🛠️ Project Structure (WIP)](#️-project-structure-wip)
  - [👨‍💻 Author](#-author)

## 📖 Project Overview

**careConnect** is a platform built to connect care seekers with qualified health and well-being professionals. The idea stems from a need to simplify access to personal assistance, while also offering professionals a streamlined space to manage their services.

This is a **full-stack TypeScript** application currently under active development.

## ⚙️ Tech Stack

This project is built with a modern but pragmatic stack:

- **Back-end**

  - [NodeJS](https://nodejs.org/) - To run the environment
  - [TypeScript](https://www.typescriptlang.org/) - For type safety across the board
  - [Express](https://expressjs.com/) - REST API for flexibility and control
  - [Prisma](https://www.prisma.io/) - Elegant ORM for PostgreSQL
  - [PostgreSQL](https://www.postgresql.org/) - Reliable and powerful relational database
  - [Zod](https://zod.dev/) - Type-safe schema validation

- **Dev Tools**
  - [pnpm](https://pnpm.io/) – Fast package manager with monorepo support
  - [dotenv](https://github.com/motdotla/dotenv) – Environment variable management
  - ESLint + Prettier – Code quality and formatting
  - Turborepo – Monorepo tooling (optional depending on setup)

## 🚧 Development Status

The project is currently under **active development**.
Core database models and schema validation layers are being implemented.
For an overview of planned features, architecture decisions, and ongoing tasks, **please check [`ROADMAP.md`](./ROADMAP.md)**.

## 🚀 Getting Started

Clone the project:

```
git clone git@github.com:your-username/careConnect.git
cd careConnect
```

Install dependencies:

```
pnpm install
```

Setup environment variables:

```
cp .env.example .env
# Then fill in the required values (DB credentials, ports, etc.)
```

Push Prisma schema to your database (PostgreSQL must be running):

```
pnpm prisma db push
```

Start the development server:

```
pnpm dev
```

## 🛠️ Project Structure (WIP)

```
apps/
  └── server/         # Backend API (Express + Prisma)
  └── client/         # (Future) Frontend app
prisma/               # Prisma schema + migrations
.env                  # Environment variables
README.md             # You are here
ROADMAP.md            # Dev plan & features
```

## 👨‍💻 Author

Made with focus and too much coffee by [@your-username](https://github.com/niranois13) ☕

> Private repo for now — polishing before open-sourcing.

---
