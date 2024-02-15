import React from "react";
import {
  ResizableHandle,
  ResizablePanel,
  ResizablePanelGroup,
} from "@/components/ui/resizable";

const page = () => {
  return (
    <>
      <div className="w-full ">
        <ResizablePanelGroup direction="horizontal">
          <ResizablePanel  defaultSize={100} className="border-b-2   ">
            <div>
              <h2 className="font-bold text-2xl p-5 dark:text-white text-black ">Appostile</h2>
            </div>
          </ResizablePanel>
          <ResizableHandle />
          <ResizablePanel  defaultSize={100} className="border border-t-0 h-screen ">

          </ResizablePanel>
        </ResizablePanelGroup>
      </div>
    </>
  );
};

export default page;
