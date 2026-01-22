"use client";
import { useRouter } from "next/navigation";
import MobileInput from "@/Components/Auth/MobileInput";
import Image from "next/image";
import { sendOTP } from "@/lib/api";

export default function MobilePage() {
  const router = useRouter();

  const handleSubmit = async (mobile: string) => {
    const res = await sendOTP(mobile);
    if (res.userExists !== undefined) {
      router.push(`/auth/verify?mobile=${mobile}&userExists=${res.userExists}`);
    }
  };

  return (
    <div className="min-h-screen flex flex-col md:flex-row bg-gray-50">
      
      {/* Left Banner */}
      <div className="relative w-full md:w-1/2 h-64 md:h-auto flex items-center justify-center bg-gradient-to-br from-blue-400 to-indigo-600">
        <Image
          src="/login/login.jpg"
          alt="Banner"
          fill
          className="object-cover rounded-b-2xl md:rounded-l-2xl md:rounded-b-none"
        />
        <div className="absolute inset-0  bg-opacity-20 rounded-b-2xl md:rounded-l-2xl md:rounded-b-none" />
      </div>

      {/* Right Form */}
      <div className="flex-1 flex flex-col justify-center items-center px-6 py-12">
        <div className="max-w-md w-full bg-white p-10 rounded-3xl shadow-2xl space-y-6">
          <h2 className="text-4xl font-extrabold text-gray-800 text-center">Welcome Back (Login/SignUp)</h2>
          <p className="text-sm text-gray-500 text-center">
           Join us now to be a part of Lokharido® family.
          </p>
          {/* Mobile Input */}
          <MobileInput onSubmit={handleSubmit} />
          {/* Social Login */}
          <div className="flex items-center justify-center gap-4 mt-6 cursor-pointer">
            <button className="flex-1 flex items-center justify-center gap-2 border border-gray-300 p-3 rounded-xl hover:bg-gray-100 transition shadow-sm cursor-pointer">
              <Image src="/login/google.jpg" alt="Google" width={24} height={24} />
              Google
            </button>
            <button className="flex-1 flex items-center justify-center gap-2 border border-gray-300 p-3 rounded-xl cursor-pointer hover:bg-gray-100 transition shadow-sm">
              <Image src="/login/facebook.png" alt="Facebook" width={24} height={24} />
              Facebook
            </button>
          </div>
          {/* Terms & Privacy */}
          <p className="text-xs text-gray-400 text-center mt-6">
            By creating an account or logging in, you agree with{' '}
            <span className="text-blue-500 underline cursor-pointer"> Lokharido's T&C</span> and{' '}
            <span className="text-blue-500 underline cursor-pointer">Privacy Policy</span>.
          </p>
        </div>
      </div>
    </div>
  );
}
