'use client'
import React, { useState } from "react";
import { Filter } from "lucide-react";
import PlanButton from "@/components/PlanButton";
import Datatable from "@/components/Datatable";

import {
  ResizableHandle,
  ResizablePanel,
  ResizablePanelGroup,
} from "@/components/ui/resizable";
import PdfView from "@/components/PdfView";

const Documents = () => {
  const [showcertificate, setcertificate] = useState(false);

  const handleshowcertificate = () => {
    setcertificate((prev) => !prev); // Set showtree to false when timeline is clicked
  };
  return (
    <>
      <div className="  container">
        <ResizablePanelGroup direction="horizontal">
          <ResizablePanel defaultSize={50}>
            <div className="border border-r-0 h-screen px-2">
              <div className=" mx-auto container">
                <h2 className="font-bold text-2xl pt-5 dark:text-white text-black ">
                  Documents
                </h2>
                <div className="flex items-center gap-3 mt-5">
                  <p className="dark:text-white text-black text-xl">Events</p>
                  <Filter className="text-black dark:text-white" />
                </div>
                <div className="flex gap-2 mt-5">
                  <span className="text-xl dark:text-white text-black">
                    People
                  </span>
                  <PlanButton label="Elfonsion" />
                  <PlanButton label="Elfonsion" />
                  <PlanButton label="Elfonsion" />
                </div>
                <div className=" mt-5 ">
                  <Datatable onClick={handleshowcertificate} />
                </div>
              </div>
            </div>
          </ResizablePanel>
          <ResizableHandle withHandle />

          <ResizablePanel defaultSize={50} className="border  h-screen ">
            {showcertificate && <PdfView />}
          </ResizablePanel>
        </ResizablePanelGroup>
      </div>
    </>
  );
};

export default Documents;
