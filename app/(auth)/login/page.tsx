"use client";

import React from "react";

import AuthForm from "@/components/forms/AuthForm";
import { LoginSchema } from "@/lib/validations";

const Login = () => {
  return (
    <AuthForm
      formType="login"
      schema={LoginSchema}
      defaultValues={{ email: "", password: "" }}
      onSubmit={(values) => Promise.resolve({ success: true, values })}
    />
  );
};

export default Login;
