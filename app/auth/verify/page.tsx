"use client";
import { useSearchParams, useRouter } from "next/navigation";
import { useState } from "react";
import OTPInput from "@/Components/Auth/OTPInput";
import GenderSelect from "@/Components/Auth/GenderSelect";
import { verifyOTP } from "@/lib/api";
import Image from "next/image";

export default function VerifyPage() {
  const router = useRouter();
  const params = useSearchParams();

  const mobile = params.get("mobile") || "";
  const userExists = params.get("userExists") === "true";

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [gender, setGender] = useState("");

  const handleOTPSubmit = async (otp: string) => {
    const res = await verifyOTP({ mobile, otp, name, email, gender });
    if (res.token) {
      localStorage.setItem("token", res.token);
      router.push("/dashboard");
    }
  };

  return (
    <div className="min-h-screen flex flex-col md:flex-row bg-gray-50">

      {/* LEFT BANNER */}
      <div className="relative w-full md:w-1/2 h-64 md:h-auto bg-gradient-to-br from-indigo-500 to-blue-500">
        <Image
          src="/login/login2.jpg"
          alt="Verify Banner"
          fill
          className="object-cover rounded-b-2xl md:rounded-l-2xl md:rounded-b-none"
        />
        <div className="absolute inset-0 bg-black/30 rounded-b-2xl md:rounded-l-2xl md:rounded-b-none" />
      </div>

      {/* RIGHT FORM */}
      <div className="flex-1 flex justify-center items-center px-6 py-12">
        <div className="w-full max-w-md bg-white rounded-3xl shadow-2xl p-8 space-y-6">

          {/* Heading */}
          <div className="text-center space-y-2">
            <h2 className="text-3xl font-bold text-gray-800">
              {userExists ? "Verify OTP" : "Complete Your Profile"}
            </h2>
            <p className="text-sm text-gray-500">
              We need few more details to personalize your exprience.
            </p>
          </div>

          {/* SIGNUP FIELDS */}
          {!userExists && (
            <div className="space-y-4"> Full Name
              <input
                type="text"
                placeholder="Ex- admin Sharma"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            Email Id
              <input
                type="email"
                placeholder="yourmailid@gmail.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              <GenderSelect onSelect={setGender} />
            </div>
          )}

          {/* MOBILE NUMBER */}

          <div>
            <label className="text-xs text-gray-500">Mobile Number</label>
           
            <input
              type="tel"
              value={mobile}
              disabled
              className="w-full mt-1 border border-gray-200 bg-gray-100 rounded-lg px-4 py-3"
            />
          </div>

          {/* OTP INPUT */}
          <OTPInput onSubmit={handleOTPSubmit} />

          {/* FOOTER TEXT */}
          <p className="text-xs text-center text-gray-400 pt-2">
            Didn’t receive OTP?{" "}
            <span className="text-blue-500 cursor-pointer underline">
              Resend
            </span>
          </p>
        </div>
      </div>
    </div>
  );
}
