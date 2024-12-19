"use client";
import { ReactNode, useState } from "react";

import Bottom from "@/components/navigation/bottom/Bottom";
import Navbar from "@/components/navigation/navbar/Navbar";

const RootLayout = ({ children }: { children: ReactNode }) => {
  const [pop, setPop] = useState(true);
  const handlePop = (value: boolean) => {
    setPop(value);
  };

  return (
    <main>
      <Navbar onPop={handlePop} />
      <div className={`${pop ? " blur-0" : "pointer-events-none blur-sm"} `}>
        {children}
        <Bottom />
      </div>
    </main>
  );
};

export default RootLayout;
