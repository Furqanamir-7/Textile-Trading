import { NextResponse } from "next/server";

interface ContactBody {
  name: string;
  company: string;
  country: string;
  productInterest: string;
  message: string;
}

export async function POST(request: Request) {
  try {
    const body = (await request.json()) as ContactBody;

    if (!body.name || !body.company || !body.country || !body.productInterest || !body.message) {
      return NextResponse.json({ error: "All fields are required" }, { status: 400 });
    }

    console.log("Contact inquiry received:", body);

    return NextResponse.json({ success: true });
  } catch {
    return NextResponse.json({ error: "Invalid request" }, { status: 400 });
  }
}
