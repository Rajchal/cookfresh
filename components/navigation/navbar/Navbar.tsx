"use client";

import Image from "next/image";
import Link from "next/link";
import React, { useState, useEffect } from "react";

import Login from "@/components/auth/Login";
import Register from "@/components/auth/Register";

interface ChildComponentProps {
  onPop: (value: boolean) => void;
}

const Navbar: React.FC<ChildComponentProps> = ({ onPop }) => {
  const [isPopupVisibleLogin, setIsPopupVisibleLogin] = useState(false);
  const [isPopupVisibleResiter, setIsPopupVisibleResiter] = useState(false);

  const togglePopupLogin = () => {
    setIsPopupVisibleLogin(!isPopupVisibleLogin);
  };
  const togglePopupRegister = () => {
    setIsPopupVisibleResiter(!isPopupVisibleResiter);
  };

  const parentPop = (value: boolean) => {
    onPop(value);
  };

  const clas =
    isPopupVisibleLogin || isPopupVisibleResiter
      ? "blur-sm pointer-events-none"
      : "blur-0";

  useEffect(() => {
    if (!isPopupVisibleLogin && !isPopupVisibleResiter) {
      document.body.style.overflow = "auto";
    } else {
      window.scrollTo({ top: 0, left: 0 });
      document.body.style.overflow = "hidden";
    }
  }, [isPopupVisibleLogin, isPopupVisibleResiter]);

  return (
    <>
      <nav
        className={`${clas} flex-between fixed z-10 w-full gap-5 bg-white p-3 shadow-md sm:px-12`}
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

        <div className="flex-[25%]"></div>

        <button
          onClick={() => {
            togglePopupLogin();
            parentPop(isPopupVisibleLogin);
          }}
          className="text-option max-[1100px]:text-mob-option px-4 py-2 text-logo-100 hover:underline max-sm:hidden"
        >
          Login
        </button>

        <button
          onClick={() => {
            togglePopupRegister();
            parentPop(isPopupVisibleResiter);
          }}
          className="text-option max-[1100px]:text-mob-option text-nowrap rounded-full bg-logo-100 px-4 py-2 text-white hover:bg-green-900 max-sm:hidden"
        >
          Sign Up
        </button>
      </nav>
      {isPopupVisibleLogin && (
        <>
          <div className="absolute left-[calc(50%-260px)] top-8 z-50 shadow-lg max-sm:left-[calc(50%-140px)]">
            <Login />
          </div>
          <button
            className="absolute left-[calc(50%+200px)] top-8 z-50 p-3 text-5xl text-red-600 hover:text-red-800 hover:underline max-sm:left-[calc(50%+90px)]"
            onClick={() => {
              togglePopupLogin();
              parentPop(isPopupVisibleLogin);
            }}
          >
            x
          </button>
          <button
            onClick={() => {
              togglePopupLogin();
              parentPop(isPopupVisibleLogin);
              togglePopupRegister();
              parentPop(isPopupVisibleResiter);
            }}
            className="text-little absolute left-[calc(50%+68px)] top-[516px] z-50 text-logo-100 hover:underline max-sm:left-[calc(50%-30px)] max-sm:top-[536px]"
          >
            Sign Up
          </button>
        </>
      )}
      {isPopupVisibleResiter && (
        <>
          <div className="absolute left-[calc(50%-260px)] top-8 z-50 shadow-lg max-sm:left-[calc(50%-140px)] ">
            <Register />
          </div>
          <button
            className="absolute left-[calc(50%+200px)] top-8 z-50 p-3 text-5xl text-red-600 hover:text-red-800 hover:underline max-sm:left-[calc(50%+90px)]"
            onClick={() => {
              togglePopupRegister();
              parentPop(isPopupVisibleResiter);
            }}
          >
            x
          </button>
          <button
            onClick={() => {
              togglePopupRegister();
              parentPop(isPopupVisibleResiter);
              togglePopupLogin();
              parentPop(isPopupVisibleLogin);
            }}
            className="text-little absolute left-[calc(50%+83px)] top-[498px] z-50 text-logo-100 hover:underline max-sm:left-[calc(50%-10px)] max-sm:top-[525px] "
          >
            Login
          </button>
        </>
      )}
    </>
  );
};

export default Navbar;
