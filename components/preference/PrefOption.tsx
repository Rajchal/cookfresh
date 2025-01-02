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
    <button>
      <Image src={image} alt={imagealt} width={100} height={100} />
      <h3>{title}</h3>
      <p>{desc}</p>
    </button>
  );
};

export default PrefOption;
