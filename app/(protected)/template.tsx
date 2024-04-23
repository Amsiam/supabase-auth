import { getCurrentUser } from "@/lib/auth";
import { redirect } from "next/navigation";

export default async function ProtectedTemplate({ children }) {
  const user = await getCurrentUser();

  if (!user) {
    return redirect("/login");
  }

  return <>{children}</>;
}
