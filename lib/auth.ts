"use server";
import { createClient } from "@/utils/supabase/server";
import { redirect } from "next/navigation";

const login = async ({ email, password }) => {
  const supabase = createClient();

  const { error } = await supabase.auth.signInWithPassword({
    email,
    password,
  });

  return error;
};

const logout = async () => {
  const supabase = createClient();
  await supabase.auth.signOut();

  return redirect("/login");
};

const getCurrentUser = async () => {
  const supabase = createClient();

  const {
    data: { user },
  } = await supabase.auth.getUser();

  return user;
};

export { getCurrentUser, login, logout };
