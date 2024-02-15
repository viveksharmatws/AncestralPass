import Link from "next/link";
import React from "react";
import FamilyTable from "./Table";
import { Button } from "@/components/ui/button";
import PlanButton from "@/components/PlanButton";

const Persondetail = () => {
  return (
    <>
      <div className="container mx-auto">
        <div>
          <h2 className="font-bold text-3xl text-black dark:text-white ">Frank Pritchet</h2>
          <p className="text-sm text-black dark:text-white">
            Father of
            <Link href="#" className=" text-black dark:text-white underline font-semibold pl-2">
              Jay Pritchet
            </Link>
          </p>
        </div>
        <div className="py-5 max-w-[650px] ">
          <div className="flex items-center justify-between mb-3 ">
            <h2 className="text-xl tet-black dark:text-white">Documents</h2>
            <Button className="bg-slate-500 text-white rounded-none hover:bg-slate-400">Upload</Button>
          </div>
          <div className="flex gap-1 mb-10">
            <PlanButton label="All" />
            <PlanButton label="Birth" />
            <PlanButton label="Naturalization" />
            <PlanButton label="Marriage" />
            <PlanButton label="Death" />
          </div>
          <div>
            <FamilyTable />
          </div>
        </div>
        <div className="text-2xl dark:text-white text-black"> Tasks</div>
      </div>
    </>
  );
};

export default Persondetail;
