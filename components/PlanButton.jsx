import React from "react";
import { PlusCircle } from "lucide-react";
import { cn } from "@/lib/utils";

const PlanButton = ({
  label,
  showPlusCircle = false,
  href,
  className,
  ...props
}) => {
  const buttonContent = (
    <div
      className={cn(
        " cursor-pointer items-center rounded-3xl py-[7px] px-[10px] flex text-center text-black  dark:text-black bg-[#F3F4F6] dark:border-[#F3F4F6] text-sm gap-2 w-max",
        className
      )}
    >
      {label && label}
    </div>
  );

  // If href is provided, render the button as an anchor tag, else render as a div
  const ButtonComponent = href ? "a" : "div";

  return (
    <ButtonComponent href={href} {...props}>
      {buttonContent}
    </ButtonComponent>
  );
};

export default PlanButton;
