"use client";

import { AuthContext, AuthInfo } from "@/components/provider/AuthProvider";
import AppButton from "@/components/ui/AppButton";
import AppFormInput from "@/components/ui/AppFormInput";
import Link from "next/link";
import { useContext } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import { FaFacebookF, FaGoogle } from "react-icons/fa";

type Inputs = {
  email: string;
  name: string;
  phone: number;
  password: string;
  confirmpassword: string;
};

const Register = () => {
  const { createUser } = useContext(AuthContext) as AuthInfo;
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<Inputs>();
  const onSubmit: SubmitHandler<Inputs> = async (data) => {
    try {
      const result = await createUser(data.email, data.password);
      const user = result.user;
      console.log(user);
      alert("regiter successfull");
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="w-[40%] h-[55vh] mx-auto mt-36  shadow-lg p-10  bg-white rounded-md">
      <div className="  rounded-lg">
        <h2 className="font-bold text-4xl pb-5 text-gray-800 text-center tracking-wide leading-tight">
          Register <span className="text-blue-500 italic">Here!</span>
        </h2>

        <form onSubmit={handleSubmit(onSubmit)} className="">
          <AppFormInput
            name="name"
            placeholder="Name"
            register={register}
            error={errors.name}
            type="text"
          />
          <AppFormInput
            name="phone"
            placeholder="Phone no"
            register={register}
            error={errors.phone}
            type="number"
          />
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
        <p className="text-textColor mt-3  text-center italic">
          Have an account?
          <Link href="/auth/login" className="text-primary">
            login
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Register;
