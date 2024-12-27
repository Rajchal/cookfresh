import { ReactNode } from "react";

import Bottom from "@/components/navigation/bottom/Bottom";

const RootLayout = ({ children }: { children: ReactNode }) => {
  return (
    <main>
      {children}
      <Bottom />
    </main>
  );
};

export default RootLayout;
