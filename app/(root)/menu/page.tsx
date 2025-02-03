import Navbar from "@/components/navigation/navbar/Navbar";
import { useState, useCallback } from "react";
const [isBlur, setIsBlur] = useState(false);
const handleBlur = useCallback(() => {
  setIsBlur(!isBlur);
}, [isBlur]);
const Menu = () => {
  return (
    <>
      <Navbar handleBlur={handleBlur} blurr={isBlurr} />
      <p className="text-easyy border border-t-[95px] p-16 text-center text-logo-100 max-[1100px]:border-t-[87px] ">
        Explore Our Menu
      </p>
      <form className="mt-10 flex items-center justify-center">
        <input
          type="text"
          placeholder="Search for meals"
          className="h-[50px] w-[300px] rounded-md border border-black p-2"
        />
        <button className="rounded-md bg-logo-100 p-2 text-white">
          Search
        </button>
      </form>
    </>
  );
};

export default Menu;
