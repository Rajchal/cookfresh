import React from "react";

interface GiftCardButtonProps {
  number: number;
  isSelected: boolean[];
  price: number;
  handleSelectGift: (number: number) => void;
}

const GiftCardButton = ({
  number,
  isSelected,
  price,
  handleSelectGift,
}: GiftCardButtonProps) => {
  console.log(isSelected[number]);
  return (
    <button
      className={`${isSelected[number] ? "bg-[#B3F69C]" : ""} border border-logo-100 w-[170px] rounded-sm p-2 text-[#4D6F41] hover:underline `}
      onClick={() => handleSelectGift(number)}
    >
      {number}${price.toFixed(2)}
    </button>
  );
};

export default GiftCardButton;
