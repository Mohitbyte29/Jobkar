/*
  Warnings:

  - The values [ACCEPTED] on the enum `applications_status` will be removed. If these variants are still used in the database, this will fail.
  - Added the required column `city` to the `applications` table without a default value. This is not possible if the table is not empty.
  - Added the required column `country` to the `applications` table without a default value. This is not possible if the table is not empty.
  - Added the required column `phoneNumber` to the `applications` table without a default value. This is not possible if the table is not empty.
  - Made the column `resume` on table `applications` required. This step will fail if there are existing NULL values in that column.

*/
-- DropForeignKey
ALTER TABLE `applications` DROP FOREIGN KEY `applications_internshipId_fkey`;

-- DropForeignKey
ALTER TABLE `applications` DROP FOREIGN KEY `applications_jobId_fkey`;

-- AlterTable
ALTER TABLE `applications` ADD COLUMN `city` VARCHAR(255) NOT NULL,
    ADD COLUMN `country` VARCHAR(255) NOT NULL,
    ADD COLUMN `github` VARCHAR(255) NULL,
    ADD COLUMN `linkedIn` VARCHAR(255) NULL,
    ADD COLUMN `phoneNumber` VARCHAR(255) NOT NULL,
    ADD COLUMN `portfolio` VARCHAR(255) NULL,
    MODIFY `jobId` INTEGER NULL,
    MODIFY `resume` VARCHAR(191) NOT NULL,
    MODIFY `coverletter` TEXT NULL,
    MODIFY `status` ENUM('PENDING', 'SUBMITTED', 'UNDER_REVIEW', 'SHORTLISTED', 'INTERVIEW_SCHEDULED', 'HIRED', 'REJECTED', 'WITHDRAWN') NOT NULL DEFAULT 'PENDING',
    MODIFY `internshipId` INTEGER NULL;

-- CreateTable
CREATE TABLE `Experience` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `userId` INTEGER NOT NULL,
    `jobTitle` VARCHAR(255) NOT NULL,
    `companyName` VARCHAR(255) NOT NULL,
    `startDate` DATETIME(3) NOT NULL,
    `endDate` DATETIME(3) NULL,
    `city` VARCHAR(255) NOT NULL,
    `country` VARCHAR(255) NOT NULL,
    `description` TEXT NULL,
    `createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updatedAt` DATETIME(3) NOT NULL,

    UNIQUE INDEX `Experience_userId_key`(`userId`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `applications` ADD CONSTRAINT `applications_internshipId_fkey` FOREIGN KEY (`internshipId`) REFERENCES `Internship`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `applications` ADD CONSTRAINT `applications_jobId_fkey` FOREIGN KEY (`jobId`) REFERENCES `jobs`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Experience` ADD CONSTRAINT `Experience_userId_fkey` FOREIGN KEY (`userId`) REFERENCES `users`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;
