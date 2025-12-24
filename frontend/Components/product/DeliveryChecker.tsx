"use client";

import { useState } from "react";
import { MapPin, CheckCircle, XCircle, Loader2 } from "lucide-react";

export default function DeliveryChecker() {
    const [pincode, setPincode] = useState("");
    const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
    const [message, setMessage] = useState("");

    const checkDelivery = async () => {
        // 1. Basic Validation
        if (pincode.length !== 6) {
            setStatus("error");
            setMessage("Please enter a valid 6-digit pincode.");
            return;
        }

        // 2. Start Loading (UX)
        setStatus("loading");
        setMessage("");

        // 3. Simulate API Call (Wait 1.5 seconds)
        setTimeout(() => {
            // Mock Logic: Let's say pincodes starting with '2' or '1' are valid
            if (pincode.startsWith("1") || pincode.startsWith("2")) {
                setStatus("success");
                setMessage(`Delivery available to ${pincode} by 28th Dec.`);
            } else {
                setStatus("error");
                setMessage("Sorry, we do not deliver to this location yet.");
            }
        }, 1500);
    };

    return (
        <div className="bg-slate-50 p-5 rounded-xl border border-slate-200 mb-8">
            <h3 className="text-sm font-bold text-slate-700 flex items-center gap-2 mb-3">
                <MapPin className="w-4 h-4 text-lok-blue" />
                Check Delivery & Services
            </h3>

            <div className="flex gap-2 relative">
                <input
                    type="text"
                    maxLength={6}
                    placeholder="Enter Pincode"
                    value={pincode}
                    onChange={(e) => setPincode(e.target.value.replace(/\D/g, ""))} // Only numbers allowed
                    className="w-full border border-slate-300 rounded-lg px-4 py-2 text-sm focus:outline-none focus:border-lok-blue"
                />

                <button
                    onClick={checkDelivery}
                    disabled={status === "loading"}
                    className="text-sm font-bold text-lok-blue hover:text-sky-600 px-2 disabled:text-slate-400"
                >
                    {status === "loading" ? "Checking..." : "Check"}
                </button>
            </div>

            {/* FEEDBACK MESSAGES */}
            {status !== "idle" && (
                <div className={`flex items-center gap-2 mt-3 text-xs font-medium ${status === "success" ? "text-green-600" :
                    status === "error" ? "text-red-500" : "text-slate-500"
                    }`}>
                    {status === "loading" && <Loader2 className="w-4 h-4 animate-spin" />}
                    {status === "success" && <CheckCircle className="w-4 h-4" />}
                    {status === "error" && <XCircle className="w-4 h-4" />}

                    {message}
                </div>
            )}
        </div>
    );
}