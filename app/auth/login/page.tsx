"use client";

import AppButton from "@/components/ui/AppButton";
import AppFormInput from "@/components/ui/AppFormInput";
import Link from "next/link";
import { SubmitHandler, useForm } from "react-hook-form";
import { FaFacebookF, FaGoogle } from "react-icons/fa";
import {
  AuthContext,
  AuthInfo,
} from "./../../../components/provider/AuthProvider";
import { useContext } from "react";

type Inputs = {
  email: string;
  password: string;
};

const Login = () => {
  const { signIn } = useContext(AuthContext) as AuthInfo;
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<Inputs>();
  const onSubmit: SubmitHandler<Inputs> = async (data) => {
    try {
      const result = await signIn(data.email, data.password);
      const user = result.user;
      console.log(user);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="w-[40%] h-[55vh] mx-auto mt-36 shadow-lg p-10  bg-white rounded-md ">
      <h2 className="font-bold text-4xl pb-8 text-gray-800 text-center tracking-wide leading-tight">
        Login <span className="text-blue-500 italic">Here!</span>
      </h2>

      <div className="flex justify-center items-center">
        <AppButton
          label="Login with Google"
          variant="outlined"
          icon={<FaGoogle />}
          iconPosition="left"
        />
      </div>

      <h2 className="text-center my-5 text-textColor">OR</h2>
      <form onSubmit={handleSubmit(onSubmit)} className="w-full">
        <AppFormInput
          name="email"
          placeholder="Email"
          register={register}
          error={errors.email}
          type="email"
        />
        <AppFormInput
          name="password"
          placeholder="Password"
          register={register}
          error={errors.password}
          type="password"
        />
        <AppButton label="Submit" className="mt-5 w-full " type="submit" />
      </form>
      <p className="text-textColor mt-3  text-center">
        Dont have an account?
        <Link href="/auth/register" className="text-primary">
          Register
        </Link>
      </p>
    </div>
  );
};

export default Login;
