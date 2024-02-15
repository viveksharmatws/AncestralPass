import React from "react";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import PlanButton from "@/components/PlanButton";
import { cn } from "@/lib/utils";

const DashboardTable = () => {
  return (
    <div className="">
      <Table className="dark:text-white text-black">
        <TableHeader>
          <TableRow className="bg-[#FAFAFB] dark:bg-black/80">
            <TableHead className=" border w-[100px]">Citizenship </TableHead>
            <TableHead className="border">Ancestor</TableHead>
            <TableHead className="border">Apply from</TableHead>
            <TableHead className="border">Timeframe</TableHead>
            <TableHead className="border">Status </TableHead>
            <TableHead className="border"> </TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          <TableRow>
            <TableCell className="font-medium border w-max">Irish</TableCell>
            <TableCell className="border">Flona Galagher</TableCell>
            <TableCell className="border">Austin , TX</TableCell>
            <TableCell className=" border">
              <div className="flex flex-col justify-between">
                <span>3 months</span>
                <span className="text-slate-400">From today</span>
              </div>
            </TableCell>
            <TableCell className=" border">
              <PlanButton label="submitted" icon />
            </TableCell>
            <TableCell className=" border">
              <PlanButton edit className={cn("bg-transparent")} />
            </TableCell>
          </TableRow>
          <TableRow>
            <TableCell className="font-medium border w-max">Irish</TableCell>
            <TableCell className="border">Flona Galagher</TableCell>
            <TableCell className="border">Austin , TX</TableCell>
            <TableCell className=" border">
              <div className="flex flex-col justify-between">
                <span>3 months</span>
                <span className="text-slate-400">From today</span>
              </div>
            </TableCell>
            <TableCell className=" border">
              <PlanButton label="Not started " icon />
            </TableCell>
            <TableCell className=" border">
              <PlanButton edit className={cn("bg-transparent")} />
            </TableCell>
          </TableRow>
          <TableRow>
            <TableCell className="font-medium border w-max">Irish</TableCell>
            <TableCell className="border">Florids Galagher</TableCell>
            <TableCell className="border">Italy</TableCell>
            <TableCell className=" border">
              <div className="flex flex-col justify-between">
                <span>3 months</span>
                <span className="text-slate-400">From today</span>
              </div>
            </TableCell>
            <TableCell className=" border">
              <PlanButton label="In progress" icon />
            </TableCell>
            <TableCell className=" border">
              <PlanButton edit className={cn("bg-transparent")} />
            </TableCell>
          </TableRow>
        </TableBody>
      </Table>
    </div>
  );
};

export default DashboardTable;
