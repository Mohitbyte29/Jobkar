/*
  Warnings:

  - You are about to drop the `admin` table. If the table is not empty, all the data it contains will be lost.

*/
-- AlterTable
ALTER TABLE `users` MODIFY `role` ENUM('SEEKER', 'EMPLOYER', 'ADMIN') NOT NULL DEFAULT 'SEEKER';

-- DropTable
DROP TABLE `admin`;
