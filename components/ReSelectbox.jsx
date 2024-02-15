import React from "react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

import { cn } from "@/lib/utils";

const ReSelectbox = ({ data }) => {
  const filterKey = Object.keys(data)[0];
  const Array = data[filterKey];
  return (
    <>
      <Select>
        <SelectTrigger className={cn("w-full ", "w-[300px] border-gray-200  text-black dark:text-white ")}>
          <SelectValue placeholder={filterKey} />
        </SelectTrigger>
        <SelectContent className={cn("w-full ", "w-[300px] bg-white ")}>
          {Array.map((item) => (
            <SelectItem key={item.value} value={item.value}>{item.name}</SelectItem>
          ))}
        </SelectContent>
      </Select>
    </>
  );
};

export default ReSelectbox;
