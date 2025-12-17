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
