-- AlterTable
ALTER TABLE `internship` ADD COLUMN `openings` INTEGER NOT NULL DEFAULT 1;

-- AlterTable
ALTER TABLE `jobs` ADD COLUMN `openings` INTEGER NOT NULL DEFAULT 1;
