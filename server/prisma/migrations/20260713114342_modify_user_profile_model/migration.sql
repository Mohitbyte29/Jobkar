-- AlterTable
ALTER TABLE `userprofile` MODIFY `profileViews` INTEGER NULL DEFAULT 0,
    MODIFY `yearsOfExperience` INTEGER NULL DEFAULT 0,
    MODIFY `skills` JSON NULL,
    MODIFY `achievements` JSON NULL,
    MODIFY `industry` VARCHAR(255) NULL,
    MODIFY `profession` VARCHAR(255) NULL;
