"use client";
import { useState } from "react";

interface GenderSelectProps {
  onSelect: (gender: string) => void;
}

export default function GenderSelect({ onSelect }: GenderSelectProps) {
  const [gender, setGender] = useState("");

  return (
    <select
      value={gender}
      onChange={(e) => { setGender(e.target.value); onSelect(e.target.value); }}
      className="border border-gray-300 rounded-md p-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
    >
      <option value="">Select Gender</option>
      <option value="male">Male</option>
      <option value="female">Female</option>
      <option value="other">Other</option>
    </select>
  );
}
