"use client";
import AppButton from "@/components/ui/AppButton";
import AppFormInput from "@/components/ui/AppFormInput";
import AppFormTextarea from "@/components/ui/AppFormTextarea";
import { SubmitHandler, useForm } from "react-hook-form";

type Inputs = {
  name: string;
  email: string;
  description: string;
  phone: number;
  uploadTime: number;
};

const Page = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<Inputs>();
  const onSubmit: SubmitHandler<Inputs> = (data) => console.log(data);

  return (
    <div className="container mx-auto my-40">
      <div className="bg-white rounded-lg shadow-md py-5">
        <div className="  w-1/2 mx-auto my-10 ">
          <h1 className="text-textColor text-center border-b  text-3xl py-5 font-semibold">
            {" "}
            If any Mistakes Your profile , We’ll Fix Any Mistakes!
          </h1>
          <form onSubmit={handleSubmit(onSubmit)} className="p-10 space-y-3 ">
            <AppFormInput
              label="Name"
              name="name"
              placeholder="Name"
              register={register}
              error={errors.name}
              type="text"
            />
            <AppFormInput
              label="Email"
              name="email"
              placeholder="Email"
              register={register}
              error={errors.email}
              type="email"
            />
            <AppFormInput
              label="Phone Number"
              name="phone"
              placeholder="Phone Number"
              register={register}
              error={errors.phone}
              type="text"
            />
            <AppFormTextarea
              name="decription"
              placeholder="Desceription"
              register={register}
              error={errors.description}
              label="Description"
            />
            <AppFormInput
              label="Upload Time"
              name="uploadTime"
              placeholder="Upload Time"
              register={register}
              error={errors.uploadTime}
              type="date"
            />
            <AppButton label="Submit" className="mt-5 w-full " type="submit" />
          </form>
        </div>
      </div>
    </div>
  );
};

export default Page;
