"use client";

import { useState } from "react";
import { useRouter, useSearchParams } from "next/navigation";

type LoginResponse = {
  token: string;
  role: string;
  message: string;
};

export default function LoginPage() {
  const router = useRouter();
  const params = useSearchParams();
  const redirectTo = params.get("redirect") || "/";

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);
    setLoading(true);

    try {
      const res = await fetch("http://localhost:5000/api/auth/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, password })
      });

      const data: LoginResponse = await res.json();
      if (!res.ok) throw new Error(data.message);

      localStorage.setItem("token", data.token);
      localStorage.setItem("role", data.role);

      router.replace(data.role === "admin" ? "/admin" : redirectTo);
    } catch (err) {
      setError((err as Error).message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen grid grid-cols-1 md:grid-cols-2 bg-gradient-to-br from-yellow-50 to-white">

      {/* LEFT IMAGE / BRANDING */}
      <div className="flex flex-col justify-center items-center px-6 py-12 text-center">
        <h1 className="text-4xl md:text-5xl font-extrabold mb-4">
          Welcome Back 👋
        </h1>

        <p className="text-base md:text-lg text-gray-600 max-w-md mb-6">
          Login to continue shopping with <b>Lokharido®</b> and discover
          fashion, accessories & exclusive deals curated just for you.
        </p>

        <div className="relative">
          <img
            src="/login/login.jpg"
            alt="Login"
            className="w-72 sm:w-80 md:w-[420px] rounded-2xl shadow-xl"
          />
          <div className="absolute inset-0 rounded-2xl ring-1 ring-black/5" />
        </div>
      </div>

      {/* RIGHT LOGIN FORM */}
      <div className="flex items-center justify-center px-4 py-12">
        <form
          onSubmit={handleLogin}
          className="w-full max-w-md bg-white rounded-2xl shadow-xl border p-8 space-y-5"
        >
          <h2 className="text-3xl font-bold text-center">
            Login to Your Account
          </h2>

          <p className="text-sm text-gray-500 text-center">
            Enter your credentials to continue
          </p>

          {error && (
            <p className="text-red-600 text-sm text-center bg-red-50 py-2 rounded">
              {error}
            </p>
          )}

          <input
            type="email"
            placeholder="Email address"
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full border border-gray-300 p-3 rounded-lg
                       focus:outline-none focus:ring-2 focus:ring-yellow-400"
          />

          <input
            type="password"
            placeholder="Password"
            required
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="w-full border border-gray-300 p-3 rounded-lg
                       focus:outline-none focus:ring-2 focus:ring-yellow-400"
          />

          <button
            disabled={loading}
            className="w-full bg-yellow-400 hover:bg-yellow-500
                       text-black py-3 rounded-lg font-semibold
                       transition-all duration-200"
          >
            {loading ? "Logging in..." : "Login"}
          </button>

          {/* LINKS */}
          <div className="text-sm text-center space-y-1 pt-2">
            <p
              className="text-blue-600 cursor-pointer hover:underline"
              onClick={() => router.push("/auth/forgot-password")}
            >
              Forgot Password?
            </p>

            <p>
              New here?{" "}
              <span
                onClick={() => router.push("/auth/signup")}
                className="text-blue-600 cursor-pointer font-medium hover:underline"
              >
                Create Account
              </span>
            </p>
          </div>
        </form>
      </div>
    </div>
  );
}
