"use client";

import { useState } from "react";

export default function SendOtpPage() {
  const [email, setEmail] = useState("");
  const [msg, setMsg] = useState("");

  const sendOtp = async () => {
    const res = await fetch("http://localhost:5000/api/auth/send-otp", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ email })
    });

    const data = await res.json();
    setMsg(data.message);
  };

  return (
    <div className="min-h-screen flex justify-center items-center">
      <div className="bg-white p-6 rounded shadow w-96 space-y-4">
        <h2 className="text-xl font-bold">Send OTP</h2>
        <input
          placeholder="Email"
          onChange={(e) => setEmail(e.target.value)}
          className="border p-2 w-full"
        />
        <button
          onClick={sendOtp}
          className="bg-blue-600 text-white py-2 w-full rounded"
        >
          Send OTP
        </button>
        {msg && <p className="text-green-600">{msg}</p>}
      </div>
    </div>
  );
}
