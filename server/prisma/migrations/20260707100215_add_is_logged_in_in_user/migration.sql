-- AlterTable
ALTER TABLE `users` ADD COLUMN `isLoggedIn` BOOLEAN NOT NULL DEFAULT false,
    ADD COLUMN `isVerified` BOOLEAN NOT NULL DEFAULT false;
