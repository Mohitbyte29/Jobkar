/*
  Warnings:

  - You are about to drop the column `status` on the `internship` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE `internship` DROP COLUMN `status`,
    ADD COLUMN `internshipStatus` ENUM('ACTIVE', 'DRAFT', 'CLOSED') NOT NULL DEFAULT 'ACTIVE';
