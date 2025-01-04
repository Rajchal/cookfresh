"use client";

import { useCallback, useState } from "react";

import Navbar from "@/components/navigation/navbar/Navbar";
import PrefOption from "@/components/preference/PrefOption";
import Selectdays from "@/components/selectdays/selectdays";
import PlanButton from "@/components/ui/planbutton";

const Plans = () => {
  const [selectServe, setSelectServe] = useState("1");
  const [selectMeal, setSelectMeal] = useState("3");
  const [isBlur, setIsBlur] = useState(false);
  const handleBlur = useCallback(() => {
    setIsBlur(!isBlur);
  }, [isBlur]);
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
  const setServeHandler = (value: string) => {
    if (value === "1") {
      setSelectServe("1");
    } else if (value === "2") {
      setSelectServe("2");
    }
  };
  const setMealHandler = (value: string) => {
    if (value === "3") {
      setSelectMeal("3");
    } else if (value === "4") {
      setSelectMeal("4");
    } else if (value === "5") {
      setSelectMeal("5");
    } else if (value === "6") {
      setSelectMeal("6");
    }
  };
  return (
    <>
      <Navbar handleBlur={handleBlur} />
      <main className={`${isBlur ? "blur" : ""}`}>
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
                preferences will help us to perdonalize your experience.
              </p>
            </div>
            <div className="flex basis-1/2 flex-col items-center justify-center  ">
              <h1 className="text-browse pb-8 text-center text-logo-100">
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
              <button className="textDays ml-40 text-logo-100 hover:underline ">
                Select you days
              </button>
            </div>
          </div>
          <div className="absolute left-1/2 my-[33px] -ml-0.5 h-[519px] w-[3px] bg-kairo-100 max-footClash:hidden" />
        </section>
        <Selectdays />
      </main>
    </>
  );
};

export default Plans;
