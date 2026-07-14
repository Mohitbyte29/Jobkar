-- AlterTable
ALTER TABLE `project` MODIFY `techStack` JSON NULL;

-- AlterTable
ALTER TABLE `userprofile` ADD COLUMN `city` VARCHAR(255) NULL,
    ADD COLUMN `country` VARCHAR(255) NULL;
