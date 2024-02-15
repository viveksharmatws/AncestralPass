import ReSelectbox from "@/components/ReSelectbox";
import React from "react";
import { LocationFilters } from "@/constants/filter";
import { MaritalFilters } from "@/constants/filter";
import { LanguageFilters } from "@/constants/filter";

const page = () => {
  return (
    <>
      <div className=" mx-auto container">
        <div className="flex flex-col space-y-5">
          <div className="p-4 border pb-14 ">
            <h2 className="text-xl font-bold text-black dark:text-white">Current City</h2>
            <p className="text-black dark:text-white">
              Used to define the appropriate government officers to work with,
              such as consulates and embassies.
            </p>
            <div className="max-w-[200px] w-full mt-5">
              <ReSelectbox data={LocationFilters} />
            </div>
          </div>

          <div className="p-4 border pb-14 ">
            <h2 className="text-xl font-bold text-black dark:text-white">Marital Status</h2>
            <p className="text-black dark:text-white">
              Used to determine if marriage certificates  are required  for citizenship  plans.
            </p>
            <div className="max-w-[200px] w-full mt-5">
              <ReSelectbox data={MaritalFilters} />
            </div>
          </div>
          <div className="p-4 border pb-14 bg-gray-50 dark:bg-black ">
            <h2 className="text-xl font-bold text-black dark:text-white">Preffered Language</h2>
        
            <div className="max-w-[200px] w-full mt-5">
              <ReSelectbox data={LanguageFilters} />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default page;
