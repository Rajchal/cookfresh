import { ReactNode } from "react";

import Bottom from "@/components/navigation/bottom/Bottom";
import Navbar from "@/components/navigation/navbar/Navbar";

const RootLayout = ({ children }: { children: ReactNode }) => {
  return (
    <main>
      <Navbar />
      {children}
      <Bottom />
    </main>
  );
};

export default RootLayout;
