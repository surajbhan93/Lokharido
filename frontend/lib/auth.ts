import { jwtVerify } from "jose";
import { cookies } from "next/headers";

const SECRET = new TextEncoder().encode(
  process.env.JWT_SECRET || "your-secret-key"
);

export async function getUserFromToken() {
  try {
    // Next.js 15 mein cookies() ko await karna zaroori hai
    const cookieStore = await cookies(); 
    const token = cookieStore.get("auth_token")?.value;

    if (!token) {
      console.log("❌ No token found in cookies");
      return null;
    }

    const { payload } = await jwtVerify(token, SECRET);
    return payload;
  } catch (error) {
    console.error("❌ JWT Verification failed:", error);
    return null;
  }
}