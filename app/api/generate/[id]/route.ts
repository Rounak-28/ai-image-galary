import { NextRequest, NextResponse } from "next/server";
import Replicate from "replicate";

const replicate = new Replicate({
  auth: process.env.REPLICATE_API_TOKEN!,
});

export async function GET(
  request: NextRequest,
  { params }: { params: { id: string } }
) {
  const prediction = await replicate.predictions.get(params.id);

  if (prediction?.error) {
    return NextResponse.json(JSON.stringify({ detail: prediction.error }), {
      status: 500,
    });
  }

  return NextResponse.json(prediction, { status: 200 });
}
