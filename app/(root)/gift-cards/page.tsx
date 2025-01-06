"use client";

import Image from "next/image";
import { useCallback, useState } from "react";

import Navbar from "@/components/navigation/navbar/Navbar";

const GiftCards = () => {
  const [isBlur, setIsBlur] = useState(false);
  const handleBlur = useCallback(() => {
    setIsBlur(!isBlur);
  }, [isBlur]);
  return (
    <>
      <Navbar handleBlur={handleBlur} />
      <main className={`${isBlur ? "blur" : ""}`}>
        <section className="flex-between flex border border-t-[95px] bg-logo-100 ">
          <Image
            src="/images/spoonleft.png"
            alt="spoonLeft"
            width={261}
            height={462}
            className="max-sm:hidden"
          />
          <div className="flex flex-col p-10 text-center">
            <h1 className="text-w-option text-white">
              Buy and Redeem your Gift Cards for Free Meals
            </h1>
            <div className="flex justify-center gap-4 py-5">
              <button className="w-[204px] rounded-sm bg-white p-3 text-[#4D6F41] shadow-md">
                Redeem gift card
              </button>
              <button className="w-[204px] rounded-sm bg-white p-3 text-[#4D6F41] shadow-md">
                Buy gift card
              </button>
            </div>
            <h2 className="textDays text-white">
              Give gift cards to spoil your family and friends
            </h2>
          </div>
          <Image
            src="/images/spoonRight.png"
            alt="spoonRight"
            width={189}
            height={462}
          />
        </section>
        <section className="my-16">
          <h1 className="text-get text-center text-black">
            Why buy a CookFresh gift card?
          </h1>
          <div className="my-7 grid grid-cols-1 gap-10 sm:grid-cols-3 ">
            <span className="flex flex-col items-center text-center">
              <Image
                src="/images/mealFresh.png"
                alt="Easy Meal"
                width={60}
                height={60}
              />

              <h2 className="text-price2">Meals made easy</h2>
              <p className="text-price3 text-gray-700">
                Give the gift of stress-free dinners with pre-measured
                ingredients and step-by-step recipes delivered to their door.
              </p>
            </span>
            <span className="flex flex-col items-center text-center">
              <Image
                src="/images/freshFlavour.png"
                alt="Fresh Flavour"
                width={60}
                height={60}
                className=""
              />

              <h2 className="text-price2">Fresh flavours</h2>
              <p className="text-price3 text-gray-700">
                We pack each box with fresh, high-quality ingredients sourced
                from trusted suppliers.
              </p>
            </span>
            <span className="flex flex-col items-center text-center">
              <Image
                src="/images/happyCustomer.png"
                alt="Happy Customer"
                width={60}
                height={60}
              />

              <h2 className="text-price2">Their box, their way</h2>
              <p className="text-price3 text-gray-700">
                Your recipient can choose their meals from our weekly menu, so
                they get exactly what they want.
              </p>
            </span>
          </div>
        </section>
        <section className="flex justify-between bg-[#FBF6EB] max-sm:justify-around">
          <Image
            src="/images/veggieSpread.png"
            alt="Vegetable spread"
            width={400}
            height={240}
            className="max-sm:hidden"
          />
          <span className="flex w-[400px] flex-col gap-4 p-8 text-center">
            <h1 className="text-w-option  ">Redeem a gift card</h1>
            <h2 className="text-little text-[#3E413C]">
              Received a gift card? Lucky you! Redeem it here and get ready for
              some delicious home cooking.
            </h2>
            <div>
              <form>
                <input
                  type="text"
                  id="giftCard"
                  placeholder="Enter code"
                  className="rounded-md border-2 border-[#3E413CCC] bg-white p-3"
                />
                <button className="w-[96] rounded-md bg-logo-100 p-3 text-white">
                  Redeem
                </button>
              </form>
            </div>
          </span>
          <Image
            src="/images/fruitBasket.png"
            alt="Vegetable spread"
            width={238}
            height={358}
          />
        </section>
        section
      </main>
    </>
  );
};

export default GiftCards;
