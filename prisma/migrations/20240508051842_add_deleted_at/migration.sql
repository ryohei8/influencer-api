-- AlterTable
ALTER TABLE `Influencer` ADD COLUMN `deletedAt` DATETIME(3) NULL;

-- AlterTable
ALTER TABLE `InfluencerList` ADD COLUMN `deletedAt` DATETIME(3) NULL;
