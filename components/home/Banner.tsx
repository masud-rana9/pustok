import AppButton from "../ui/AppButton";
import AppSearchbtn from "../ui/AppSearchInput";

const Banner = () => {
  return (
    <div
      className="bg-cover w-full p-4  h-[400px] bg-center  lg:h-[70vh] flex flex-col justify-center items-center "
      style={{
        backgroundImage: "url('/assets/banner.png')",
      }}
    >
      <h1 className="text-white  lg:text-[56px]  lg:max-w-[70%] text-center font-bold ">
        <span className="text-[#0074D9]"> Buy, borrow,</span> or find free books
        in our community <span className="text-[#0074D9]">-driven library</span>
      </h1>
      <p className="lg:text-[16px] text-center text-[#F1F5F9] lg:my-3">
        A Platform Where You Can Find Books According to Your Passion
      </p>
      <AppSearchbtn variant="white" />
      <div className="mt-5 text-white flex justify-center items-center gap-5">
        <AppButton label="Explore More" href="/books" />
        <p>Or</p>
        <AppButton href="/books/addbook" label="Post Book" variant="outlined" />
      </div>
    </div>
  );
};

export default Banner;
