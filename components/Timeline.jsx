import React from "react";

const Timeline = ({ onClick }) => {
  return (
    <>
      <div className="p-5">
        <h2 className="text-2xl text-black dark:text-white font-bold cursor-pointer" onClick={onClick} >Frank Pritchet </h2>
      </div>
      <div className="flex flex-col px-2 pt-3">
        <div className=" border-l-2 relative   ms-5 p-2 pl-5 pt-0">
          <h1 className="text-black dark:text-white font-bold inline-block align-top">Born</h1>
          <p className="text-black dark:text-white">20 Aug , 2024</p>
          <p className="text-black dark:text-white">Montagio ,Sardina , Italy</p>
          <div className="w-3 h-3 dark:bg-white bg-black  rounded-full absolute top-1.5 -left-2"></div>
          <div className="w-3 h-3 bg-white dark:bg-black  rounded-full absolute -top-[6px] -left-2"></div>
        </div>
        <div className=" border-l-2 relative   ms-5 p-2 pl-5 pt-0">
          <h1 className="text-black dark:text-white font-bold inline-block align-top ">Neutralization</h1>
          <p className="text-black dark:text-white">20 Aug , 2024</p>
          <p className="text-black dark:text-white">Montagio ,Sardina , Italy</p>
          <div className="w-3 h-3 dark:bg-white bg-black  rounded-full absolute top-1.5 -left-2"></div>
        </div>

        <div className=" border-l-2 relative   ms-5 p-2 pl-5 pt-0">
          <h1 className="text-black dark:text-white font-bold inline-block align-top">Married to Alfesio Conti</h1>
          <p className="text-black dark:text-white">20 Aug , 2024</p>
          <p className="text-black dark:text-white">Montagio ,Sardina , Italy</p>
          <div className="w-3 h-3 dark:bg-white bg-black  rounded-full absolute top-1.5 -left-2"></div>
        </div>
        <div className=" border-l-2 relative   ms-5 p-2 pl-5 pt-0">
          <h1 className="text-black dark:text-white font-bold inline-block align-top">Emmigrated to America</h1>
          <p className="text-black dark:text-white">20 Aug , 2024</p>
          <p className="text-black dark:text-white">Montagio ,Sardina , Italy</p>
          <div className="w-3 h-3 dark:bg-white bg-black  rounded-full absolute top-1.5 -left-2"></div>
        </div>
      </div>
    </>
  );
};

export default Timeline;
