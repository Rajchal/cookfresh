import React from "react";

interface planButtonProps {
  data: string;
  sizeX: string;
  isSelect: boolean;
  setSelectHandler: (data: string) => void;
}

const PlanButton = ({
  data,
  sizeX,
  isSelect,
  setSelectHandler,
}: planButtonProps) => {
  return (
    <button
      className={`${isSelect ? "text-white bg-logo-100" : "text-logo-100 bg-white  hover:bg-[#CCCCCC]"} h-[35px] border border-logo-100 ${sizeX}  `}
      onClick={() => setSelectHandler(data)}
      disabled={isSelect}
    >
      {data}
    </button>
  );
};

export default PlanButton;
