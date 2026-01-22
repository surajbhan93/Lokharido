"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

export default function SignupPage() {
  const router = useRouter();

  const [form, setForm] = useState({
    name: "",
    email: "",
    password: ""
  });

  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);
    setLoading(true);

    try {
      const registerRes = await fetch(
        "http://localhost:5000/api/auth/register",
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(form)
        }
      );

      const registerText = await registerRes.text();
      if (!registerRes.ok) throw new Error(registerText);

      const otpRes = await fetch(
        "http://localhost:5000/api/auth/send-otp",
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ email: form.email })
        }
      );

      const otpData = await otpRes.json();
      if (!otpRes.ok) throw new Error(otpData.message);

      router.push(`/auth/otp?email=${form.email}`);
    } catch (err) {
      setError((err as Error).message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen grid grid-cols-1 md:grid-cols-2">

      {/* IMAGE / BRANDING SECTION */}
      <div
        className="
          order-1 md:order-1
          flex flex-col justify-center items-center
          bg-yellow-400 px-6 py-10 text-center
        "
      >
        <h1 className="text-3xl sm:text-4xl font-extrabold mb-4">
          Welcome to Lokharido®
        </h1>
        <p className="text-base sm:text-lg font-medium mb-4">
          Join us now to be a part of the <b>Lokharido® family</b>.
        </p>
        <p className="text-sm max-w-md">
          Discover trendy fashion, accessories, and everyday essentials
          at unbeatable prices. Shop smart, shop local, shop Lokharido.
        </p>
      </div>

      {/* SIGNUP FORM SECTION */}
      <div
        className="
          order-2 md:order-2
          flex items-center justify-center
          bg-gray-50 px-4 py-10
        "
      >
        <form
          onSubmit={handleSubmit}
          className="bg-white p-6 w-full max-w-md rounded-xl shadow border space-y-4"
        >
          <h2 className="text-2xl font-bold text-center">
            Create Your Account
          </h2>

          <p className="text-sm text-gray-500 text-center">
            Start shopping smarter with Lokharido
          </p>

          {error && (
            <p className="text-red-600 text-sm text-center break-words">
              {error}
            </p>
          )}

          <input
            name="name"
            placeholder="Full Name"
            required
            onChange={handleChange}
            className="w-full border p-3 rounded"
          />

          <input
            name="email"
            type="email"
            placeholder="Email"
            required
            onChange={handleChange}
            className="w-full border p-3 rounded"
          />

          <input
            name="password"
            type="password"
            placeholder="Password"
            required
            onChange={handleChange}
            className="w-full border p-3 rounded"
          />

          <button
            type="submit"
            disabled={loading}
            className="w-full bg-yellow-400 hover:bg-yellow-500 py-3 font-semibold rounded"
          >
            {loading ? "Creating account..." : "Sign Up"}
          </button>

          <p className="text-sm text-center">
            Already have an account?{" "}
            <span
              onClick={() => router.push("/auth/login")}
              className="text-blue-600 cursor-pointer font-medium"
            >
              Login
            </span>
          </p>
        </form>
      </div>
    </div>
  );
}
