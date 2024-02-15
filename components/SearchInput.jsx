"use client";
import React from "react";
import { Routes, functions } from "@/constants";
import { themes } from "@/constants";
import { Help } from "@/constants";
import { Search } from 'lucide-react';
import { useRouter } from "next/navigation";
import {
  CircleIcon,
  FileIcon,
  LaptopIcon,
  MoonIcon,
  SunIcon,
} from "@radix-ui/react-icons";
import { useTheme } from "@/context/ThemeProvider";

import { cn } from "@/lib/utils";
import {
  CommandDialog,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
  CommandSeparator,
} from "@/components/ui/command";

import { Button } from "./ui/button";
import Image from "next/image";

function Searchbar({ ...props }) {
  const router = useRouter();
  const [open, setOpen] = React.useState(false);
  const { setMode } = useTheme();

  React.useEffect(() => {
    const down = (e) => {
      if ((e.key === "k" && (e.metaKey || e.ctrlKey)) || e.key === "/") {
        if (
          (e.target instanceof HTMLElement && e.target.isContentEditable) ||
          e.target instanceof HTMLInputElement ||
          e.target instanceof HTMLTextAreaElement ||
          e.target instanceof HTMLSelectElement
        ) {
          return;
        }

        e.preventDefault();
        setOpen((open) => !open);
      }
    };

    document.addEventListener("keydown", down);
    return () => document.removeEventListener("keydown", down);
  }, []);

  const runCommand = React.useCallback((command) => {
    setOpen(false);
    command();
  }, []);

  return (
    <>
      <Button
        className={cn(
          "border relative h-8 w-full justify-start  text-sm font-normal text-muted-foreground shadow-none sm:pr-12 md:w-40 lg:w-64 bg-gray-300/30 dark:text-white rounded-none"
        )}
        onClick={() => setOpen(true)}
        {...props}
      >
          <Search width={15} height={15} className="" />
        <span className="hidden lg:inline-flex pl-1 ">Search ...</span>
        <kbd className="pointer-events-none absolute right-[0.3rem] top-[0.3rem] hidden h-5 select-none items-center gap-1 rounded border bg-muted px-1.5 font-mono text-[10px] font-medium opacity-100 sm:flex">
          <span className="text-xs">⌘</span>K
        </kbd>
      </Button>
      <CommandDialog open={open} onOpenChange={setOpen}>
        <CommandInput placeholder="Type a command or search..." />
        <CommandList>
          <CommandEmpty>No results found.</CommandEmpty>
          <CommandGroup heading="Navigation">
            {Routes.map((navItem) => (
              <CommandItem
                key={navItem.label}
                value={navItem.label}
                onSelect={() => {
                  runCommand(() => router.push(navItem.route));
                }}
              >
                <FileIcon className="mr-2 h-4 w-4" />
                {navItem.label}
              </CommandItem>
            ))}
          </CommandGroup>
          <CommandSeparator />

          <CommandGroup heading="Help">
            {Help.map((navItem) => (
              <CommandItem
                key={navItem.label}
                value={navItem.label}
                onSelect={() => {
                  runCommand(() => router.push(navItem.route));
                }}
              >{navItem.label}</CommandItem>
            ))}
          </CommandGroup>
          <CommandGroup heading="Functions" className={cn("text-3xl")}>
            {functions.map((navItem) => (
              <CommandItem
                key={navItem.label}
                value={navItem.label}
                onSelect={() => {
                  runCommand(() => router.push(navItem.route));
                }}
              >{navItem.label}</CommandItem>
            ))}
          </CommandGroup>

          <CommandSeparator />
          <CommandGroup heading="Theme">
            {themes.map((item) => (
              <CommandItem
              key={item.value}
                onSelect={() =>
                  runCommand(() =>
                    setMode(() => {
                      setMode(item.value);

                      if (item.value !== "system") {
                        localStorage.theme = item.value;
                      } else {
                        localStorage.removeItem("theme");
                      }
                    })
                  )
                }
              >
                <Image src={`${item.icon}`} className="mr-2 h-4 w-4" width={16} height={16} />
                {item.label}
              </CommandItem>
            ))}
          </CommandGroup>
        </CommandList>
      </CommandDialog>
    </>
  );
}

export default Searchbar;
