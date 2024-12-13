"use client";

import React from "react";

import AuthForm from "@/components/forms/AuthForm";
import { LoginSchema } from "@/lib/validations";

const Login = () => {
  return (
    <section className="absolute min-w-full rounded-none border bg-white py-10 shadow-md sm:min-w-[520px] sm:px-8">
      <AuthForm
        formType="login"
        schema={LoginSchema}
        defaultValues={{ email: "", password: "" }}
        onSubmit={(values) => Promise.resolve({ success: true, values })}
      />
    </section>
  );
};

export default Login;
