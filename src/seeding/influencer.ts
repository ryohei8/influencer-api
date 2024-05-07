import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function main() {
  const influencers = [
    {
      name: 'John Doe',
      address: '1234 Broadway St, New York, NY',
      age: 30,
      gender: 'Male',
    },
    {
      name: 'Jane Smith',
      address: '5678 Market St, San Francisco, CA',
      age: 28,
      gender: 'Female',
    },
    {
      name: '田中 太郎',
      address: '東京都品川区南品川9-1-12',
      age: 29,
      gender: '男性',
    },
    {
      name: '鈴木 花子',
      address: '神奈川県横浜市8-3-8',
      age: 24,
      gender: '女性',
    },
  ];

  for (const influencer of influencers) {
    const createdInfluencer = await prisma.influencer.create({
      data: influencer,
    });
    console.log(`Created influencer: ${createdInfluencer.name}`);
  }
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
