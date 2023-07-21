/*
  Warnings:

  - You are about to drop the `Peminjam` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `User` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "Peminjam" DROP CONSTRAINT "Peminjam_bukuId_fkey";

-- DropForeignKey
ALTER TABLE "Peminjam" DROP CONSTRAINT "Peminjam_mahasiswaId_fkey";

-- DropForeignKey
ALTER TABLE "mahasiswa" DROP CONSTRAINT "mahasiswa_userId_fkey";

-- DropTable
DROP TABLE "Peminjam";

-- DropTable
DROP TABLE "User";

-- CreateTable
CREATE TABLE "user" (
    "id" SERIAL NOT NULL,
    "email" TEXT NOT NULL,
    "password" TEXT NOT NULL,
    "role" TEXT NOT NULL DEFAULT 'user',

    CONSTRAINT "user_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "peminjam" (
    "id" SERIAL NOT NULL,
    "mahasiswaId" INTEGER NOT NULL,
    "bukuId" INTEGER NOT NULL,
    "tanggalPinjam" TIMESTAMP(3) NOT NULL,
    "batasPengembalian" TIMESTAMP(3) NOT NULL,
    "tanggalPengembalian" TIMESTAMP(3),

    CONSTRAINT "peminjam_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "user_email_key" ON "user"("email");

-- AddForeignKey
ALTER TABLE "mahasiswa" ADD CONSTRAINT "mahasiswa_userId_fkey" FOREIGN KEY ("userId") REFERENCES "user"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "peminjam" ADD CONSTRAINT "peminjam_mahasiswaId_fkey" FOREIGN KEY ("mahasiswaId") REFERENCES "mahasiswa"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "peminjam" ADD CONSTRAINT "peminjam_bukuId_fkey" FOREIGN KEY ("bukuId") REFERENCES "buku"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
