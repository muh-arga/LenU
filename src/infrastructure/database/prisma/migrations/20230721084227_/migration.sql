-- AlterIndex
ALTER INDEX "mahasiswa_nim_key" RENAME TO "mahasiswa.nim_unique";

-- AlterIndex
ALTER INDEX "mahasiswa_userId_key" RENAME TO "mahasiswa.userId_unique";

-- AlterIndex
ALTER INDEX "user_email_key" RENAME TO "user.email_unique";
