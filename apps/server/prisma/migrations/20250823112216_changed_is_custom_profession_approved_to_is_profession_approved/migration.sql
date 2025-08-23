/*
  Warnings:

  - You are about to drop the column `isCustomProfessionApproved` on the `Profession` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "public"."Profession" DROP COLUMN "isCustomProfessionApproved",
ADD COLUMN     "isProfessionApproved" BOOLEAN NOT NULL DEFAULT false;
