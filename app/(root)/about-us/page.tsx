import Image from "next/image";
import Link from "next/link";
import React from "react";

import { Button } from "@/components/ui/button";
import ROUTES from "@/constants/routes";
const AboutUs = () => {
  return (
    <>
      <section className="border border-t-[95px] bg-board bg-cover bg-center bg-no-repeat text-center">
        <div className="text-makee flex-center h-[calc(100vh-69px)] w-screen flex-col text-white">
          <p>Make Your</p>
          <p>Cooking Journey Fun</p>
        </div>
      </section>

      <section className="flex-center my-36 flex-col">
        <p className="text-makee mb-10 text-logo-100">Our Values</p>
        <div className="text-browse flex w-screen items-end justify-around space-x-4">
          <div className="flex h-full basis-1/3 flex-col items-center justify-between">
            <Image
              src="/images/reliable.svg"
              alt="reliable"
              width={199}
              height={199}
              className="mb-8"
            />
            <p>Reliable Recipes</p>
          </div>
          <div className="flex h-full basis-1/3 flex-col items-center justify-between">
            <Image
              src="/images/farm.svg"
              alt="reliable"
              width={225}
              height={225}
              className="mb-3"
            />
            <p>Farm-Fresh Ingredients</p>
          </div>
          <div className="flex h-full basis-1/3 flex-col items-center justify-between">
            <Image
              src="/images/deli.svg"
              alt="reliable"
              width={178}
              height={178}
              className="mb-8"
            />
            <p>Delicious Possibilities</p>
          </div>
        </div>
      </section>
      <section className="flex-center bg-here-100">
        <div className="basis-1/3 px-20 py-10">
          <Image
            src="/images/salady.png"
            alt="salady"
            width={500}
            height={500}
          />
        </div>
        <div className="basis-2/3 px-32 py-10">
          <p className="text-easyy text-logo-100">Here to Make Cooking Easy</p>
          <p className="text-tinku">
            We believe everyone deserves fresh and healthy food, so we&apos;ve
            made it easy to prepare meals at home to inspire our inner creator
            and connect us with our love for cooking. Our goal is to make
            home-cooked meals simple, enjoyable, and accessible for everyone. By
            delivering fresh, pre-portioned ingredients and chef-designed
            recipes, we empower busy individuals and families to prepare
            delicious, nutritious meals without the stress of meal planning or
            grocery shopping. We are committed to reducing food waste,
            supporting sustainable sourcing, and offering diverse options that
            cater to a variety of tastes and dietary needs, making healthy
            eating a convenient and enjoyable part of everyday life.
          </p>
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
