-- CreateEnum
CREATE TYPE "Role" AS ENUM ('CARESEEKER', 'PROFESSIONAL', 'ADMIN');

-- CreateTable
CREATE TABLE "User" (
    "id" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "password" TEXT NOT NULL,
    "firstName" TEXT NOT NULL,
    "lastName" TEXT NOT NULL,
    "phoneNumber" TEXT,
    "role" "Role" NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "emailVerified" BOOLEAN NOT NULL DEFAULT false,

    CONSTRAINT "User_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "CareSeeker" (
    "userId" TEXT NOT NULL,
    "isHelper" BOOLEAN NOT NULL DEFAULT false,

    CONSTRAINT "CareSeeker_pkey" PRIMARY KEY ("userId")
);

-- CreateTable
CREATE TABLE "Professional" (
    "userId" TEXT NOT NULL,
    "isMobile" BOOLEAN NOT NULL DEFAULT false,
    "interventionRadius" INTEGER NOT NULL DEFAULT 0,

    CONSTRAINT "Professional_pkey" PRIMARY KEY ("userId")
);

-- CreateIndex
CREATE UNIQUE INDEX "User_email_key" ON "User"("email");

-- AddForeignKey
ALTER TABLE "CareSeeker" ADD CONSTRAINT "CareSeeker_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Professional" ADD CONSTRAINT "Professional_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
