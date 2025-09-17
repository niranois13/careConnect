# 🧩 careConnect

![careConnect](https://i.imgur.com/fyMEF6H.png)

> **careConnect** is a platform connecting individuals in vulnerable situations with qualified health and well-being professionals — all in a secure, intuitive and inclusive environment.

---

## 📖 Overview

**careConnect** aims to simplify the access to personal assistance services, while empowering professionals to manage their services and availability transparently. Inspired by [Nois](https://github.com/niranois13/Nois), this project is a **full-stack TypeScript monorepo**, actively being refactored and improved.

---

## ⚙️ Tech Stack

### Back-End _(in progress)_

- **Node.js** (v22+) with **Express.js** – REST API
- **TypeScript** – Strong typing
- **Prisma ORM** – Elegant DB layer for PostgreSQL
- **PostgreSQL** – Relational DB
- **Zod** – Schema validation
- **JWT** – Authentication
- **cookie-parser**, **jsonwebtoken**

### Front-End _(in progress)_

- **React**
- **Zod + React Hook Form**
- **TanStack Query**
- **React Big Calendar**

### Infrastructure & Dev Tools _(in progress)_

- **Docker** / **Docker Compose**
- **pnpm** – Package manager
- **dotenv** – Env vars management
- **ESLint** + **Prettier** + `.editorconfig` 
- **Redis** (planned)
- **Mocha/Chai** – Unit Testing (planned)
- **Winston** – Logging (planned)

---

## 🚀 Getting Started

```
git clone git@github.com:niranois13/careConnect.git
cd careConnect
pnpm install
cp .env.example .env
# Fill in required values: DB credentials, admin keys, ports...
pnpm prisma db push
pnpm dev
```


To test the API and DB connection:

```
curl http://localhost:3000/health
```

---

## 🛠️ Project Structure

```
apps/
  └── server/         # Node.js API (Express + Prisma)
        └── prisma/   # Prisma schemas & migrations
  └── web/            # React front-end
packages/             # Zod & types schemas
nginx/                # Nginx reverse proxy config
.env                  # Environment config
ROADMAP.md            # Feature planning & backlog
README.md             # You are here
```

---

## 👥 Features (Not fully implemented!)

### 🔐 Auth & User Management

- Login via Email/Password
- OAuth 2.0 (Google + others planned)
- JWT-based sessions in cookies
- User Roles: `CareSeeker`, `Professional`, `Admin`
- Admin, CareSeeker and Professional Panels

### 📅 Availability & Appointments

- Professionals define availability slots (start/end, min/max durations)
- CareSeekers can book appointments
- Statuses: Pending, Accepted, Cancelled
- Address support (client/pro location)
- Integration with React Big Calendar

### 🎓 Professional Qualifications & Services

- Verified degrees, documents, institutions
- List of offered services
- Categories (customizable)

### 🔎 Search Engine

- Search by service type, locality, availability

### 💬 Messaging (Planned)

- Messaging between CareSeeker and Professional (if appointment exists)
- Email verification for signup

### 🧰 Admin Tools

- JWT-based admin authentication
- Admin-only endpoints: user listing, role assignment, moderation

### 🔒 Security & Privacy (Planned)

- GDPR-ready: opt-in consent, data export, deletion
- Secure document storage ("coffre-fort numérique")
- Future integration with Stripe/MangoPay for payments

---

## 🧪 Testing & Logging

- Mocha + Chai for unit testing
- Winston for log tracing
- Health check endpoint (`/health`)
- Validators (email, phone, passwords, etc.)

---

## 📦 Docker Setup

`docker-compose.yml` supports:

- `db` – PostgreSQL with PostGIS
- `server` – Node.js API
- `frontend` – React app
- `nginx` – Static + proxy routing
- `redis` – Session & token management _(planned)_

To run:

```
docker-compose up --build
```

---

## 📅 Roadmap Highlights

- ✅ Database & Prisma models (User, Availability, Appointment, etc.)
- ✅ Zod validation
- ✅ REST API with Express (full CRUD)
- 🛠️ React frontend in progress
- 🛠️ Redis integration (token blacklist, cache)
- 🛠️ Advanced search & filters
- 🛠️ Messaging system
- 🛠️ File/document vault
- 🛠️ Admin panel UI

Full roadmap available in [`ROADMAP.md`](./ROADMAP.md)

---

## 👨‍💻 Author

Made with focus and too much coffee by [@niranois13](https://github.com/niranois13) ☕
