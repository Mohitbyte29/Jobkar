/*
  Warnings:

  - You are about to drop the column `city` on the `applications` table. All the data in the column will be lost.
  - You are about to drop the column `country` on the `applications` table. All the data in the column will be lost.
  - You are about to drop the column `email` on the `applications` table. All the data in the column will be lost.
  - You are about to drop the column `name` on the `applications` table. All the data in the column will be lost.
  - You are about to drop the column `phoneNumber` on the `applications` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE `applications` DROP COLUMN `city`,
    DROP COLUMN `country`,
    DROP COLUMN `email`,
    DROP COLUMN `name`,
    DROP COLUMN `phoneNumber`;

-- CreateTable
CREATE TABLE `Applicant` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `applicantId` INTEGER NOT NULL,
    `name` VARCHAR(255) NOT NULL,
    `email` VARCHAR(255) NOT NULL,
    `city` VARCHAR(255) NOT NULL,
    `country` VARCHAR(255) NOT NULL,
    `phoneNumber` VARCHAR(255) NOT NULL,

    UNIQUE INDEX `Applicant_applicantId_key`(`applicantId`),
    UNIQUE INDEX `Applicant_email_key`(`email`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `Applicant` ADD CONSTRAINT `Applicant_email_fkey` FOREIGN KEY (`email`) REFERENCES `users`(`email`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Applicant` ADD CONSTRAINT `Applicant_applicantId_fkey` FOREIGN KEY (`applicantId`) REFERENCES `UserProfile`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;
