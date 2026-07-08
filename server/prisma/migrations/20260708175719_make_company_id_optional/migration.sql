-- DropForeignKey
ALTER TABLE `employers` DROP FOREIGN KEY `employers_companyId_fkey`;

-- AlterTable
ALTER TABLE `employers` MODIFY `companyId` INTEGER NULL;

-- AddForeignKey
ALTER TABLE `employers` ADD CONSTRAINT `employers_companyId_fkey` FOREIGN KEY (`companyId`) REFERENCES `companies`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;
