"use client";

import Image from "next/image";
import { useCallback, useState } from "react";

import Bottom from "@/components/navigation/bottom/Bottom";
import Navbar from "@/components/navigation/navbar/Navbar";
import { Button } from "@/components/ui/button";
import WeeklyOption from "@/components/weekly/WeeklyOption";

export default function Home() {
  const [isBlur, setIsBlur] = useState(false);
  const handleBlur = useCallback(() => {
    setIsBlur(!isBlur);
  }, [isBlur]);
  return (
    <>
      <Navbar handleBlur={handleBlur} />
      <main className={`${isBlur ? "blur" : ""}`}>
        <section className="border border-t-[95px] bg-rect bg-cover bg-center bg-no-repeat pb-[255px] ">
          <div className="text-data flex flex-col pl-[109.22px] pt-[71.8] text-logo-100 max-sm:pl-[20px]">
            <p>Easy meal kits.</p>
            <p>Fresh ingredients</p>
            <p>Fast delivery.</p>
            <a href="/plans">
              <Button className="mt-6 w-[258.15] rounded-full bg-logo-100 py-[35px] text-[30px] font-[400] text-white hover:bg-green-900">
                Start your plan
              </Button>
            </a>
          </div>
        </section>
        <section className="mt-28 flex items-center justify-center max-mainClash:flex-col">
          <div className="flex h-[274.48] w-[331.56] flex-col justify-center rounded-xl bg-logo-100 shadow-md max-mainClash:absolute max-sm:w-[250px]">
            <p className="text-price mb-5 text-center text-white max-sm:text-[20px]">
              New!! Pre-prepared meals
            </p>
            <p className="text-option mb-5 px-3 text-center text-white max-sm:text-[18px]">
              Dont have time or skills to cook meal from scratch??? Get pre
              prepared meals delivered fresh with top quality ingredients now
              starting at just $9.99.
            </p>
            <Button className="self-center rounded-full bg-white p-5 text-[20px] font-[500] text-logo-100 hover:bg-stone-300">
              Start your plan
            </Button>
          </div>
          <Image
            src="/images/mix.png"
            alt="mix"
            width={627.89}
            height={271.48}
            className="max-mainClash:[w-[727.89px]] h-[274.48px] w-[627.89px] object-cover shadow-md max-mainClash:h-[314.48]"
          />
        </section>

        <section className="mt-28 flex flex-col items-center justify-center bg-sec-100 text-center">
          <WeeklyOption />
        </section>

        <section className="my-28 flex items-center justify-center">
          <div className="flex h-[513.58px] w-[973.49px] items-center justify-center bg-pan">
            <div className="flex h-[262px] w-[517px] flex-col items-center justify-center rounded-xl bg-white max-sm:w-[calc(100%-20px)] ">
              <p className="text-get mb-5 text-logo-100 max-sm:text-2xl">
                GET STARTED NOW
              </p>
              <div className="text-little mb-5 flex max-sm:text-xl">
                {`for as little as\u00A0`}
                <p className="text-price text-logo-100 max-sm:text-xl">$5.99</p>
              </div>
              <Button className="rounded-full bg-logo-100  p-7 text-[24px] font-[400] text-white hover:bg-green-900">
                Start your plan
              </Button>
            </div>
          </div>
        </section>
      </main>
      <Bottom isBlur={isBlur} />
    </>
  );
}
