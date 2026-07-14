/*
  Warnings:

  - You are about to drop the column `endYaer` on the `education` table. All the data in the column will be lost.
  - You are about to drop the column `intitution` on the `education` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE `education` DROP COLUMN `endYaer`,
    DROP COLUMN `intitution`,
    ADD COLUMN `endYear` INTEGER NULL,
    ADD COLUMN `institution` VARCHAR(255) NULL,
    MODIFY `school` VARCHAR(255) NULL;
