import Image from "next/image";
import React from "react";

interface PrefOptionProps {
  title: string;
  desc: string;
  image: string;
  imagealt: string;
}

const PrefOption = ({ title, desc, image, imagealt }: PrefOptionProps) => {
  return (
    <button className="mb-3 flex h-[64px] w-[311px] rounded-sm border border-logo-100 p-2 text-left">
      <Image
        className="m-1"
        src={image}
        alt={imagealt}
        width={35}
        height={35}
      />
      <div className="flex flex-col justify-center pl-3">
        <h3 className="pref-1">{title}</h3>
        <p className="pref-2">{desc}</p>
      </div>
    </button>
  );
};

export default PrefOption;
