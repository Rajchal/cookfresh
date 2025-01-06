import React from "react";

import { Swiper } from "../swiper/Swiper";
import { Button } from "../ui/button";

const WeeklyOption = () => {
  return (
    <>
      <div className="p-8 ">
        <p className="text-week text-logo-100">Choose From </p>
        <p className="text-w-option text-logo-100 ">20+ Weekly Options</p>
      </div>
      <Swiper />

      <Button className="mt-10 rounded-full border-4 border-logo-100 bg-white p-[25px] text-[28px] font-[500] text-logo-100 hover:bg-stone-300">
        Browse Our Menus
      </Button>
    </>
  );
};

export default WeeklyOption;
