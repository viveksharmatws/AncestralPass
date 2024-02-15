"use client";
import React from "react";
import { usePathname } from "next/navigation";
import { RelationDash } from "@/constants/index.js";
import { cn } from "@/lib/utils";
import PlanButton from "./PlanButton";

const RelationDashBar = () => {
  const pathname = usePathname();
  return (
    <div>
      <div className=" dark:border-gray-400/20 py-3 container">
        <div className="mx-auto container ">
          <div className="flex gap-2 ">
            {RelationDash.map((item, index) => (
              <PlanButton
                key={index}
                href={item.route}
                label={item.label}
                className={cn(
                  pathname === item.route
                    ? "bg-[#565E6D] dark:text-white text-white "
                    : "",
                  "justify-start"
                )}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default RelationDashBar;
