/*
  Warnings:

  - You are about to drop the `internship` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE `applications` DROP FOREIGN KEY `applications_internshipId_fkey`;

-- DropForeignKey
ALTER TABLE `internship` DROP FOREIGN KEY `Internship_CompanyId_fkey`;

-- DropForeignKey
ALTER TABLE `internship` DROP FOREIGN KEY `Internship_employerId_fkey`;

-- DropForeignKey
ALTER TABLE `savedinternships` DROP FOREIGN KEY `SavedInternships_internshipId_fkey`;

-- DropIndex
DROP INDEX `SavedInternships_internshipId_fkey` ON `savedinternships`;

-- DropTable
DROP TABLE `internship`;

-- CreateTable
CREATE TABLE `internships` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `title` VARCHAR(255) NOT NULL,
    `description` TEXT NOT NULL,
    `category` VARCHAR(255) NOT NULL,
    `requirements` TEXT NOT NULL,
    `location` VARCHAR(255) NOT NULL,
    `tags` JSON NOT NULL,
    `openings` INTEGER NOT NULL DEFAULT 1,
    `salaryMin` INTEGER NULL,
    `salaryMax` INTEGER NULL,
    `duration` INTEGER NULL,
    `remote` BOOLEAN NOT NULL DEFAULT false,
    `type` ENUM('Paid', 'Unpaid') NOT NULL,
    `internshipStatus` ENUM('ACTIVE', 'DRAFT', 'CLOSED') NOT NULL DEFAULT 'ACTIVE',
    `createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updatedAt` DATETIME(3) NOT NULL,
    `CompanyId` INTEGER NOT NULL,
    `employerId` INTEGER NOT NULL,
    `workType` ENUM('REMOTE', 'ONSITE', 'HYBRID') NOT NULL,

    INDEX `Internship_CompanyId_fkey`(`CompanyId`),
    INDEX `Internship_employerId_fkey`(`employerId`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `applications` ADD CONSTRAINT `applications_internshipId_fkey` FOREIGN KEY (`internshipId`) REFERENCES `internships`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `internships` ADD CONSTRAINT `Internship_CompanyId_fkey` FOREIGN KEY (`CompanyId`) REFERENCES `companies`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `internships` ADD CONSTRAINT `Internship_employerId_fkey` FOREIGN KEY (`employerId`) REFERENCES `employers`(`userId`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `SavedInternships` ADD CONSTRAINT `SavedInternships_internshipId_fkey` FOREIGN KEY (`internshipId`) REFERENCES `internships`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;
