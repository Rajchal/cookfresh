import React from "react";

interface SelectdaysProps {
  isSelected: string[];
  setIsSelected: (data: string) => void;
}

const Selectdays = ({ isSelected, setIsSelected }: SelectdaysProps) => {
  const days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  return (
    <div className="absolute right-0 top-0 z-50 h-[435px] w-[410px] border bg-white p-5">
      <h1 className="text-browse">Select your days</h1>
      <div className="left-[calc(50%+200px)] flex flex-wrap gap-2 p-5">
        {days.map((day) => (
          <button
            key={day}
            className={`${isSelected.includes(day)} textDays w-[114px] grow border p-3 text-logo-100 hover:underline`}
            onClick={() => setIsSelected(day)}
          >
            {day}
          </button>
        ))}
      </div>
    </div>
  );
};

export default Selectdays;
