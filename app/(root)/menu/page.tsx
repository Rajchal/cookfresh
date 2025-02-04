"use client";

import { useState, useCallback } from "react";

import Navbar from "@/components/navigation/navbar/Navbar";

const Menu = () => {
  const [isBlur, setIsBlur] = useState(false);
  const handleBlur = useCallback(() => {
    setIsBlur(!isBlur);
  }, [isBlur]);
  return (
    <main className="">
      <Navbar handleBlur={handleBlur} />
    </main>
  );
};

export default Menu;
