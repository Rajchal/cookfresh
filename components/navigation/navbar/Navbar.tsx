import Image from "next/image";
import Link from "next/link";
import React from "react";

const Navbar = () => {
  return (
    <nav className="flex-between fixed z-50 w-full gap-5 bg-white p-3 shadow-md sm:px-12">
      <Link href="/" className="flex gap-0">
        <Image
          src="/icons/ooo.svg"
          width={76.65}
          height={71.63}
          alt="CookFresh Logo"
          className="[1100px]:size-20 size-16 "
        />
        <div className="text-logo max-[1100px]:text-mob-logo flex-col font-lakwa text-logo-100">
          <p>Cook</p> <p>Fresh</p>
        </div>
      </Link>
      <span className=" text-option max-[1100px]:text-mob-option flex gap-5 pl-10 max-sm:hidden">
        <Link href="/about-us" className="text-nowrap text-logo-100">
          About Us
        </Link>
        <Link href="/menu" className="text-logo-100">
          Menu
        </Link>
        <Link href="/plans" className="text-logo-100">
          Plans
        </Link>
        <Link href="/gift-cards" className="text-nowrap text-logo-100">
          Gift Cards
        </Link>
      </span>

      <div className="flex-[25%]"></div>
      <Link href="/login">
        <button className="text-option max-[1100px]:text-mob-option px-4 py-2 text-logo-100 max-sm:hidden">
          Login
        </button>
      </Link>
      <Link href="/signup">
        <button className="text-option max-[1100px]:text-mob-option text-nowrap rounded-full bg-logo-100 px-4 py-2 text-white max-sm:hidden">
          Sign Up
        </button>
      </Link>
    </nav>
  );
};

export default Navbar;
