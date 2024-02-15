import React from "react";
import {
  ResizableHandle,
  ResizablePanel,
  ResizablePanelGroup,
} from "@/components/ui/resizable";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { cn } from "@/lib/utils";
import FamilytreeGlobal from "@/components/FamilyTreeGlobal";

const page = () => {
  return (
    <>
      <div className="w-full text-black dark:text-white ">
        <ResizablePanelGroup direction="horizontal">
          <ResizablePanel  defaultSize={50} className="border-b   ">
            <div className="border-b">
              <h2 className="font-bold text-xl p-4 ">Plan Overview</h2>
            </div>
            <div className="border-b ">
              <div className="flex gap-0.5 items-center">
                <div className="">
                  <h2 className="font-bold text-xl p-5 ">
                    Verify Eligibility
                  </h2>
                </div>
                <div className="mt-1">
                  <svg
                    width="25"
                    height="25"
                    viewBox="0 0 15 15"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M8.4449 0.608765C8.0183 -0.107015 6.9817 -0.107015 6.55509 0.608766L0.161178 11.3368C-0.275824 12.07 0.252503 13 1.10608 13H13.8939C14.7475 13 15.2758 12.07 14.8388 11.3368L8.4449 0.608765ZM7.4141 1.12073C7.45288 1.05566 7.54712 1.05566 7.5859 1.12073L13.9798 11.8488C14.0196 11.9154 13.9715 12 13.8939 12H1.10608C1.02849 12 0.980454 11.9154 1.02018 11.8488L7.4141 1.12073ZM6.8269 4.48611C6.81221 4.10423 7.11783 3.78663 7.5 3.78663C7.88217 3.78663 8.18778 4.10423 8.1731 4.48612L8.01921 8.48701C8.00848 8.766 7.7792 8.98664 7.5 8.98664C7.2208 8.98664 6.99151 8.766 6.98078 8.48701L6.8269 4.48611ZM8.24989 10.476C8.24989 10.8902 7.9141 11.226 7.49989 11.226C7.08567 11.226 6.74989 10.8902 6.74989 10.476C6.74989 10.0618 7.08567 9.72599 7.49989 9.72599C7.9141 9.72599 8.24989 10.0618 8.24989 10.476Z"
                      fill="currentColor"
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                    ></path>
                  </svg>
                </div>
              </div>
              <div className="px-5 pb-5">
                <p className="leading-normal">
                  To confirm that you are eligible for Italian Citizenship
                  though your grandmother Maria Sassu, we need to make sure that
                  she was still Italian when she gave birth to your father ,
                  ElSalvador.
                </p>

                <div className="flex items-center justify-center mx-auto container">
                  <Button
                    asChild
                    variant="secondary"
                    className={cn(
                      "bg-gray-500 text-white hover:bg-gray-950 text-sm mt-5"
                    )}
                  >
                    <Link href="/orderrecords">Confirm Eligibiliy</Link>
                  </Button>
                </div>
              </div>
            </div>
          </ResizablePanel>
          <ResizableHandle withHandle  className="bg-white"/>
          <ResizablePanel  defaultSize={50} className="border border-t-0 h-screen  text-black dark:text-bg-[#F8F9FA]">
          <FamilytreeGlobal />
          </ResizablePanel>
        </ResizablePanelGroup>
      </div>
    </>
  );
};

export default page;
