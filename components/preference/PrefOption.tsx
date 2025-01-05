import Image from "next/image";
import React from "react";

interface PrefOptionProps {
  number: number;
  title: string;
  desc: string;
  image: string;
  imagealt: string;
  isPrefSelected: boolean[];
  setIsPrefSelected: (index: number) => void;
}

const PrefOption = ({
  number,
  title,
  desc,
  image,
  imagealt,
  isPrefSelected,
  setIsPrefSelected,
}: PrefOptionProps) => {
  return (
    <button
      className={`${isPrefSelected[number] ? "bg-[#B3F69C]" : ""} mb-3 flex h-[64px] w-[311px] rounded-sm border border-logo-100 p-2 text-left`}
      onClick={() => setIsPrefSelected(number)}
    >
      <Image
        className="m-1"
        src={image}
        alt={imagealt}
        width={35}
        height={35}
      />
      <div className="flex flex-col justify-center pl-3">
        <h3 className="pref-1 pb-2">{title}</h3>
        <p className="pref-2">{desc}</p>
      </div>
    </button>
  );
};

export default PrefOption;
