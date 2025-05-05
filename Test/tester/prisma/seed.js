import { PrismaClient } from '@prisma/client';
import { faker } from '@faker-js/faker';

const prisma = new PrismaClient();

const seed = async () => {
  const numVehicles = Math.floor(Math.random() * 20) + 5; // 5–25 vehicles

  await Promise.all(
    Array.from({ length: numVehicles }).map(async () => {
      const vehicle = await prisma.vehicle.create({
        data: {
          plate: faker.vehicle.vrm(), // e.g. "ABC123"
          owner: faker.person.fullName(),
          violations: {
            create: Array.from({
              length: Math.floor(Math.random() * 6), // 0–5 violations
            }).map(() => ({
              date: faker.date.past(),
              category: faker.helpers.arrayElement(['Speeding', 'Parking']),
              paid: faker.datatype.boolean(),
            })),
          },
        },
      });
    })
  );
};

try {
  await seed();
  await prisma.$disconnect();
  console.log('Seed completed successfully.');
} catch (e) {
  console.error(e);
  await prisma.$disconnect();
  process.exit(1);
}
