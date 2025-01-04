import React from "react";

interface SelectdaysProps {
  day: number;
  dayName: string;
  isSelected: boolean[];
  handleSelected: (data: number) => void;
}

const Selectdays = ({
  day,
  dayName,
  isSelected,
  handleSelected,
}: SelectdaysProps) => {
  return (
    <button
      className={`${isSelected[day] ? "bg-[#B3F69C]" : ""} textDays w-[114px] grow border border-logo-100 p-3 text-logo-100 hover:underline`}
      onClick={() => handleSelected(day)}
    >
      {dayName}
    </button>
  );
};

export default Selectdays;
