import ChildrenBooks from "@/components/home/HistoricalBooks";
import Fiction from "@/components/home/Fiction";
import MysteryThriller from "@/components/home/MysteryThriller";
import NewReleases from "@/components/home/UniversityTextBooks";
import NonFiction from "@/components/home/LiteratureClassics";
import RomanticBooks from "@/components/home/RomanticBooks";
import ScienceTechnology from "@/components/home/ScienceTechnology";
import MedicalOldBooks from "@/components/home/MedicalOldBooks";
import UniversityTextBooks from "@/components/home/UniversityTextBooks";
import LiteratureClassics from "@/components/home/LiteratureClassics";
import HistoricalBooks from "@/components/home/HistoricalBooks";

const Home = () => {
  return (
    <div className="container mx-auto space-y-24">
      <MedicalOldBooks />
      <UniversityTextBooks />
      <LiteratureClassics />
      <HistoricalBooks />
      {/* <MysteryThriller /> */}
      {/* <NonFiction />
      <ScienceTechnology />
      <RomanticBooks />
      <Fiction /> */}
    </div>
  );
};

export default Home;
