import { PrismaClient } from '@prisma/client';
const prisma = new PrismaClient();

export async function getVehicles() {
  return await prisma.vehicle.findMany({
    include: { violations: true },
  });
}

export async function createVehicle(data) {
  return await prisma.vehicle.create({ data });
}

export async function addViolation(vehicleId, violation) {
  return await prisma.violation.create({
    data: { ...violation, vehicleId },
  });
}

export async function payViolation(id) {
  return await prisma.violation.update({
    where: { id },
    data: { paid: true },
  });
}

export async function deleteViolation(id) {
  const violation = await prisma.violation.findUnique({ where: { id } });
  if (!violation?.paid) throw new Error("Cannot delete unpaid violation.");
  return await prisma.violation.delete({ where: { id } });
}

export async function getAggregate() {
  return await prisma.violation.groupBy({
    by: ['paid'],
    _count: true,
  });
}
