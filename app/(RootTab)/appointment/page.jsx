import React from "react";
import {
  ResizableHandle,
  ResizablePanel,
  ResizablePanelGroup,
} from "@/components/ui/resizable";
import { Mail } from 'lucide-react';
import { MapPin } from 'lucide-react';
import { Smartphone } from 'lucide-react';
import { Building2 } from 'lucide-react';
const page = () => {


  
  return (
    <>
      <div className="w-full text-black dark:text-white ">
        <ResizablePanelGroup direction="horizontal">
          <ResizablePanel  defaultSize={100} className="p-5  ">
            <div>
              <h2 className="font-bold text-2xl ">Make appointment</h2>
            </div>
            <div className="grid  grid-cols-1 md:grid-cols-2 ">
              <div>
                <div className=" px-7 pt-7 pb-4">
                  <h2 className="text-[16px] font-bold">Citizenship</h2>
                  <p className="text-sm">Italian</p>
                </div>
                <div className="px-7 pb-4">
                  <h2 className="text-[16px] font-bold">Ancestor</h2>
                  <p className="text-sm">Maria Sassu ( Dad's Mom )</p>
                </div>
                <div className="px-7">
                  <h2 className="text-[16px] font-bold">Apply from</h2>
                  <p className="text-sm">Austin, Unites States</p>
                </div>
              </div>
              <div>
                <div className="px-7 pt-7">
                  <h2 className="text-[16px] font-bold">Consulate</h2>
                </div>
                <div className="flex items-center justify-start  gap-2 px-7 pb-4 pt-4">
                <Building2 size={24} />
                  <p> Housatn Italian Consulate</p>
                </div>
                <div className="flex items-center justify-start gap-2 px-7 pb-4">
                <Mail size={24} />
                  <p>Itonconst@gamfs</p>
                </div>
                <div className="flex items-center justify-start gap-2 px-7 pb-4">
                <Smartphone size={24} />
                  <p>+950 4894531228</p>
                </div>
                <div className="flex items-center justify-start gap-2 px-7 pb-4">
                <MapPin size={30}  />
                  <p>1330, Aukland, Suite 900, Houstan, TX 77057</p>
                </div> 
              </div>
            </div>
          </ResizablePanel>
          <ResizableHandle  />
          <ResizablePanel  defaultSize={100}  className="border border-t-0 h-screen "></ResizablePanel>
        </ResizablePanelGroup>
      </div>
    </>
  );
};

export default page;
