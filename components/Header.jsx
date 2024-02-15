import React from "react";
import { Input } from "./ui/input";
import Theme from "./Theme";

import { Bell } from "lucide-react";
import User from "./User";
import { cn } from "@/lib/utils";
import Navbar from "./Navbar";
import Searchbar from "./SearchInput";
const Header = () => {
  return (
    <div className="bg-white dark:bg-black">
      <div className=" mx-auto container">
        <div className="flex items-center justify-between p-2">
          <div>
            <h1 className="text-black/80  text-black dark:text-white font-bold text-2xl">
              AncestryPass
            </h1>
          </div>
          <div className="flex gap-1 items-center">
            <div className=" border-black/20 rounded-md text-black dark:text-white">
              <Searchbar />
            </div>
            <div className="p-0">
              <Theme />
            </div>
            <div className="p-0 dark:invert">
              <Bell />
            </div>
            <div className="px-2">
              <User />
            </div>
          </div>
        </div>
        <div>
          <Navbar />
        </div>
      </div>
    </div>
  );
};

export default Header;
