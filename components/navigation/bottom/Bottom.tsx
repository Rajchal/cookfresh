import Image from "next/image";
import React from "react";

import { Button } from "@/components/ui/button";
const Bottom = () => {
  return (
    <>
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
};

export default Bottom;
