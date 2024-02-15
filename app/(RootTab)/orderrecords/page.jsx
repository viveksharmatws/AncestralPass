"use client";
import React, { useState } from "react";
import {
  ResizableHandle,
  ResizablePanel,
  ResizablePanelGroup,
} from "@/components/ui/resizable";
import Neutralization from "./components/Neutralization";
import Birth from "./components/Birth";
import FamilyRecordtable from "./components/FamilyRecordtable";
import FamilyTreeOrderRec from "./components/FamilyTreeOrderRec";

const Order = () => {
  const [activeComponent, setActiveComponent] = useState("FamilyTree");

  const handleComponentChange = (componentName) => {
    setActiveComponent(componentName);
  };
  return (
    <>

      <ResizablePanelGroup direction="horizontal">
        <ResizablePanel>
          <div>
            <h2 className="font-bold text-2xl p-5 pb-2 dark:text-white text-black ">
              Order Records
            </h2>
          </div>
          <div className="p-3">
            <FamilyRecordtable handleButtonClick={handleComponentChange} />
          </div>
        </ResizablePanel>
        <ResizableHandle />
        <ResizablePanel>
            {activeComponent === "FamilyTree" && <FamilyTreeOrderRec />}
            {activeComponent === "Neutralization" && <Neutralization />}
            {activeComponent === "Birth" && <Birth />}
        </ResizablePanel>
      </ResizablePanelGroup>
    </>
  );
};

export default Order;
