-- DropForeignKey
ALTER TABLE `experience` DROP FOREIGN KEY `Experience_userId_fkey`;

-- DropIndex
DROP INDEX `Experience_userId_key` ON `experience`;

-- AlterTable
ALTER TABLE `experience` ADD COLUMN `type` VARCHAR(255) NULL;

