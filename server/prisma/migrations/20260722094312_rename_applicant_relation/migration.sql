/*
  Warnings:

  - You are about to drop the column `applicantId` on the `applicant` table. All the data in the column will be lost.
  - A unique constraint covering the columns `[userProfileId]` on the table `Applicant` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `userProfileId` to the `Applicant` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE `applicant` DROP FOREIGN KEY `Applicant_applicantId_fkey`;

-- DropIndex
DROP INDEX `Applicant_applicantId_key` ON `applicant`;

-- AlterTable
ALTER TABLE `applicant` 
RENAME COLUMN `applicantId` TO `userProfileId`;

-- CreateIndex
CREATE UNIQUE INDEX `Applicant_userProfileId_key` ON `Applicant`(`userProfileId`);

-- AddForeignKey
ALTER TABLE `Applicant` ADD CONSTRAINT `Applicant_userProfileId_fkey` FOREIGN KEY (`userProfileId`) REFERENCES `UserProfile`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;
