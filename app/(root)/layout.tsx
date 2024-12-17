import { ReactNode } from "react";

import Bottom from "@/components/navigation/bottom/Bottom";
import Navbar from "@/components/navigation/navbar/Navbar";

const RootLayout = ({ children }: { children: ReactNode }) => {
  const check = <Navbar isOpen={true} />;
  return (
    <main>
      <Navbar isOpen={false} />
      {check ? children : null}
      <Bottom />
    </main>
  );
};

export default RootLayout;
