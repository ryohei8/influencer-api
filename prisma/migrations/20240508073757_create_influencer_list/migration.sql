/*
  Warnings:

  - You are about to drop the `_InfluencerToInfluencerList` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE `_InfluencerToInfluencerList` DROP FOREIGN KEY `_InfluencerToInfluencerList_A_fkey`;

-- DropForeignKey
ALTER TABLE `_InfluencerToInfluencerList` DROP FOREIGN KEY `_InfluencerToInfluencerList_B_fkey`;

-- DropTable
DROP TABLE `_InfluencerToInfluencerList`;

-- CreateTable
CREATE TABLE `_InfluencerToList` (
    `A` INTEGER NOT NULL,
    `B` INTEGER NOT NULL,

    UNIQUE INDEX `_InfluencerToList_AB_unique`(`A`, `B`),
    INDEX `_InfluencerToList_B_index`(`B`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `_InfluencerToList` ADD CONSTRAINT `_InfluencerToList_A_fkey` FOREIGN KEY (`A`) REFERENCES `Influencer`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `_InfluencerToList` ADD CONSTRAINT `_InfluencerToList_B_fkey` FOREIGN KEY (`B`) REFERENCES `InfluencerList`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;
