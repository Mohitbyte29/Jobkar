-- DropForeignKey
ALTER TABLE `applications` DROP FOREIGN KEY `applications_applicantId_fkey`;

-- DropIndex
DROP INDEX `applications_applicantId_key` ON `applications`;

-- CreateIndex
CREATE INDEX `applications_userId_fkey` ON `applications`(`userId`);

