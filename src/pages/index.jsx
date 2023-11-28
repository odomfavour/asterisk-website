import ComingSection from "../components/home/ComingSection";
import HeaderSection from "../components/home/HeaderSection";
import HeroSection from "../components/home/HeroSection";
import SolutionsSection from "../components/home/SolutionsSection";

const index = () => {
  return (
    <div className=" font-montserrat">
      <HeaderSection />
      <HeroSection />
      <SolutionsSection />
      <ComingSection/>
    </div>
  );
};

export default index;
