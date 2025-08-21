/*
  Warnings:

  - You are about to drop the column `name` on the `Profession` table. All the data in the column will be lost.
  - You are about to drop the column `customProfession` on the `Professional` table. All the data in the column will be lost.
  - You are about to drop the column `isCustomProfessionApproved` on the `Professional` table. All the data in the column will be lost.
  - A unique constraint covering the columns `[professionName]` on the table `Profession` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `professionName` to the `Profession` table without a default value. This is not possible if the table is not empty.

*/
-- DropIndex
DROP INDEX "Profession_name_key";

-- AlterTable
ALTER TABLE "Profession" DROP COLUMN "name",
ADD COLUMN     "customProfession" TEXT,
ADD COLUMN     "isCustomProfessionApproved" BOOLEAN NOT NULL DEFAULT false,
ADD COLUMN     "professionName" TEXT NOT NULL;

-- AlterTable
ALTER TABLE "Professional" DROP COLUMN "customProfession",
DROP COLUMN "isCustomProfessionApproved",
ADD COLUMN     "isSiretValid" BOOLEAN NOT NULL DEFAULT false;

-- CreateIndex
CREATE UNIQUE INDEX "Profession_professionName_key" ON "Profession"("professionName");
