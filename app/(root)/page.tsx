import Image from "next/image";

import { Swiper } from "@/components/swiper/Swiper";
import { Button } from "@/components/ui/button";
import ROUTES from "@/constants/routes";

export default async function Home() {
  return (
    <>
      <section className="border border-t-[95px] bg-rect bg-cover bg-center bg-no-repeat pb-[255px]">
        <div className="text-data flex flex-col pl-[109.22px] pt-[71.8] text-logo-100">
          <p>Easy meal kits.</p>
          <p>Fresh ingredients</p>
          <p>Fast delivery.</p>
          <Button className="mt-6 w-[258.15] rounded-full bg-logo-100 py-[35px] text-[30px] font-[400] text-white hover:bg-stone-300">
            Start your plan
          </Button>
        </div>
      </section>
      <section className="mt-28 flex items-center justify-center ">
        <div className="flex h-[274.48] w-[331.56] flex-col justify-center bg-logo-100">
          <p className="text-price mb-5 text-center text-white">
            New!! Pre-prepared meals
          </p>
          <p className="text-option mb-5 px-3 text-center text-white">
            Dont have time or skills to cook meal from scratch??? Get pre
            prepared meals delivered fresh with top quality ingredients now
            starting at just $9.99.
          </p>
          <Button className="self-center rounded-full bg-white p-5 text-[20px] font-[500] text-logo-100 hover:bg-green-900">
            Start your plan
          </Button>
        </div>
        <Image src="/images/mix.png" alt="mix" width={627.89} height={274.48} />
      </section>
      <section className="mt-28 flex flex-col items-center justify-center bg-sec-100 text-center">
        <div className="p-8 ">
          <p className="text-week text-logo-100">Choose From </p>
          <p className="text-w-option text-logo-100 ">20+ Weekly Options</p>
        </div>
        <Swiper />
      </section>
    </>
  );
}
