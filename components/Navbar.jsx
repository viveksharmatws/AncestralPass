'use client'
import React from 'react'
import { usePathname } from "next/navigation";
import { Routes } from '@/constants/index.js';
import Link from 'next/link';
const Navbar = () => {
    const pathname = usePathname();
  return (
    <div>
        <div className="flex  gap-2 border-b">
        {Routes.map((item) => {
          const isActive =
            (pathname.includes(item.route) && item.route.length > 1) ||
            pathname === item.route;

          if (item.route === "/profile") {
            if (userId) {
              item.route = `${item.route}/${userId}`;
            } else {
              return null;
            }
          }

          return (
            <Link
              href={item.route}
              key={item.label}
              className={`${
                isActive
                  ? " border-b-4 border-black dark:border-white "
                  : "mb-1"
              }  flex items-center justify-start gap-4 bg-transparent p-2`}
            >
          
              <p
                className={`${
                  isActive ? "base-bold" : "base-medium"
                } dark:text-white text-black  `}
              >
                {item.label}
              </p>
            </Link>
          );
        })}
      </div>
    </div>
  )
}

export default Navbar