// app/api/auth/verify/route.ts
import { NextResponse } from "next/server";

export async function POST(req: Request) {
  const { mobile, otp } = await req.json();

  // Mock OTP verification
  const token = "dummy-jwt-token";

  const res = NextResponse.json({ success: true });
  res.cookies.set({
    name: "token",
    value: token,
    httpOnly: true,
    path: "/",
    sameSite: "lax",
    secure: process.env.NODE_ENV === "production",
  });

  return res;
}
