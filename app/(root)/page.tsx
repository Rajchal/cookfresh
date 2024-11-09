import Image from "next/image";
import Link from "next/link";

import { Swiper } from "@/components/swiper/Swiper";
import { Button } from "@/components/ui/button";
import ROUTES from "@/constants/routes";

export default async function Home() {
  return (
    <>
      <section className="border border-t-[95px] bg-rect bg-cover bg-center bg-no-repeat pb-[255px] ">
        <div className="text-data flex flex-col pl-[109.22px] pt-[71.8] text-logo-100">
          <p>Easy meal kits.</p>
          <p>Fresh ingredients</p>
          <p>Fast delivery.</p>
          <Button className="mt-6 w-[258.15] rounded-full bg-logo-100 py-[35px] text-[30px] font-[400] text-white hover:bg-green-900">
            Start your plan
          </Button>
        </div>
      </section>
      <section className="mt-28 flex items-center justify-center ">
        <div className="flex h-[274.48] w-[331.56] flex-col justify-center bg-logo-100 shadow-md">
          <p className="text-price mb-5 text-center text-white">
            New!! Pre-prepared meals
          </p>
          <p className="text-option mb-5 px-3 text-center text-white">
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
          height={274.48}
          className="shadow-md"
        />
      </section>
      <section className="mt-28 flex flex-col items-center justify-center bg-sec-100 text-center">
        <div className="p-8 ">
          <p className="text-week text-logo-100">Choose From </p>
          <p className="text-w-option text-logo-100 ">20+ Weekly Options</p>
        </div>
        <Swiper />

        <Button className="mt-10 rounded-full border-4 border-logo-100 bg-white p-[25px] text-[28px] font-[500] text-logo-100 hover:bg-stone-300">
          Browse Our Menus
        </Button>
      </section>
      <section className="my-28 flex items-center justify-center">
        <div className="flex h-[513.58px] w-[973.49px] items-center justify-center bg-pan">
          <div className="flex h-[262px] w-[517px] flex-col items-center justify-center bg-white">
            <p className="text-get mb-5 text-logo-100">GET STARTED NOW</p>
            <div className="text-little mb-5 flex">
              {`for as little as\u00A0`}
              <p className="text-price text-logo-100"> $5.99</p>
            </div>
            <Button className="rounded-full bg-logo-100  p-7 text-[24px] font-[400] text-white hover:bg-green-900">
              Start your plan
            </Button>
          </div>
        </div>
      </section>
      <section className="flex justify-between border-y-[3px] border-kairo-100 bg-fol-100">
        <div className="flex basis-1/2 flex-col items-center justify-center text-center">
          <p className="text-follow mb-16 mt-10">Follow Us</p>
          <div className="mb-[50px] flex gap-14">
            <Image
              src="/images/facebook.svg"
              width={50}
              height={50}
              alt="facebook"
            />
            <Image
              src="/images/instagram.svg"
              width={50}
              height={50}
              alt="instagram"
            />
            <Image
              src="/images/pintrest.svg"
              width={50}
              height={50}
              alt="pintrest"
            />
            <Image
              src="/images/tiktok.svg"
              width={50}
              height={50}
              alt="tiktok"
            />
          </div>
        </div>
        <div className="basis-1/2">
          <div className="mt-10 flex flex-col items-center justify-center">
            <p className="text-follow">Discover New Recipes </p>
            <form className="my-7 flex">
              <input
                type="email"
                placeholder="Email"
                className=" h-[61px] border border-logo-100 pl-5 text-[24px]"
              />
              <Button className="m-0 h-[61px] rounded-none bg-logo-100 text-[32px] text-white">
                GO
              </Button>
            </form>
            <p className="text-little text-offer-100">
              Sign up for offers, recipes, updates & more
            </p>
            <p className="text-little mb-10 text-offer-100">
              (Follow us us other platforms for special discounts)
            </p>
          </div>
        </div>

        <div className="absolute left-1/2 my-[33px] -ml-0.5 h-[202px] w-[3px] bg-kairo-100 "></div>
      </section>
      <section className="flex items-center justify-between">
        <div className="flex basis-1/3 flex-col items-center justify-center">
          <div className="text-nowrap  px-24 text-stone-500">
            Copyright © Cookfresh. All rights reserved.
          </div>
        </div>
        <div className="my-20 basis-1/3 px-7 text-center">
          <div className="text-info mb-5 text-logo-100">Helpful Links</div>
          <div className="text-i-content text-inf-100">Services</div>
          <div className="text-i-content text-inf-100">Support</div>
          <div className="text-i-content text-inf-100">
            Terms and Conditions
          </div>
          <div className="text-i-content text-inf-100">Privary Policy</div>
        </div>
        <div className="basis-1/3 text-center">
          <div className="text-info mb-5 text-logo-100">Contact Us</div>
          <div className="flex items-center justify-center">
            <Image
              src="/images/gg_phone.svg"
              width={24}
              height={24}
              alt="phone"
            />
            <div className="text-i-content text-inf-100">9841274589</div>
          </div>
          <div className="flex items-center justify-center">
            <Image
              src="/images/uiw_mail.svg"
              width={24}
              height={24}
              alt="email"
            />
            <div className="text-i-content text-inf-100">
              cookfresh.eatfresh@gmail.com
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
