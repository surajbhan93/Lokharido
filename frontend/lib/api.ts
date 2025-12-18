// API calls
export async function sendOTP(mobile: string) {
  // Mock API, replace with real backend
  return { userExists: Math.random() > 0.5 }; // Randomly simulate existing user
}

export async function verifyOTP(data: {
  mobile: string;
  otp: string;
  name?: string;
  email?: string;
  gender?: string;
}) {
  // Mock verification
  return { token: "dummy-jwt-token" };
}

export async function fetchMe() {
  const res = await fetch("/api/user/me", {
    credentials: "include",
  });
  if (!res.ok) throw new Error("Unauthorized");
  return res.json();
}

