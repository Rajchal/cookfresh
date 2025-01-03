import React from "react";

interface planButtonProps {
  data: string;
  sizeX: string;
  isSelect: boolean;
}

const PlanButton = ({ data, sizeX, isSelect }: planButtonProps) => {
  return (
    <button
      className={`${isSelect ? "text-white bg-logo-100 " : "text-logo-100 bg-white"} h-[35px] ${sizeX} hover:text-white hover:bg-logo-100`}
    >
      {data}
    </button>
  );
};

export default PlanButton;
