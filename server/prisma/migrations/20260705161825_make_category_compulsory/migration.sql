/*
  Warnings:

  - Made the column `category` on table `companies` required. This step will fail if there are existing NULL values in that column.
  - Made the column `category` on table `internship` required. This step will fail if there are existing NULL values in that column.

*/
-- AlterTable
ALTER TABLE `companies` MODIFY `category` VARCHAR(255) NOT NULL;

-- AlterTable
ALTER TABLE `internship` MODIFY `category` VARCHAR(255) NOT NULL;
