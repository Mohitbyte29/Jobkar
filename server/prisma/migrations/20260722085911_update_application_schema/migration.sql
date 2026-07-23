/*
  Warnings:

  - A unique constraint covering the columns `[applicantId]` on the table `applications` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `applicantId` to the `applications` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `applications` ADD COLUMN `applicantId` INTEGER NOT NULL;

-- CreateIndex
CREATE UNIQUE INDEX `applications_applicantId_key` ON `applications`(`applicantId`);

-- CreateIndex
CREATE INDEX `applications_jobId_fkey` ON `applications`(`jobId`);

-- AddForeignKey
ALTER TABLE `applications` ADD CONSTRAINT `applications_applicantId_fkey` FOREIGN KEY (`applicantId`) REFERENCES `Applicant`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;
