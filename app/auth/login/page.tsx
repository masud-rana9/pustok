"use client";

import AppButton from "@/components/ui/AppButton";
import AppFormInput from "@/components/ui/AppFormInput";
import Link from "next/link";
import { SubmitHandler, useForm } from "react-hook-form";
import { FaFacebookF, FaGoogle } from "react-icons/fa";

type Inputs = {
  email: string;
};

const page = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<Inputs>();
  const onSubmit: SubmitHandler<Inputs> = (data) => console.log(data);

  return (
    <div className="w-[30%] h-[70vh] mx-auto my-40 flex justify-center bg-white rounded-lg shadow-lg p-10">
      <div className="border px-20 py-5 rounded-lg">
        <h1 className="text-center mb-6 text-3xl font-semibold border-b pb-5">
          LOGIN/SIGN UP
        </h1>
        <div className="flex gap-5">
          <AppButton
            label="Facebook"
            icon={<FaFacebookF />}
            iconPosition="left"
          />
          <AppButton
            label="Google"
            variant="outlined"
            icon={<FaGoogle />}
            iconPosition="left"
          />
        </div>
        <h2 className="text-center my-10 text-textColor">OR</h2>
        <form onSubmit={handleSubmit(onSubmit)} className="w-full">
          <AppFormInput
            name="email"
            placeholder="Email or Phone"
            register={register}
            error={errors.email}
            type="email"
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
    </div>
  );
};

export default page;
