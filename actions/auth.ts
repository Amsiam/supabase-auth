"use server";

import { login } from "@/lib/auth";

const signIn = async (prevState, formData: FormData) => {
  const email = formData.get("email") as string;
  const password = formData.get("password") as string;

  const error = await login({ email, password });

  if (error) {
    return {
      success: false,
      message: error?.message,
    };
  }

  return {
    success: true,
    message: "Login Successful",
  };
};

export { signIn };
