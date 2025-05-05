import { getVehicles, createVehicle } from "@/app/repo/re";

export async function GET() {
  const data = await getVehicles();
  return Response.json(data);
}

export async function POST(req) {
  const { plate, owner } = await req.json();
  const vehicle = await createVehicle({ plate, owner });
  return Response.json(vehicle);
}
