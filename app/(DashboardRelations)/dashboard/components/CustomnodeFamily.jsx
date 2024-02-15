

import React, { memo } from "react";
import { Handle, Position } from "reactflow";
import { Cake } from "lucide-react";
import { Navigation } from 'lucide-react';
function CustomnodeFamily({ data }) {
  return (
    <div className="pr-10 pl-2 py-2 shadow-md  bg-white border ">
      <div className="flex items-start">
        <div className="ml-2">
          <div className=" font-bold text-lg">{data.name}</div>
          <div className="text-gray-500">
            <div className="flex items-center gap-2 text-black">
              <Cake />

              {data.date}
            </div>
          </div>
          <div className="flex items-center gap-2 text-black mt-2">
          <Navigation width={20} height={20} />
            {data.location}</div>
        </div>
      </div>

      <Handle type="target" position={Position.Top} className="w-16 bg-[#F3F4F6]" />
      <Handle type="source" position={Position.Bottom} className="w-16 bg-[#F3F4F6] " />
    </div>
  );
}

export default memo(CustomnodeFamily);
