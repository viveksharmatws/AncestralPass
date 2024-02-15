import { Button } from "@/components/ui/button";
import React from "react";
import { ArrowRightCircle } from "lucide-react";
import { Timer } from "lucide-react";
import {
  ResizableHandle,
  ResizablePanel,
  ResizablePanelGroup,
} from "@/components/ui/resizable";
import { AlertCircle } from "lucide-react";
import HorizontalFamilytree from "./components/HorizontalFamilytree";

const page = () => {
  return (
    <>
      <div >
        <ResizablePanelGroup direction="horizontal">
          <ResizablePanel defaultSize={100} className="w-full">
            <div className="">
              <div className="p-1 border">
                <h2 className="text-2xl font-semibold my-5 text-black dark:text-white">
                  Next Page
                </h2>
                <div className="flex items-center justify-between pt-2 px-1">
                  <div>
                    <Button className="bg-[#565E6D] hover:bg-[#707f9c] text-white">
                      Offer your birth certificate
                      <ArrowRightCircle className="pl-2" />
                    </Button>
                  </div>
                  <div>
                    <div className="bg-[#F3F4F6]  rounded-3xl p-2 flex">
                      <Timer className="mr-2" />
                      15 Minutes
                    </div>
                  </div>
                </div>
                <div className="py-4 px-1 text-black dark:text-white ">
                  <p>
                    To claim the citizenship throught grandfather Antonio
                    Andolio ,you will need a certied carry of you birth
                    certificate.We will guide you through the process of
                    ordering online.
                  </p>
                </div>
              </div>
            </div>
            <div className="p-1">
              <h2 className="text-2xl mt-3 font-bold">Citizenship Plans</h2>

              <div>
                <Button className="p-2 border border-slate-900/80 bg-dark dark:bg-white">
                  New Plan
                </Button>
              </div>
            </div>
          </ResizablePanel>
          <ResizableHandle withHandle className="dark:invert" />
          <ResizablePanel defaultSize={100} className="border h-screen w-full">
            <div className="flex flex-col">
              <div className="bg-[#F8F9FA] py-2 flex items-center justify-center">
                <AlertCircle className="mr-2" />
                <h2 className="text-sm text-black"> Display birth names</h2>
              </div>
              <div>
                <HorizontalFamilytree />
              </div>
            </div>
          </ResizablePanel>
        </ResizablePanelGroup>
      </div>
    </>
  );
};

export default page;
