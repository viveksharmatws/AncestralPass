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
          <ResizablePanel  defaultSize={50} className="border-b-2/20    ">
            <div>
              <h2 className="font-bold text-2xl p-5 dark:text-white text-black ">Translate</h2>
            </div>
          </ResizablePanel>
          <ResizableHandle />
          <ResizablePanel  defaultSize={50} className="border border-t-0 h-screen ">
           
          </ResizablePanel>
        </ResizablePanelGroup>
      </div>
    </>
  );
};

export default page;
