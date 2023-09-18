import AboutContent from "./AboutContent";
import AboutCounter from "./AboutCounter";
import AboutHeader from "./AboutHeader";
import Image from "../../assets/images/about.jpg";

const About = () => {
  return (
    <div id="about" className="bg-[#181818] relative">
      <div className="max-w-[1300px] mx-auto pb-24 pt-24 md:pb-52">
        <div className="px-4">
          <AboutHeader />
          <div className="flex pl-0 md:pl-16 flex-col md:flex-row">
            <img src={Image} alt="" className="md:w-[300px] lg:w-[631px] h-full" />
            <AboutContent />
          </div>
          <div className="lg:block">
            <AboutCounter />
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
