"use client";

import React from "react";

import AuthForm from "@/components/forms/AuthForm";
import { LoginSchema } from "@/lib/validations";

interface LoginProps {
  gotoSignUp: () => void;
  closePopup: () => void;
}

const Login = ({ gotoSignUp, closePopup }: LoginProps) => {
  return (
    <section className="sticky max-w-[280px] rounded-none border bg-white p-5 py-10 sm:min-w-[520px] sm:px-8">
      <AuthForm
        formType="login"
        schema={LoginSchema}
        defaultValues={{ email: "", password: "" }}
        onSubmit={(values) => Promise.resolve({ success: true, values })}
        gotoSignUp={gotoSignUp}
        closePopup={closePopup}
      />
    </section>
  );
};

export default Login;
