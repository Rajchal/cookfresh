"use client";

import { useCallback, useState } from "react";

import Navbar from "@/components/navigation/navbar/Navbar";
import PrefOption from "@/components/preference/PrefOption";

const Plans = () => {
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
          <div className="my-24 h-[616px] w-[978px] bg-white">
            <div>
              <p className="text-browse text-logo-100">
                Choose your preference
              </p>
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
            </div>
          </div>
        </section>
      </main>
    </>
  );
};

export default Plans;
