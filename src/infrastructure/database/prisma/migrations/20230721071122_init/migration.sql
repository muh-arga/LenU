-- CreateTable
CREATE TABLE "User" (
    "id" SERIAL NOT NULL,
    "email" TEXT NOT NULL,
    "password" TEXT NOT NULL,
    "role" TEXT NOT NULL DEFAULT 'user',

    CONSTRAINT "User_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "mahasiswa" (
    "id" SERIAL NOT NULL,
    "userId" INTEGER NOT NULL,
    "nim" TEXT NOT NULL,
    "jurusan" TEXT NOT NULL,

    CONSTRAINT "mahasiswa_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "buku" (
    "id" SERIAL NOT NULL,
    "judul" TEXT NOT NULL,
    "penulis" TEXT NOT NULL,
    "kauntitas" INTEGER NOT NULL,
    "tempat" TEXT NOT NULL,

    CONSTRAINT "buku_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Peminjam" (
    "id" SERIAL NOT NULL,
    "mahasiswaId" INTEGER NOT NULL,
    "bukuId" INTEGER NOT NULL,
    "tanggalPinjam" TIMESTAMP(3) NOT NULL,
    "batasPengembalian" TIMESTAMP(3) NOT NULL,
    "tanggalPengembalian" TIMESTAMP(3),

    CONSTRAINT "Peminjam_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "User_email_key" ON "User"("email");

-- CreateIndex
CREATE UNIQUE INDEX "mahasiswa_userId_key" ON "mahasiswa"("userId");

-- CreateIndex
CREATE UNIQUE INDEX "mahasiswa_nim_key" ON "mahasiswa"("nim");

-- AddForeignKey
ALTER TABLE "mahasiswa" ADD CONSTRAINT "mahasiswa_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Peminjam" ADD CONSTRAINT "Peminjam_mahasiswaId_fkey" FOREIGN KEY ("mahasiswaId") REFERENCES "mahasiswa"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Peminjam" ADD CONSTRAINT "Peminjam_bukuId_fkey" FOREIGN KEY ("bukuId") REFERENCES "buku"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
