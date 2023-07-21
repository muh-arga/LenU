/*
  Warnings:

  - You are about to drop the column `kauntitas` on the `buku` table. All the data in the column will be lost.
  - Added the required column `kuantitas` to the `buku` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "buku" DROP COLUMN "kauntitas",
ADD COLUMN     "kuantitas" INTEGER NOT NULL;
