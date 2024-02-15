"use client";
import { Input } from "@/components/ui/input";
import React, { useState } from "react";

import { Label } from "@/components/ui/label";

import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { CheckCircle2 } from "lucide-react";
import { format } from "date-fns";
import { Calendar as CalendarIcon } from "lucide-react";

import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Calendar } from "@/components/ui/calendar";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";

const Neutralization = () => {
  const [date, setDate] = useState();
  return (
    <div className="p-5 bg-[#F8F9FA] h-screen">
      <div className="flex flex-col">
        <div className="flex items-center justify-between mb-5">
          <div className="flex-col flex">
            <h1 className="text-2xl font-bold mb-1">
              Neutralization Records search{" "}
            </h1>
            <span className="text-lg underline font-light">
              Frank Pritchett
            </span>
          </div>
          <div className="bg-[#565E6D] rounded-3xl flex items-center gap-1 shrink-0">
            <span className="text-white px-2 py-1">In progress</span>
          </div>
        </div>
        <p className="text-sm">
          To determine if and when neutralization after moving to United Estates
          , we can do a USCIS Index search.
        </p>
      </div>
      <div className="mt-7">
        <h2 className="font-bold">Initiate USCIS Index Search</h2>
        <ul className="text-sm list-decimal list-inside space-y-1">
          <li>
            Start an <span className="underline">Index Search Request</span>{" "}
            through the USCIS Genealogy Program.
          </li>
          <li className="mb-1">
            Optionally, record the case ID for your records.
          </li>
          <li className="flex ">
            <Input
              placeholder="GEN-10142265"
              className="rounded-none max-w-[200px]"
            />
          </li>
          <li>Visit this page cords.</li>
        </ul>
      </div>
      <div className="mt-7">
        <h2 className="font-bold">Did the Frank Pretrich Neutralized.</h2>
        <div className="mt-2 ml-5">
          <RadioGroup defaultValue="option-one">
            <div className="flex items-center space-x-2">
              <RadioGroupItem value="option-one" id="option-one" />
              <Label htmlFor="option-one">
                Yes (USCIS found the neutralization.)
              </Label>
            </div>
            <div className="flex items-center space-x-2">
              <RadioGroupItem value="option-two" id="option-two" />
              <Label htmlFor="option-two">
                NO (USCIS no neutralization record found.)
              </Label>
            </div>
          </RadioGroup>
        </div>
      </div>
      <div className="mt-7">
        <h2 className="font-bold">Did the Frank Pretrich Neutralized.</h2>
        <div className="mt-2 ml-5">
          <Popover>
            <PopoverTrigger asChild>
              <Button
                variant={"outline"}
                className={cn(
                  "w-[280px] justify-start text-left font-normal",
                  !date && "text-muted-foreground"
                )}
              >
                <CalendarIcon className="mr-2 h-4 w-4" />
                {date ? format(date, "PPP") : <span>Pick a date</span>}
              </Button>
            </PopoverTrigger>
            <PopoverContent className="w-auto p-0 bg-white">
              <Calendar
                mode="single"
                selected={date}
                onSelect={setDate}
                initialFocus
              />
            </PopoverContent>
          </Popover>
        </div>
      </div>
      <div className="mt-5">
        <div className="flex gap-2 mt-2 items-start">
          
          <CheckCircle2 />
          <h2 className="font-bold">Did the Frank Pretrich Neutralized.</h2>
        </div>

          <p className="mt-2">
            Because frank was still an Italian citizen when you were born, you
            are able to claim italian citizenship through ancestery.
          </p>
      </div>
    </div>
  );
};

export default Neutralization;
