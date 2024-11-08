import { ReactNode } from "react";

const AuthLayout = ({ children }: { children: ReactNode }) => {
  return (
    <main className="flex min-h-screen items-center justify-center bg-authmob  px-4 py-10 gg:bg-auth">
      <section className="min-w-full rounded-none border bg-white py-10 shadow-md sm:min-w-[520px] sm:px-8">
        {children}
      </section>
    </main>
  );
};

export default AuthLayout;
