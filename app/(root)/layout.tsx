import { ReactNode } from "react";

import Navbar from "@/components/navigation/navbar/Navbar";

const RootLayout = ({ children }: { children: ReactNode }) => {
  return (
    <main>
      <Navbar />
      {children}
    </main>
  );
};

export default RootLayout;
