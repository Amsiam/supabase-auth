"use client";
import { cn } from "@/lib/utils";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function NavLink({ children, ...props }) {
  const pathname = usePathname();

  let className = "";

  if (pathname.includes(props.href)) {
    className = "bg-muted text-primary hover:text-primary";
  }
  return (
    <Link
      className={cn(
        "flex items-center gap-3 rounded-lg px-3 py-2 mb-1 text-muted-foreground transition-all hover:text-primary",
        className
      )}
      {...props}
    >
      {children}
    </Link>
  );
}
