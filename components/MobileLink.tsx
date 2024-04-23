"use client";
import { cn } from "@/lib/utils";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function MobileLink({ children, ...props }) {
  const pathname = usePathname();

  let className = "";

  if (pathname.includes(props.href)) {
    className = "bg-muted text-foreground hover:text-foreground";
  }

  return (
    <Link
      {...props}
      className={cn(
        "mx-[-0.65rem] mt-1 flex items-center gap-4 rounded-xl px-3 py-2 text-muted-foreground hover:text-foreground",
        className
      )}
    >
      {children}
    </Link>
  );
}
