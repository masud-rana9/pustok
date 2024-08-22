import Banner from "@/components/home/Banner";
import Bestsellers from "@/components/home/Bestsellers";
import ChildrenBooks from "@/components/home/ChildrenBooks";
import Fiction from "@/components/home/Fiction";
import MysteryThriller from "@/components/home/MysteryThriller";
import NewReleases from "@/components/home/NewReleases";
import NonFiction from "@/components/home/NonFiction";
import RomanticBooks from "@/components/home/RomanticBooks";
import ScienceTechnology from "@/components/home/ScienceTechnology";

const Home = () => {
  return (
    <div className="container mx-auto space-y-32">
      <Bestsellers />
      <NewReleases />
      <NonFiction />
      <ChildrenBooks />
      <MysteryThriller />
      <NonFiction />
      <ScienceTechnology />
      <RomanticBooks />
      <Fiction />
    </div>
  );
};

export default Home;
