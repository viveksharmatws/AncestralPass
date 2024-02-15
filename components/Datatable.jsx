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
import PlanButton from "./PlanButton";
import { Checkbox } from "@/components/ui/checkbox";

const Datatable = ({ onClick }) => {
  return (
    <div>
      <Table className="dark:text-white text-black">
        <TableHeader>
          <TableRow className="bg-[#FAFAFB] dark:bg-black/80">
        <TableHead className="border">
              <Checkbox />
            </TableHead>
            <TableHead className=" border w-[100px]">Event </TableHead>
            <TableHead className="border">People</TableHead>
            <TableHead className="border">Document</TableHead>
            <TableHead className="border">Dated</TableHead>
            <TableHead className="border">Uploaded</TableHead>         
          </TableRow>
          
        </TableHeader>
        <TableBody>
          <TableRow>
            <TableCell className=" border">
              <Checkbox />
            </TableCell>
            <TableCell className="font-medium border w-max">
              <PlanButton label="Birth" />
            </TableCell>
            <TableCell className="border">
              <PlanButton label="Maria Sassu" />
            </TableCell>
            <TableCell className="border" onClick={onClick}>Certificate</TableCell>
            <TableCell className=" border">20/10/2024</TableCell>
            <TableCell className=" border">20/1/2024</TableCell>
          </TableRow>
        </TableBody>
      </Table>
    </div>
  );
};

export default Datatable;
