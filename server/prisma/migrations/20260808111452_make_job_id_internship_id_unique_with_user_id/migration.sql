/*
  Warnings:

  - A unique constraint covering the columns `[userId,jobId]` on the table `applications` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[userId,internshipId]` on the table `applications` will be added. If there are existing duplicate values, this will fail.

*/
-- CreateIndex
CREATE UNIQUE INDEX `applications_userId_jobId_key` ON `applications`(`userId`, `jobId`);

-- CreateIndex
CREATE UNIQUE INDEX `applications_userId_internshipId_key` ON `applications`(`userId`, `internshipId`);
