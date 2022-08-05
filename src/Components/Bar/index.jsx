import React from "react";
import { BiCheckbox } from "react-icons/bi";

const Abstract = () => {
  return (
    <div className="h-[9vh] bg-[black] w-[100%]  text-[white] flex items-center justify-between px-10  ">
      <div className="w-[20%]  h-[100%] flex items-center justify-around  ">
        <div className="flex items-center">
          <div>
            {" "}
            <span>
              <BiCheckbox size={30} />
            </span>{" "}
          </div>
          <div>
            {" "}
            <p>Abstract</p>{" "}
          </div>
        </div>
        <div className="mr-10  border-l-2	pr-10 pl-2 border-[white] ">
          <span> Help Center </span>
        </div>
      </div>
      <div>
        <button className="w-[180px] h-[5vh] rounded border-2 border-[white]">
          Submit a request
        </button>
        <button className="ml-3 rounded h-[5vh] bg-[darkblue] w-[120px]">
          Sign in
        </button>
      </div>
    </div>
  );
};

export default Abstract;
