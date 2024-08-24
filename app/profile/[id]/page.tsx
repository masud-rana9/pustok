import Image from "next/image";
import Link from "next/link";

const PInfo = [
  {
    name: "My Order",
    link: "/profile",
  },
  {
    name: "My Ebook Library",
    link: "/profile",
  },
  {
    name: "My Account",
    link: "/profile",
  },
  {
    name: "My Order",
    link: "/profile",
  },
  {
    name: "My Ebook Library",
    link: "/profile",
  },
  {
    name: "My Account",
    link: "/profile",
  },
];

const Profile = () => {
  return (
    <div className="container mx-auto flex my-40 gap-10">
      <div className="flex flex-col gap-5">
        <div className="bg-white rounded-md border-t-2 border-green-700 shadow-md flex gap-3 items-center p-8 ">
          <Image
            width={100}
            height={100}
            src="/assets/book.png"
            alt="#"
            className="rounded-full size-20"
          />
          <div className="">
            <h2 className="text-xl text-textColor">Hello</h2>
            <h1 className="text-2xl text-textColor ">Md Masud Rana</h1>
          </div>
        </div>
        <div className="border-t-2 border-green-700 text-2xl text-textColor flex flex-col gap-5  bg-white rounded-md shadow-md p-8">
          {PInfo.map((item) => (
            <Link
              className="border-b border-textColor pb-2"
              href={item?.link}
              key={item?.name}
            >
              {item.name}
            </Link>
          ))}
        </div>
      </div>

      <div className="w-[75%]">
        <h1 className="p-8 border-t-2 border-green-700 text-2xl font-semibold mb-10 bg-white rounded-md shadow-md w-full">
          Personal Information
        </h1>
        <div className="border-t-2 border-green-700 flex items-start justify-between p-8 text-xl text-textColor bg-white rounded-md shadow-md">
          <div className="flex flex-col gap-8">
            <p>Name: Md Masud Rana</p>
            <p>Birth Date:12/12/12</p>
            <p>Gender: Male</p>
            <p>Phone Number:017038485785</p>
            <p>Email:rana61960@gmail.com</p>
            <p>Name: Md Masud Rana</p>
            <p>Birth Date:12/12/12</p>
            <p>Gender: Male</p>
            <p>Phone Number:017038485785</p>
            <p>Email:rana61960@gmail.com</p>
          </div>
          <Image
            width={100}
            height={100}
            src="/assets/book.png"
            alt="#"
            className="rounded-full size-40"
          />
        </div>
      </div>
    </div>
  );
};

export default Profile;
