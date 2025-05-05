import { createViolation } from "@/app/repo/re";
import { payViolation, deleteViolation } from "@/app/repo/re";
export async function PUT(req, { params }) {
    const id = parseInt(params.id);
    const result = await payViolation(id);
    return Response.json(result);
}

export async function DELETE(req, context) {
  const id = parseInt(context.params.id); 

  try {
    const result = await deleteViolation(id);
    return Response.json(result);
  } catch (e) {
    return new Response(JSON.stringify({ error: e.message }), { status: 400 });
  }
}

export async function POST(req, { params }) {
  const { vehicleId } = params;
  const { reason } = await req.json();
  const result = await createViolation(parseInt(vehicleId), reason);
  return Response.json(result);
}



