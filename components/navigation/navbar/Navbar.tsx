"use client";

import Image from "next/image";
import Link from "next/link";
import React, { useState, useEffect } from "react";

import Login from "@/components/auth/Login";
import Register from "@/components/auth/Register";

interface NavbarProps {
  handleBlur: () => void;
}

const Navbar: React.FC<NavbarProps> = ({ handleBlur }) => {
  const [isPopupVisibleLogin, setIsPopupVisibleLogin] = useState(false);
  const [isPopupVisibleResiter, setIsPopupVisibleResiter] = useState(false);

  const togglePopupLogin = () => {
    setIsPopupVisibleLogin((prev) => !prev);
    if (isPopupVisibleLogin) {
      window.history.pushState(null, "", "/");
    } else {
      const query = new URLSearchParams(window.location.search);
      query.set("lol", "login");
      const newUrl = `${window.location.pathname}${query.toString().slice(4)}`;
      window.history.pushState(null, "", newUrl);
    }
  };
  const togglePopupRegister = () => {
    setIsPopupVisibleResiter((prev) => !prev);
    if (isPopupVisibleResiter) {
      window.history.pushState(null, "", "/");
    } else {
      const query = new URLSearchParams(window.location.search);

      query.set("lol", "register");
      const newUrl = `${window.location.pathname}${query.toString().slice(4)}`;
      window.history.pushState(null, "", newUrl);
    }
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
            handleBlur();
          }}
          className="text-option max-[1100px]:text-mob-option px-4 py-2 text-logo-100 hover:underline max-sm:hidden"
        >
          Login
        </button>

        <button
          onClick={() => {
            togglePopupRegister();
          }}
          className="text-option max-[1100px]:text-mob-option text-nowrap rounded-full bg-logo-100 px-4 py-2 text-white hover:bg-green-900 max-sm:hidden"
        >
          Sign Up
        </button>
      </nav>
      {isPopupVisibleLogin && (
        <>
          <div className="absolute left-[calc(50%-260px)] top-8 z-50  shadow-lg max-sm:left-[calc(50%-140px)]">
            <Login />
          </div>
          <button
            className="absolute left-[calc(50%+200px)] top-8 z-50 p-3 text-5xl text-red-600 hover:text-red-800 hover:underline max-sm:left-[calc(50%+90px)]"
            onClick={() => {
              togglePopupLogin();
            }}
          >
            x
          </button>
          <button
            onClick={() => {
              togglePopupLogin();
              togglePopupRegister();
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
            }}
          >
            x
          </button>
          <button
            onClick={() => {
              togglePopupRegister();
              togglePopupLogin();
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
