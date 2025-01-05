"use client";

import { useCallback, useState } from "react";
import CountUp from "react-countup";

import Navbar from "@/components/navigation/navbar/Navbar";
import PrefOption from "@/components/preference/PrefOption";
import Selectdays from "@/components/selectdays/selectdays";
import PlanButton from "@/components/ui/planbutton";

const Plans = () => {
  const sPrice = 20;
  const [servePrice, setServePrice] = useState(sPrice * 1 * 3);
  const discountRate = 5;
  const [shippingPrice, setShippingPrice] = useState(10);
  const shippingDiscount = 2;
  const finalservingPrice = servePrice - (discountRate / 100) * servePrice;
  const finalshippingPrice =
    shippingPrice - (shippingDiscount / 100) * shippingPrice;

  const days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  const [isSelect, setIsSelect] = useState(Array<boolean>(7).fill(false));
  const [selectServe, setSelectServe] = useState("1");
  const [selectMeal, setSelectMeal] = useState("3");
  const [isBlur, setIsBlur] = useState(false);
  const handleBlur = useCallback(() => {
    setIsBlur(!isBlur);
  }, [isBlur]);
  const [isBlurr, setIsBlurr] = useState(false);
  const options = [
    {
      title: "Time-efficient",
      desc: "Recipes designed to be cooked in 30 minutes",
      image: "/images/clockPref.svg",
      imagealt: "clock",
    },
    {
      title: "Family-friendly",
      desc: "Classic recipes that the whole family will love",
      image: "/images/familyPref.svg",
      imagealt: "family",
    },
    {
      title: "Veggies",
      desc: "Meat free recipes highlighting seasonal vegetables",
      image: "/images/veggiePref.svg",
      imagealt: "veggie",
    },
    {
      title: "Calorie-efficient",
      desc: "Recipes designed to be under 600 calories",
      image: "/images/firePref.svg",
      imagealt: "fire",
    },
    {
      title: "Healthy",
      desc: "Nutritionist-approved recipes that dont compromise on taste",
      image: "/images/caloriePref.svg",
      imagealt: "heart",
    },
  ];
  const handleSelected = (data: number) => {
    const newSelected = [...isSelect];
    newSelected[data] = !newSelected[data];
    setIsSelect(newSelected);
  };
  const setServeHandler = (value: string) => {
    if (value === "1") {
      setSelectServe("1");
      setServePrice((prev) => prev / 2);
    } else if (value === "2") {
      setSelectServe("2");
      setServePrice((prev) => prev * 2);
    }
  };
  const setMealHandler = (value: string) => {
    if (value === "3") {
      setSelectMeal("3");
      setServePrice(() =>
        selectServe === "2" ? sPrice * 2 * 3 : sPrice * 1 * 3
      );
    } else if (value === "4") {
      setSelectMeal("4");
      setServePrice(() =>
        selectServe === "2" ? sPrice * 2 * 4 : sPrice * 1 * 4
      );
    } else if (value === "5") {
      setSelectMeal("5");
      setServePrice(() =>
        selectServe === "2" ? sPrice * 2 * 5 : sPrice * 1 * 5
      );
    } else if (value === "6") {
      setSelectMeal("6");
      setServePrice(() =>
        selectServe === "2" ? sPrice * 2 * 6 : sPrice * 1 * 6
      );
    }
  };
  return (
    <>
      <Navbar handleBlur={handleBlur} blurr={isBlurr} />
      <main
        className={`${isBlur || isBlurr ? "pointer-events-none overflow-hidden blur" : ""}`}
      >
        <section className={`border border-t-[95px]`}>
          <h1 className="text-week pt-16 text-center text-logo-100">
            Personalize your meal subscription
          </h1>
          <h2 className="text-5 text-nowrap py-8 text-center">
            Choose a plan and get 5% discount every week. The more you order,
            the more you save!
          </h2>
        </section>
        <section className="flex items-center justify-center bg-[#FBF6EB]">
          <div className="my-24 flex h-[716px] w-[978px] bg-white ">
            <div className="w-[500px] basis-1/2 p-24">
              <h1 className="text-browse pb-8 text-center text-logo-100">
                Choose your preference
              </h1>
              {options.map((option) => {
                return (
                  <PrefOption
                    key={option.title}
                    title={option.title}
                    desc={option.desc}
                    image={option.image}
                    imagealt={option.imagealt}
                  />
                );
              })}
              <p className="pref-2 pt-3 text-center ">
                The full menu will be available to you. Selecting these
                preferences will help us to personalize your experience.
              </p>
            </div>
            <div className="flex basis-1/2 flex-col items-center   ">
              <h1 className="text-browse p-24 pb-8 text-center text-logo-100">
                Select your plan
              </h1>

              <div className="mb-2 flex">
                <h2 className="server text-nowrap pr-[15px]">
                  Serving per meal
                </h2>
                <PlanButton
                  data="1"
                  sizeX="w-[103px]"
                  isSelect={selectServe === "1"}
                  setSelectHandler={() => setServeHandler("1")}
                />
                <PlanButton
                  data="2"
                  sizeX="w-[103px]"
                  isSelect={selectServe === "2"}
                  setSelectHandler={() => setServeHandler("2")}
                />
              </div>
              <div className="mb-2 flex">
                <h2 className="server text-nowrap ">Meals per week</h2>
                <PlanButton
                  data="3"
                  sizeX="w-[51.5px] ml-[31px]"
                  isSelect={selectMeal === "3"}
                  setSelectHandler={() => setMealHandler("3")}
                />
                <PlanButton
                  data="4"
                  sizeX="w-[51.5px]"
                  isSelect={selectMeal === "4"}
                  setSelectHandler={() => setMealHandler("4")}
                />
                <PlanButton
                  data="5"
                  sizeX="w-[51.5px]"
                  isSelect={selectMeal === "5"}
                  setSelectHandler={() => setMealHandler("5")}
                />
                <PlanButton
                  data="6"
                  sizeX="w-[51.5px]"
                  isSelect={selectMeal === "6"}
                  setSelectHandler={() => setMealHandler("6")}
                />
              </div>
              <button
                className="textDays ml-40 text-logo-100 hover:underline "
                onClick={() => setIsBlurr((prev) => !prev)}
              >
                Select you days
              </button>
              <div className="my-9 w-[399px] rounded-lg bg-[#FBF6EBE5] px-10 py-5">
                <h1 className="text-sign2  pb-3 text-logo-100">
                  Order Summary
                </h1>
                <span className="grid grid-cols-3 gap-10 p-1">
                  <h2 className="text-descp text-nowrap text-[#3E413C]">
                    Price of serving
                  </h2>
                  <CountUp
                    end={servePrice}
                    duration={1}
                    decimals={2}
                    prefix="$"
                    className="text-descp  text-[#3E413C] line-through"
                  />
                  <CountUp
                    end={finalservingPrice}
                    duration={1}
                    decimals={2}
                    prefix="$"
                    className="text-descp text-[#3E413C]"
                  />
                </span>

                <span className="grid grid-cols-3 gap-10 p-1">
                  <h2 className="text-descp text-[#3E413C]">Shipping</h2>

                  <CountUp
                    end={shippingPrice}
                    duration={1}
                    decimals={2}
                    prefix="$"
                    className="text-descp  text-[#3E413C] line-through"
                  />
                  <CountUp
                    end={finalshippingPrice}
                    duration={1}
                    decimals={2}
                    prefix="$"
                    className="text-descp text-[#3E413C]"
                  />
                </span>

                <span className="grid grid-cols-3 gap-10 p-1">
                  <h2 className="text-descp  text-nowrap text-[#3E413C]">
                    Total price
                  </h2>

                  <CountUp
                    end={servePrice + shippingPrice}
                    duration={1}
                    decimals={2}
                    prefix="$"
                    className="text-descp  text-[#3E413C] line-through"
                  />
                  <CountUp
                    end={finalservingPrice + finalshippingPrice}
                    duration={1.5}
                    decimals={2}
                    prefix="$"
                    className=" textDays2 text-logo-100"
                  />
                </span>
              </div>
              <h2 className="textDays w-[300px] text-wrap p-6 text-center text-[#3E413CB2]">
                Now you can browse our menu to order for this week
              </h2>
              <button className="textDays2 rounded-full bg-[#8DD375] px-8 py-4 text-white hover:bg-logo-100">
                Continue
              </button>
            </div>
          </div>
          <div className="absolute left-1/2 my-[33px] -ml-0.5 h-[519px] w-[3px] bg-kairo-100 max-footClash:hidden" />
        </section>
      </main>

      {isBlurr && (
        <div className="fixed bottom-[calc(50%-205px)] left-[calc(50%-205px)] z-50 flex h-[435px] w-[410px] flex-col items-center justify-center border bg-white  p-5 shadow-md">
          <h1 className="text-browse text-center text-logo-100">
            Select your days
          </h1>
          <div className="  my-5 flex flex-wrap gap-2 p-5">
            {days.map((day) => {
              return (
                <Selectdays
                  key={days.indexOf(day)}
                  day={days.indexOf(day)}
                  dayName={day}
                  isSelected={isSelect}
                  handleSelected={() => handleSelected(days.indexOf(day))}
                />
              );
            })}
          </div>

          <button
            className="w-[144px] bg-logo-100 p-2 text-white hover:bg-green-900"
            onClick={() => setIsBlurr((prev) => !prev)}
          >
            Confirm
          </button>
        </div>
      )}
    </>
  );
};

export default Plans;
