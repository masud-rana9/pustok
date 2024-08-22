"use client";

import AppButton from "@/components/ui/AppButton";
import AppFormInput from "@/components/ui/AppFormInput";
import Link from "next/link";
import { SubmitHandler, useForm } from "react-hook-form";
import { FaFacebookF, FaGoogle } from "react-icons/fa";

type Inputs = {
  email: string;
  name: string;
  phone: number;
  password: string;
  confirmpassword: string;
};

const Page = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<Inputs>();
  const onSubmit: SubmitHandler<Inputs> = (data) => console.log(data);

  return (
    <div className="w-[40%] h-[80vh] mx-auto my-40 flex justify-center bg-white rounded-lg shadow-lg p-10">
      <div className="border px-20 py-5 rounded-lg">
        <h1 className="text-center mb-10 text-3xl font-semibold border-b pb-5">
          REGISTER/SIGN IN
        </h1>

        <form onSubmit={handleSubmit(onSubmit)}>
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
            placeholder="Email or Phone"
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
          <AppFormInput
            name="confirmpassword"
            placeholder="Conforim Password"
            register={register}
            error={errors.confirmpassword}
            type="password"
          />

          <AppButton label="Submit" className="mt-5 w-full " type="submit" />
        </form>
        <p className="text-textColor mt-3  text-center">
          Have an account?
          <Link href="/auth/login" className="text-primary">
            login
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Page;
