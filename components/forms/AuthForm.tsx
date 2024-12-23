"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import Image from "next/image";
import { signIn } from "next-auth/react";
import { useState } from "react";
import {
  DefaultValues,
  FieldValues,
  Path,
  SubmitHandler,
  useForm,
} from "react-hook-form";
import { z, ZodType } from "zod";

import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import ROUTES from "@/constants/routes";
import { toast } from "@/hooks/use-toast";

interface AuthFormProps<T extends FieldValues> {
  formType: "login" | "signup";
  schema: ZodType<T>;
  defaultValues: T;
  onSubmit: (values: T) => Promise<{ success: boolean }>;
}

const AuthForm = <T extends FieldValues>({
  formType,
  schema,
  defaultValues,
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  onSubmit,
}: AuthFormProps<T>) => {
  const form = useForm<z.infer<typeof schema>>({
    resolver: zodResolver(schema),
    defaultValues: defaultValues as DefaultValues<T>,
  });
  const handleSignIn = async () => {
    try {
      await signIn("google", { callbackUrl: ROUTES.HOME, redirect: false });
    } catch (error) {
      console.log(error);
      toast({
        title: "Sign in failed",
        description:
          error instanceof Error
            ? error.message
            : "An error occurred dugin Sign in",
        variant: "destructive",
      });
    }
  };
  const [focus, setFocus] = useState(false);
  const handleSubmit: SubmitHandler<T> = async () => {};
  const buttonType = formType === "login" ? "Log in" : "Sign up";
  const butt = formType === "login" ? "mb-[30px]" : "mb-[10px]";
  const fixOverflowIssue = formType === "login" ? "h-[59px]" : "h-[40px]";
  const tex =
    formType === "login" ? (
      <>
        Don&apos;t have an account?{" "}
        <button className="text-white " disabled>
          Sign up
        </button>
      </>
    ) : (
      <>
        Already have an account?{" "}
        <button className="text-white" disabled>
          Log in
        </button>
      </>
    );
  return (
    <Form {...form}>
      <div className={`${butt} flex items-center gap-2`}>
        <h1 className="text-login grow text-center text-logo-100">
          {buttonType}
        </h1>
      </div>
      {Object.keys(defaultValues).map((field) => (
        <FormField
          key={field}
          control={form.control}
          name={field as Path<T>}
          render={({ field }) => (
            <FormItem
              className={`${butt} mx-auto flex w-[326px] items-center gap-2.5 max-sm:w-full`}
            >
              <div
                className="grow flex-wrap"
                onClick={() => {
                  setFocus(true);
                }}
              >
                <FormControl>
                  <Input
                    required
                    type={field.name === "password" ? "password" : "text"}
                    placeholder={
                      field.name === "email"
                        ? "Email Address"
                        : field.name.charAt(0).toUpperCase() +
                          field.name.slice(1)
                    }
                    {...field}
                    className={`${fixOverflowIssue} flex-wrap rounded-[5px] text-[20px] placeholder:text-[20px]`}
                  />
                </FormControl>
                <div className={`${focus ? "hidden" : ""}`}>
                  <FormMessage />
                </div>
              </div>
            </FormItem>
          )}
        />
      ))}
      <form
        onSubmit={form.handleSubmit(handleSubmit)}
        className="mx-auto flex  w-[326px] items-center gap-2.5 max-sm:w-full"
      >
        <Button
          type="submit"
          className=" h-[59px] w-full  bg-logo-100 text-[24px] text-white hover:bg-green-900"
        >
          {buttonType}
        </Button>
      </form>
      <div className="mx-auto my-4 flex w-[326px] items-center max-sm:w-full">
        <hr className="grow border-t-[1.5px] border-or-100" />
        <span className="text-option px-2 text-or-100">or</span>
        <hr className="grow border-t-[1.5px] border-or-100" />
      </div>
      <div
        className={`${butt} mx-auto flex  w-[326px] items-center gap-2.5 max-sm:w-full`}
      >
        <Button
          onClick={() => handleSignIn()}
          className="h-[59px] grow border border-black bg-white text-[20px] text-sigg-100 hover:bg-stone-300 hover:text-sigg-100"
        >
          <Image src="images/google.svg" alt="google" width={30} height={30} />
          Continue with Google
        </Button>
      </div>
      <div className="mx-auto flex items-center gap-2.5">
        <h1 className="text-little grow text-center text-already-100">{tex}</h1>
      </div>
    </Form>
  );
};

export default AuthForm;
