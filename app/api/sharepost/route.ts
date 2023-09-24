import { prisma } from "@/lib/prismaClient";
import { NextRequest, NextResponse } from "next/server";

export async function POST(request: NextRequest) {
  let reqPrompt = await request.json();
  const caption = reqPrompt.caption;
  const image = reqPrompt.image;
  const username = reqPrompt.username;
  const userDP = reqPrompt.userDP;

  const imagePost = await prisma.post.create({
    data: {
      caption: caption,
      image: image,
      username: username,
      userDP: userDP,
    },
  });

  return NextResponse.json(imagePost, { status: 200 });
}
