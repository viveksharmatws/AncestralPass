import React from "react";

import { SideBarLinks_settingtab } from "@/constants";
import SidebarNav from "@/components/Settingsidebar-nav";
export const metadata = {
  title: "Settings",
  description: "Settings for the ancestor pass ",
};

const Settings = ({children}) => { 
  return (
    <>
      <div>
        <div className=" mx-auto container">
          <div className="hidden space-y-6 pt-5 px-2 pb-16 md:block">
            <div className="space-y-0.5">
              <h2 className="text-2xl font-bold tracking-tight dark:text-white text-black">Settings</h2>        
            </div>
            <div className="flex flex-col space-y-8 lg:flex-row lg:space-x-12 lg:space-y-0">
              <aside className=" lg:max-w-[250px]  w-full border-gray-100/80 border ">
                <SidebarNav items={SideBarLinks_settingtab} />
              </aside>
              <div className="flex-1 lg:max-w-2xl h-screen  ">{children}</div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Settings;
