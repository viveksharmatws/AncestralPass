"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

import { cn } from "@/lib/utils";

function SettingsidebarNav({ className, items, ...props }) {
  const pathname = usePathname();

  return (
    <nav
      className={cn(
        "flex  lg:flex-col lg:space-x-0 lg:space-y-1  ",
        className
      )}
      {...props}
    >
      {items.map((item) => (
        <Link
          key={item.route}
          href={item.route}
          className={cn(
            pathname === item.route
              ? "bg-[#F3F4F6]  font-semibold"
              : "hover:bg-transparent dark:text-white text-black  ",
            "justify-start p-3"
          )}
        >
          {item.label}
        </Link>
      ))}
    </nav>
  );
}
export default SettingsidebarNav;
