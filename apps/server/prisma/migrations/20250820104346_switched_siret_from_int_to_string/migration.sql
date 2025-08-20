-- DropIndex
DROP INDEX "public"."Professional_customProfession_key";

-- AlterTable
ALTER TABLE "public"."Professional" ALTER COLUMN "siret" DROP NOT NULL,
ALTER COLUMN "siret" SET DATA TYPE TEXT;
