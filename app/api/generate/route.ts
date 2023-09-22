import { NextRequest, NextResponse } from "next/server";
import Replicate from "replicate";

const replicate = new Replicate({
  auth: process.env.REPLICATE_API_TOKEN!,
});

export async function POST(request: NextRequest) {
//   const prompt = request?.body?.prompt;
  const prompt = "a cat on the moon";

  const prediction = await replicate.predictions.create({
    version: "ac732df83cea7fff18b8472768c88ad041fa750ff7682a21affe81863cbe77e4",
    input: { prompt: prompt },
  });

  return NextResponse.json(prediction, { status: 200 });
}
