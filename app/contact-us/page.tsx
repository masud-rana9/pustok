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
          <h2 className="font-bold text-4xl border-b pb-5 text-gray-800 text-center tracking-wide leading-tight">
            Feel Free to ask <span className="text-blue-500 italic">Here!</span>
          </h2>
          <form onSubmit={handleSubmit(onSubmit)} className="p-10 space-y-3 ">
            <AppFormInput
              label="Your Name"
              name="bookName"
              placeholder="Your Name"
              register={register}
              error={errors.name}
              type="text"
            />
            <AppFormInput
              label="Email"
              name="email"
              placeholder="Author"
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
              type="number"
            />
            <AppFormTextarea
              name="decription"
              placeholder="Desceription"
              register={register}
              error={errors.description}
              label="Description"
            />

            <AppButton label="Submit" className="mt-5 w-full " type="submit" />
          </form>
        </div>
      </div>
    </div>
  );
};

export default Page;
