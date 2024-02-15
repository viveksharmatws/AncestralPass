"use client";
import React, { useState } from "react";

import {
  ResizableHandle,
  ResizablePanel,
  ResizablePanelGroup,
} from "@/components/ui/resizable";
import Timeline from "@/components/Timeline";
import Persondetail from "./components/Persondetail";
import Familytree from "./components/Familytree";
const Family = () => {
  const [showtree, setShowtree] = useState(true);

  const handleTimelineClick = () => {
    setShowtree(prev => !prev); // Set showtree to false when timeline is clicked
  };
  return (
    <>
      <div className="container">
        <ResizablePanelGroup direction="horizontal">
          <ResizablePanel defaultSize={100} className="border h-screen border-r-0   ">
            <div className="">
              {showtree ? (
                <Familytree />
              ) : (
                <div className="p-5">
                  <Persondetail />
                </div>
              )}
            </div>
          </ResizablePanel>
          <ResizableHandle withHandle />
          <ResizablePanel defaultSize={25} className="border dark:border-white border-[#E5E7EB]   h-screen ">
            <Timeline onClick={handleTimelineClick} />
          </ResizablePanel>
        </ResizablePanelGroup>
      </div>
    </>
  );
};

export default Family;
