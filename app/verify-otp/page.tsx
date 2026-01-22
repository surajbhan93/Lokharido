"use client";

import { useState } from "react";
import { useRouter, useSearchParams } from "next/navigation";

export default function VerifyOtpPage() {
  const router = useRouter();
  const params = useSearchParams();
  const email = params.get("email");

  const [otp, setOtp] = useState("");
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);

  const verifyOtp = async () => {
    setError(null);
    setLoading(true);

    try {
      const res = await fetch(
        "http://localhost:5000/api/auth/verify-otp",
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ email, otp })
        }
      );

      const data = await res.json();
      if (!res.ok) throw new Error(data.message);

      // ✅ OTP verified → Dashboard
      router.push("/dashboard");

    } catch (err) {
      setError((err as Error).message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50">
      <div className="bg-white p-6 w-full max-w-md rounded-xl shadow border space-y-4">
        <h1 className="text-2xl font-bold text-center">
          Verify Email
        </h1>

        <p className="text-sm text-gray-600 text-center">
          OTP sent to <b>{email}</b>
        </p>

        {error && (
          <p className="text-red-600 text-sm text-center">{error}</p>
        )}

        <input
          placeholder="Enter 6-digit OTP"
          value={otp}
          onChange={(e) => setOtp(e.target.value)}
          className="w-full border p-2 rounded"
        />

        <button
          onClick={verifyOtp}
          disabled={loading}
          className="w-full bg-green-600 hover:bg-green-700 text-white py-2 rounded"
        >
          {loading ? "Verifying..." : "Verify OTP"}
        </button>
      </div>
    </div>
  );
}
