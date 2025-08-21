/*
  Warnings:

  - You are about to drop the column `profession` on the `Professional` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "public"."Professional" DROP COLUMN "profession",
ADD COLUMN     "professionId" TEXT;

-- CreateTable
CREATE TABLE "public"."Profession" (
    "id" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "name" TEXT NOT NULL,

    CONSTRAINT "Profession_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Profession_name_key" ON "public"."Profession"("name");

-- AddForeignKey
ALTER TABLE "public"."Professional" ADD CONSTRAINT "Professional_professionId_fkey" FOREIGN KEY ("professionId") REFERENCES "public"."Profession"("id") ON DELETE SET NULL ON UPDATE CASCADE;
