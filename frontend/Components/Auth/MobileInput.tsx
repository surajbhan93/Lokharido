"use client";
import { useState } from "react";

interface MobileInputProps {
  onSubmit: (mobile: string) => void;
}

export default function MobileInput({ onSubmit }: MobileInputProps) {
  const [mobile, setMobile] = useState("");

  const handleContinue = () => {
    if (mobile.length !== 10) {
      alert("Please enter a valid 10-digit mobile number");
      return;
    }

    // Send +91 prefixed number to backend
    onSubmit(`+91${mobile}`);
  };

  return (
    <div className="space-y-4">
      <label className="text-sm font-medium text-gray-700">
        Mobile Number
      </label>

      <div className="flex items-center border border-gray-300 rounded-xl overflow-hidden focus-within:ring-2 focus-within:ring-blue-500">
        
        {/* Country Code */}
        <div className="flex items-center gap-2 px-4 bg-gray-100 text-gray-700 text-sm font-medium">
          🇮🇳 +91
        </div>

        {/* Mobile Input */}
        <input
          type="tel"
          inputMode="numeric"
          placeholder="Enter 10-digit number"
          value={mobile}
          maxLength={10}
          onChange={(e) =>
            setMobile(e.target.value.replace(/\D/g, ""))
          }
          className="flex-1 px-4 py-3 focus:outline-none"
        />
      </div>

      {/* Continue Button */}
      <button
  type="button"
  onClick={handleContinue}
  className="w-full bg-blue-600 text-white py-3 rounded-xl font-semibold hover:bg-blue-700 transition cursor-pointer"
>
  Continue
</button>

    </div>
  );
}
