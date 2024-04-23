import { logout } from "@/lib/auth";

export default function LogoutButton() {
  return (
    <form action={logout}>
      <button>Logout</button>
    </form>
  );
}
