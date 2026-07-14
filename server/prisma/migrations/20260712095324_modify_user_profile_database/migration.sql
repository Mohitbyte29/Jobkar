/*
  Warnings:

  - Added the required column `industry` to the `UserProfile` table without a default value. This is not possible if the table is not empty.
  - Added the required column `profession` to the `UserProfile` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `userprofile` ADD COLUMN `industry` VARCHAR(255) NOT NULL,
    ADD COLUMN `profession` VARCHAR(255) NOT NULL;
