-- CreateTable
CREATE TABLE `InfluencerList` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `name` VARCHAR(191) NOT NULL,
    `description` VARCHAR(191) NOT NULL,
    `criteria` JSON NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `_InfluencerToInfluencerList` (
    `A` INTEGER NOT NULL,
    `B` INTEGER NOT NULL,

    UNIQUE INDEX `_InfluencerToInfluencerList_AB_unique`(`A`, `B`),
    INDEX `_InfluencerToInfluencerList_B_index`(`B`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `_InfluencerToInfluencerList` ADD CONSTRAINT `_InfluencerToInfluencerList_A_fkey` FOREIGN KEY (`A`) REFERENCES `Influencer`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `_InfluencerToInfluencerList` ADD CONSTRAINT `_InfluencerToInfluencerList_B_fkey` FOREIGN KEY (`B`) REFERENCES `InfluencerList`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;
