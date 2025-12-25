"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

export default function ForgotPasswordPage() {
  const router = useRouter();

  const [email, setEmail] = useState("");
  const [msg, setMsg] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);

  const submit = async () => {
    if (!email) {
      alert("Please enter your email");
      return;
    }

    setLoading(true);
    setMsg(null);

    try {
      const res = await fetch("http://localhost:5000/api/auth/forgot-password", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email })
      });

      const data = await res.json();
      setMsg(data.message);
    } catch (err) {
      alert("Something went wrong. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-yellow-50 to-white px-4">
      <div className="bg-white w-full max-w-md rounded-2xl shadow-xl border p-8 space-y-5">

        <h2 className="text-3xl font-extrabold text-center">
          Forgot Password?
        </h2>

        <p className="text-sm text-gray-500 text-center">
          Don’t worry! Enter your registered email and we’ll send you a
          password reset link.
        </p>

        <input
          type="email"
          placeholder="Enter your email address"
          onChange={(e) => setEmail(e.target.value)}
          className="w-full border border-gray-300 p-3 rounded-lg
                     focus:outline-none focus:ring-2 focus:ring-yellow-400"
        />

        <button
          onClick={submit}
          disabled={loading}
          className="w-full bg-yellow-400 hover:bg-yellow-500
                     text-black py-3 rounded-lg font-semibold
                     transition-all duration-200"
        >
          {loading ? "Sending..." : "Send Reset Link"}
        </button>

        {msg && (
          <p className="text-center text-sm text-green-600 bg-green-50 py-2 rounded">
            {msg}
          </p>
        )}

        <p
          onClick={() => router.push("/auth/login")}
          className="text-sm text-center text-blue-600 cursor-pointer hover:underline"
        >
          Back to Login
        </p>
      </div>
    </div>
  );
}
