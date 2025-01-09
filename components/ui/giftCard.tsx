import React from "react";
import Image from "next/image";

const GiftCard = () => {
  return (
    <div className="bg-gradient-100 w-[354] h-[194] rounded-lg">
      <div className="flex flex-col">
        <h1 className="dollary p-6 text-yellow-200">$50.00</h1>
        <div className="ml-[calc(50%-80px)] flex gap-0">
          <Image
            src="/icons/ooo.svg"
            width={76.65}
            height={71.63}
            alt="CookFresh Logo"
            className="[1100px]:size-20 size-16 "
          />
          <div className=" text-logo max-[1100px]:text-mob-logo flex-col font-lakwa text-white">
            <p>Cook</p> <p>Fresh</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GiftCard;
