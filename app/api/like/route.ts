import { prisma } from "@/lib/prismaClient";
import { NextRequest, NextResponse } from "next/server";

export async function POST(request: NextRequest) {
  let reqPrompt = await request.json();
  const id = reqPrompt.id;

  const incrementLike = await prisma.post.update({
    where: {
      id: id,
    },
    data: {
      likeCount: {
        increment: 1,
      },
    },
  });

  return NextResponse.json(incrementLike, { status: 200 });
}
