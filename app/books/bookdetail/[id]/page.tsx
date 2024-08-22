"use client";

import AppButton from "@/components/ui/AppButton";
import Image from "next/image";

const page = () => {
  return (
    <div className=" flex gap-10 p-10 container mx-auto mt-40 bg-white rounded-md shadow-lg h-[70vh]">
      <div>
        <Image
          width={400}
          height={100}
          src="/assets/book.png"
          alt="img"
          className="h-[55vh] rounded-xl border p-5"
        />
      </div>
      <div className="w-1/2">
        <h2 className="text-3xl font-semibold text-primary">Book Name </h2>
        <p className="text-xl text-textColor">Author Name</p>
        <p className="text-xl text-textColor">Category name</p>
        <h3 className="text-xl text-textColor mt-5 ">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nemo soluta
          quod possimus ipsum vitae beatae eius, ducimus voluptatum eveniet
          dolorem, quos quae laudantium architecto nobis neque pariatur
          excepturi quam asperiores!
        </h3>
        <h3 className="text-2xl mt-2 text-textColor">Price:$688</h3>
        <div className="flex  items-center gap-5 mt-8">
          <AppButton label="Add to Card" href="/order-and-pay" />
          <AppButton label="Read" variant="outlined" />
        </div>
      </div>
      <div className="border-l pl-5">
        <h1 className="text-3xl border-b mb-5 text-primary font-semibold">
          Related Books{" "}
        </h1>
        <div className="space-y-3">
          <p className="text-textColor">Book1</p>
          <hr />
          <p className="text-textColor">Book1</p>
          <hr />
          <p className="text-textColor">Book1</p>
          <hr />
          <p className="text-textColor">Book1</p>
          <hr />
        </div>
      </div>
    </div>
  );
};

export default page;
