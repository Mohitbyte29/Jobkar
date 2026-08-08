--  DropForeignKey
ALTER TABLE `applications` DROP FOREIGN KEY `applications_jobId_fkey`;
-- DropIndex
DROP INDEX `applications_jobId_key` ON `applications`;
