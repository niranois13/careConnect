/*
  Warnings:

  - A unique constraint covering the columns `[customProfession]` on the table `Professional` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[siret]` on the table `Professional` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `siret` to the `Professional` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "public"."Professional" ADD COLUMN     "customProfession" TEXT,
ADD COLUMN     "isCustomProfessionApproved" BOOLEAN NOT NULL DEFAULT false,
ADD COLUMN     "profession" TEXT,
ADD COLUMN     "siret" INTEGER NOT NULL;

-- CreateIndex
CREATE UNIQUE INDEX "Professional_customProfession_key" ON "public"."Professional"("customProfession");

-- CreateIndex
CREATE UNIQUE INDEX "Professional_siret_key" ON "public"."Professional"("siret");
