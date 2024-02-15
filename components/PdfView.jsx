'use client'
import React from "react";
import { CopyPlus } from "lucide-react";
import { Worker, Viewer } from "@react-pdf-viewer/core";
import "@react-pdf-viewer/core/lib/styles/index.css";
import { defaultLayoutPlugin } from '@react-pdf-viewer/default-layout';

// Import styles
import '@react-pdf-viewer/default-layout/lib/styles/index.css';

const PdfView = () => {
const plugin = defaultLayoutPlugin()
  return (
    <>
      <div className="h-screen relative bg-[#DEE1E6] ">
        <div className="absolute inset-x-0 top-0 bg-[#F8F9FA] flex items-center justify-center gap-2 ">
          <CopyPlus />
          <span className="py-2">Hardcopy is with you.</span>
        </div>
        <div style={{ width: "100%", height: "800px", overflow: "auto" }}>
          <Worker workerUrl="https://unpkg.com/pdfjs-dist@3.4.120/build/pdf.worker.min.js">
            <Viewer 
            plugins={[plugin]}
            fileUrl="/syllabus.pdf" />
          </Worker> 
        </div>
        {/* <div className="min-h-[250px]  absolute inset-x-0 bottom-0 bg-white ">
          <div className="flex"> plugins</div>
          <div className="grid grid-cols-2 ">
            <div></div>
          </div>
        </div> */}
      </div>
    </>
  );
};

export default PdfView;
