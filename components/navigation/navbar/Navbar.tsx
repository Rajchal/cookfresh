"use client";

import Image from "next/image";
import Link from "next/link";
import React, { useState, useEffect } from "react";

import Login from "@/components/auth/Login";
import Register from "@/components/auth/Register";

interface NavbarProps {
  handleBlur: () => void;
  blurr?: boolean;
}

const Navbar: React.FC<NavbarProps> = ({ handleBlur, blurr = false }) => {
  const [isPopupVisibleLogin, setIsPopupVisibleLogin] = useState(false);
  const [isPopupVisibleResiter, setIsPopupVisibleResiter] = useState(false);
  const [isMobileNavVisible, setIsMobileNavVisible] = useState(false);
  const closePopup = () => {
    setIsPopupVisibleLogin(false);
    setIsPopupVisibleResiter(false);
    handleBlur();
  };
  const gotoLogin = () => {
    togglePopupRegister();
    togglePopupLogin();
  };

  const gotoSignUp = () => {
    togglePopupLogin();
    togglePopupRegister();
  };

  const togglePopupLogin = () => {
    setIsPopupVisibleLogin((prev) => !prev);
  };
  const togglePopupRegister = () => {
    setIsPopupVisibleResiter((prev) => !prev);
  };

  const clas =
    isPopupVisibleLogin || isPopupVisibleResiter || blurr
      ? "blur-sm pointer-events-none"
      : "blur-0";

  useEffect(() => {
    if (!isPopupVisibleLogin && !isPopupVisibleResiter && !blurr) {
      document.body.style.overflow = "auto";
    } else {
      document.body.style.overflow = "hidden";
    }
  }, [isPopupVisibleLogin, isPopupVisibleResiter, blurr]);

  return (
    <>
      <nav
        className={`${clas} flex-between fixed z-50 w-full  gap-5 bg-white p-3 shadow-md sm:px-12`}
      >
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
        <button
          className="mr-5 sm:hidden"
          onClick={() => {
            handleBlur();
            setIsMobileNavVisible((prev) => !prev);
          }}
        >
          <Image
            src="/images/hamburger.png"
            alt="Navigate"
            height={30}
            width={30}
          />
        </button>
        <span className="text-option max-[1100px]:text-mob-option flex gap-5 pl-10 max-sm:hidden">
          <Link
            href="/about-us"
            className="text-nowrap text-logo-100 hover:underline"
          >
            About Us
          </Link>
          <Link href="/menu" className="text-logo-100 hover:underline">
            Menu
          </Link>
          <Link href="/plans" className="text-logo-100 hover:underline">
            Plans
          </Link>
          <Link
            href="/gift-cards"
            className="text-nowrap text-logo-100 hover:underline"
          >
            Gift Cards
          </Link>
        </span>

        <div className="flex-[25%] max-sm:hidden"></div>

        <button
          onClick={() => {
            togglePopupLogin();
            handleBlur();
          }}
          className="text-option max-[1100px]:text-mob-option px-4 py-2 text-logo-100 hover:underline max-sm:hidden"
        >
          Login
        </button>

        <button
          onClick={() => {
            togglePopupRegister();
            handleBlur();
          }}
          className="text-option max-[1100px]:text-mob-option text-nowrap rounded-full bg-logo-100 px-4 py-2 text-white hover:bg-green-900 max-sm:hidden"
        >
          Sign Up
        </button>
      </nav>

      {isPopupVisibleLogin && (
        <div className="fixed left-[calc(50%-260px)] top-8 z-50 flex items-center justify-center max-sm:left-[calc(50%-140px)] ">
          <Login gotoSignUp={gotoSignUp} closePopup={closePopup} />
        </div>
      )}
      {isPopupVisibleResiter && (
        <div className="fixed left-[calc(50%-260px)] top-8 z-50 flex items-center justify-center  max-sm:left-[calc(50%-140px)]">
          <Register gotLogin={gotoLogin} closePopup={closePopup} />
        </div>
      )}
      {isMobileNavVisible && (
        <div
          className={`${clas} fixed z-40 mt-[87px] flex h-screen w-[150px] flex-col  items-center  gap-6 bg-white `}
        >
          <Link
            href="/about-us"
            className="mt-10 text-nowrap text-logo-100 hover:underline"
          >
            About Us
          </Link>
          <Link href="/menu" className="text-logo-100 hover:underline">
            Menu
          </Link>
          <Link href="/plans" className="text-logo-100 hover:underline">
            Plans
          </Link>
          <Link
            href="/gift-cards"
            className="text-nowrap text-logo-100 hover:underline"
          >
            Gift Cards
          </Link>

          <div className="absolute top-[calc(50%-50px)]  -ml-0.5 h-[3px] w-[100px] bg-kairo-100 sm:hidden" />

          <button
            onClick={() => {
              togglePopupLogin();
            }}
            className="text-option max-[1100px]:text-mob-option mt-20 px-4 py-2 text-logo-100 hover:underline "
          >
            Login
          </button>

          <button
            onClick={() => {
              togglePopupRegister();
            }}
            className="text-option max-[1100px]:text-mob-option text-nowrap rounded-full bg-logo-100 px-4 py-2 text-white hover:bg-green-900 "
          >
            Sign Up
          </button>
        </div>
      )}
    </>
  );
};
export default Navbar;
