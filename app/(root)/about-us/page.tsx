"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

import { Button } from "@/components/ui/button";
import ROUTES from "@/constants/routes";
const HiddenSee = ({ is }: { is: boolean }) => {
  if (is) {
    return (
      <p className="text-tinku">
        easy for you to get started. We provide you with a variety of recipes
        and ingredients that are fresh and delicious. Our mission is to help you
        make cooking fun and easy so you can enjoy delicious meals with your
        loved ones. Our team of chefs and nutritionists work hard to create
        recipes that are easy to follow and use fresh ingredients that are good
        for you. We believe that everyone deserves to eat well, and we are here
        to help you do just that.
      </p>
    );
  }
  return null;
};
const AboutUs = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <>
      <section className="border border-t-[95px] bg-board bg-cover bg-center bg-no-repeat text-center">
        <div className="text-makee flex-center h-[calc(100vh-69px)] w-screen flex-col text-white">
          <p>Make Your</p>
          <p>Cooking Journey Fun</p>
        </div>
      </section>

      <section className="flex-center my-36 flex-col">
        <p className="text-makee mb-10 text-logo-100 max-sm:text-3xl">
          Our Values
        </p>
        <div className="text-browse flex w-screen items-end justify-around space-x-4">
          <div className="flex h-full basis-1/3 flex-col items-center justify-between">
            <Image
              src="/images/reliable.svg"
              alt="reliable"
              width={199}
              height={199}
              className="mb-8 max-sm:size-[60px]"
            />
            <p className="text-center max-sm:text-sm">Reliable Recipes</p>
          </div>
          <div className="flex h-full basis-1/3 flex-col items-center justify-between">
            <Image
              src="/images/farm.svg"
              alt="reliable"
              width={225}
              height={225}
              className="mb-3 max-sm:size-[70px]"
            />
            <p className="text-center max-sm:text-sm">Farm-Fresh Ingredients</p>
          </div>
          <div className="flex h-full basis-1/3 flex-col items-center justify-between">
            <Image
              src="/images/deli.svg"
              alt="reliable"
              width={178}
              height={178}
              className="mb-8 max-sm:size-[50px] "
            />
            <p className="text-center max-sm:text-sm">
              Delicious Possibilities
            </p>
          </div>
        </div>
      </section>
      <section className="flex-center bg-here-100">
        <div className="basis-1/3 pl-10">
          <Image
            src="/images/salady.png"
            alt="salady"
            width={500}
            height={500}
            className="rounded-xl max-sm:hidden"
          />
        </div>
        <div className="basis-2/3 px-32 py-10">
          <p className="text-easyy text-logo-100">Here to Make Cooking Easy</p>
          <div className="text-tinku">
            <p>
              We believe everyone deserves fresh and healthy food, so we&apos;ve
              made it
            </p>
            <button
              className="text-logo-100 hover:underline sm:hidden"
              onClick={() => setIsOpen((prev) => !prev)}
            >
              see more..
            </button>
            <HiddenSee is={isOpen} />
          </div>
        </div>
      </section>

      <section>
        <div className="my-24 h-[389px] w-screen bg-greenBasket py-40 pl-40">
          <p className="text-weak text-logo-100">Get Started Today</p>
          <Link href={ROUTES.SIGNUP}>
            <Button className="mt-6  rounded-full bg-logo-100 p-[25px] text-[30px] font-[400] text-white hover:bg-green-900">
              Sign up
            </Button>
          </Link>
        </div>
      </section>
    </>
  );
};

export default AboutUs;
