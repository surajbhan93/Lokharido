// app/api/auth/test/route.ts
import { cookies } from "next/headers";
import { SignJWT } from "jose";
import { NextResponse } from "next/server";

export async function GET() {
  const SECRET = new TextEncoder().encode(process.env.JWT_SECRET || "your-secret-key");
  
  // Dummy token create karein
  const token = await new SignJWT({ name: "John Doe", email: "john@example.com", mobile: "9876543210" })
    .setProtectedHeader({ alg: "HS256" })
    .setIssuedAt()
    .setExpirationTime("2h")
    .sign(SECRET);

  const cookieStore = await cookies();
  cookieStore.set("auth_token", token, { httpOnly: true });

  return NextResponse.json({ message: "Test Token Set! Now go to /dashboard" });
}