import { NextResponse } from "next/server";
import { revalidateTag } from "next/cache";

/**
 * This endpoint purges Prismic content from Next.js' cache. It is called when
 * content is published in Prismic.
 */
export async function POST(request: Request) {
  const {secret} = await request.json();

  if (secret !== process.env.REVALIDATE_TOKEN) {
    return NextResponse.json({ error: "Invalid secret" }, { status: 401 });
  }

  revalidateTag("prismic");

  return NextResponse.json({ revalidated: true, now: Date.now() });
}
