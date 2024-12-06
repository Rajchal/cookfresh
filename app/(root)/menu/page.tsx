import React from "react";

import FetchMenu from "@/components/call/FetchMenu";

const Menu = () => {
  return (
    <>
      <p className="text-easyy border border-t-[95px] p-16 text-center text-logo-100 ">
        Explore Our Menu
      </p>
      <form className="mt-10 flex items-center justify-center">
        <input
          type="text"
          placeholder="Search for meals"
          className="h-[50px] w-[300px] rounded-md border border-black p-2"
        />
        <button
          className="rounded-md bg-logo-100 p-2 text-white"
          onClick={(e) => {
            e.preventDefault();
            const query = (
              document.querySelector('input[type="text"]') as HTMLInputElement
            ).value;
          }}
        >
          Search
        </button>
      </form>
      <div>
        <FetchMenu query="apple" />
      </div>
    </>
  );
};

export default Menu;
