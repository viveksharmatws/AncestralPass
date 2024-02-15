import React from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Checkbox } from "@/components/ui/checkbox";
import PlanButton from "@/components/PlanButton";

const FamilyTable = () => {
  return (
    <Table className="text-black dark:text-white">
      <TableHeader>
        <TableRow className="dark:bg-black bg-[#FAFAFB]">
          <TableHead className="border">
            <Checkbox className=" mr-4" />
          </TableHead>
          <TableHead className=" border w-[100px]">Event </TableHead>
          <TableHead className="border">Document</TableHead>
          <TableHead className="border">Uploaded</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        <TableRow className="hover:bg-gray-100 dark:hover:bg-black ">
          <TableCell className=" border">
            <Checkbox className=" mr-4" />
          </TableCell>
          <TableCell className="font-medium border w-max">
            <PlanButton label="Birth" />
          </TableCell>

          <TableCell className="border"> Apostille Certificate </TableCell>
          <TableCell className=" border">20/1/2024</TableCell>
        </TableRow>
        <TableRow className="hover:bg-gray-100 dark:hover:bg-black">
          <TableCell className=" border">
            <Checkbox className=" mr-4" />
          </TableCell>
          <TableCell className="font-medium border w-max">
            <PlanButton label="Death" />
          </TableCell>

          <TableCell className="border"> Translation Certificate</TableCell>
          <TableCell className=" border">20/1/2024</TableCell>
        </TableRow>
        <TableRow className="hover:bg-gray-100 dark:hover:bg-black">
          <TableCell className=" border">
            <Checkbox className=" mr-4" />
          </TableCell>
          <TableCell className="font-medium border w-max">
            <PlanButton label="Marriage" />
          </TableCell>

          <TableCell className="border">License Certificate</TableCell>
          <TableCell className=" border">20/1/2024</TableCell>
        </TableRow>
        <TableRow className="hover:bg-gray-100 dark:hover:bg-black">
          <TableCell className=" border">
            <Checkbox className=" mr-4" />
          </TableCell>
          <TableCell className="font-medium border w-max">
            <PlanButton label="Naturalization" />
          </TableCell>

          <TableCell className="border"> Translation Certificate </TableCell>
          <TableCell className=" border">20/1/2024</TableCell>
        </TableRow>
      </TableBody>
    </Table>
  );
};

export default FamilyTable;
