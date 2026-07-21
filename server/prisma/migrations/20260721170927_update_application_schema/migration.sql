/*
  Warnings:

  - A unique constraint covering the columns `[jobId]` on the table `applications` will be added. If there are existing duplicate values, this will fail.

*/
-- CreateIndex
CREATE UNIQUE INDEX `applications_jobId_key` ON `applications`(`jobId`);
