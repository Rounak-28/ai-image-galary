import { NextRequest, NextResponse } from "next/server";
import Replicate from "replicate";

const replicate = new Replicate({
  auth: process.env.REPLICATE_API_TOKEN!,
});

export async function POST(request: NextRequest) {
  let reqPrompt = await request.json();
  const prompt = reqPrompt.prompt;

  const prediction = await replicate.predictions.create({
    version: "8beff3369e81422112d93b89ca01426147de542cd4684c244b673b105188fe5f",
    input: { prompt: prompt },
  });

  return NextResponse.json(prediction, { status: 200 });
}
