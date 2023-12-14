import React from "react";

const Shimmer = () => {
  return (
    <div className="grid grid-cols-4 ">
      {Array(25)
        .fill("")
        .map((e) => (
          <div>
            <div className="h-[230px] w-[310px] rounded-lg m-3 bg-gray-300"></div>
            <div className="flex">
              <div className="h-[30px] w-[30px] rounded-full m-1 bg-gray-300"></div>
              <div className="h-[30px] w-[270px] rounded-xl m-1 bg-gray-300"></div>
            </div>
          </div>
        ))}
    </div>
  );
};

export default Shimmer;
