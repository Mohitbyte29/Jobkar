/*
  Warnings:

  - You are about to drop the column `companySize` on the `jobs` table. All the data in the column will be lost.
  - You are about to drop the column `foundedYear` on the `jobs` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE `companies` ADD COLUMN `companySize` VARCHAR(191) NULL,
    ADD COLUMN `foundedYear` INTEGER NULL;

-- AlterTable
ALTER TABLE `jobs` DROP COLUMN `companySize`,
    DROP COLUMN `foundedYear`;
