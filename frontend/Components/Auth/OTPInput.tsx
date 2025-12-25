"use client";
import { useState } from "react";

interface OTPInputProps {
  length?: number;
  onSubmit: (otp: string) => void;
}

export default function OTPInput({ length = 4, onSubmit }: OTPInputProps) {
  const [otp, setOtp] = useState("");

  return (
    <div className="flex flex-col gap-4">
      <input
        type="text"
        placeholder={`Enter +91 ${length}-digit OTP`}
        value={otp}
        onChange={(e) => setOtp(e.target.value)}
        maxLength={length}
        className="border border-gray-300 rounded-md p-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
      />
      <button
        onClick={() => onSubmit(otp)}
        className="bg-green-500 text-white p-3 rounded-md hover:bg-green-600 cursor-pointer"
      >
        Verify
      </button>
    </div>
  );
}
