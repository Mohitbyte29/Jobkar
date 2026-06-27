/*
  Warnings:

  - The values [REMOTE,OFFLINE] on the enum `Internship_type` will be removed. If these variants are still used in the database, this will fail.
  - Added the required column `workType` to the `Internship` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `internship` ADD COLUMN `workType` ENUM('REMOTE', 'ONSITE', 'HYBRID') NOT NULL,
    MODIFY `type` ENUM('Paid', 'Unpaid') NOT NULL;
