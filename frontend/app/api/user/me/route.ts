import { NextResponse } from "next/server";
import { getUserFromToken } from "@/lib/auth";

export async function GET() {
  try {
    const user = await getUserFromToken();

    if (!user) {
      return NextResponse.json(
        { message: "Unauthorized" },
        { status: 401 }
      );
    }

    // Yahan aap Database call kar sakte hain agar aapko fresh data chahiye:
    // const dbUser = await db.user.findUnique({ where: { id: user.id } });

    return NextResponse.json({
      success: true,
      user: {
        name: user.name,
        email: user.email,
        mobile: user.mobile,
        role: user.role
      }
    });
  } catch (error) {
    return NextResponse.json(
      { message: "Internal Server Error" },
      { status: 500 }
    );
  }
}