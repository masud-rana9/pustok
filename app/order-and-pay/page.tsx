"use client";
import AppButton from "@/components/ui/AppButton";
import AppFormInput from "@/components/ui/AppFormInput";
import AppFormSelect from "@/components/ui/AppFormSelect";
import AppFormTextarea from "@/components/ui/AppFormTextarea";
import { Controller, SubmitHandler, useForm } from "react-hook-form";

type Inputs = {
  cName: string;
  thana: string;
  phone: string;
  address: string;
  district: number;
  uploadTime: number;
};

const paymentMethods = [
  { label: "Bkash", value: "bkash" },
  { label: "Rocket", value: "rocket" },
  { label: "Nagad", value: "nagad" },
];
const Page = () => {
  const {
    control,
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
            Give your information if you want to buy or take books!
          </h1>
          <form onSubmit={handleSubmit(onSubmit)} className="p-10 space-y-3 ">
            <AppFormInput
              label="Your Name"
              name="cName"
              placeholder="Your Name"
              register={register}
              error={errors.cName}
              type="text"
            />
            <AppFormInput
              label="Phone Number"
              name="phone"
              placeholder="Phone Number"
              register={register}
              error={errors.phone}
              type="number"
            />
            <AppFormInput
              label="District"
              name="district"
              placeholder="District"
              register={register}
              error={errors.district}
              type="text"
            />
            <AppFormInput
              label="Thana/upazila"
              name="thana"
              placeholder="Thana/upazila"
              register={register}
              error={errors.thana}
              type="text"
            />
            <AppFormTextarea
              name="address"
              placeholder="Address"
              register={register}
              error={errors.address}
              label="Address"
            />
            {/* <AppFormSelect
              label="Payment Method"
              control={control}
              options={paymentMethods}
              required={true}
              placeholder="Select a Payment Method"
              name="pyment"
            /> */}
            <AppButton label="Submit" className="mt-5 w-full " type="submit" />
          </form>
        </div>
      </div>
    </div>
  );
};

export default Page;
