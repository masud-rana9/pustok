import { ImSpinner9 } from "react-icons/im";

type TLoading = {
  height?: "full" | "fit";
};

const Loading = ({ height = "full" }: TLoading) => {
  return (
    <div
      className={`flex items-center justify-center ${
        height === "full" ? "min-h-screen" : "h-fit py-20 lg:py-40 2xl:py-60"
      }`}
    >
      <ImSpinner9 className="animate-spin duration-700 text-7xl lg:text-8xl 2xl:text-9xl text-primary" />
    </div>
  );
};

export default Loading;
