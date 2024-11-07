"use client";

import React from "react";

import AuthForm from "@/components/forms/AuthForm";
import { SignUpSchema } from "@/lib/validations";

const Signup = () => {
  return (
    <AuthForm
      formType="signup"
      schema={SignUpSchema}
      defaultValues={{
        username: "",
        email: "",
        password: "",
        confirmPassword: "",
      }}
      onSubmit={(values) => Promise.resolve({ success: true, values })}
    />
  );
};

export default Signup;
