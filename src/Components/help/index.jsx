import React from "react";
import { AiOutlineArrowRight } from "react-icons/ai";

const Help = () => {
  return (
    <div className="h-[50vh] bg-[#dadbf1] flex items-center justify-center flex-col">
      <div>
        <p className="text-[60px] font-semibold">How can we help?</p>
      </div>
      <div className="pt-5">
        <div>
          <div className="mt-1 relative rounded-md shadow-sm">
            <input
              type="text"
              name="account-number"
              id="account-number"
              className="focus:ring-indigo-500 px-2 h-[7vh] w-[600px] focus:border-indigo-500 block  pr-10 sm:text-sm border-gray-300 "
              placeholder="Search"
            />
            <div className="absolute inset-y-0 right-0 pr-3 flex items-center pointer-events-none">
              <AiOutlineArrowRight
                className="h-5 w-5 text-gray-400"
                aria-hidden="true"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Help;
