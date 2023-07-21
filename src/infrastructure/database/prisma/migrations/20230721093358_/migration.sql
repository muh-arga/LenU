/*
  Warnings:

  - The `denda` column on the `peminjam` table would be dropped and recreated. This will lead to data loss if there is data in the column.

*/
-- AlterTable
ALTER TABLE "peminjam" DROP COLUMN "denda",
ADD COLUMN     "denda" INTEGER NOT NULL DEFAULT 0;
