import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import Team1 from "../../assets/images/teams/team1.png";
import {FaArrowRight, FaArrowLeft} from "react-icons/fa6";
import Header from "../common/Header";

const teamGroup = [
  {
    image: Team1,
    name: "Sonya Hardlist",
    category: "Founder"
  },
  {
    image: Team1,
    name: "Alex Wassenberg",
    category: "CTO"
  },
  {
    image: Team1,
    name: "Victorio Puika",
    category: "Advisor"
  },
]
const CustomRightArrow = ({ onClick }) => {
  return (
    <button className="min-h-[43px] min-w-[43px] absolute top-0 right-0 rounded-full bg-[#333] hover:bg-[#454545] flex items-center justify-center" onClick={() => onClick()} >
      <FaArrowRight className="text-white text-xl" />
    </button>
  );
};

const CustomLeftArrow = ({ onClick }) => {
  return (
    <button className="min-h-[43px] min-w-[43px] absolute top-0 right-14 rounded-full bg-[#333] hover:bg-[#454545] flex items-center justify-center" onClick={() => onClick()} >
      <FaArrowLeft className="text-white text-xl" />
    </button>
  );
};

const CustomDot = ({ onClick, ...rest }) => {
  const { active } = rest;
  return (
    <button
      className={active ? "rounded-full min-w-[20px] border-2 bg-transparent border-[#e3b27d] mx-2" : "min-h-[10px] min-w-[10px] rounded-full bg-[#aaa] mx-2"}
      onClick={() => onClick()}
    >
    </button>
  );
};

const Team = () => {
  const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3
    },
    tablet: {
      breakpoint: { max: 1024, min: 996 },
      items: 2
    },
    mobile: {
      breakpoint: { max: 996, min: 0 },
      items: 1
    }
  };
  return (
    <div className="bg-[#181818] relative">
      <div className="max-w-[81.25rem] mx-auto">
        <div className="px-4">
          <div className="grid grid:cols-1 lg:grid-cols-2 sm:gap-[4.62rem] gap-4">
            <div className="flex flex-col">
              <Header
                title="Our Team"
                subtitle="Builds Our Future Experience Team Members"
              />
            </div>
            <div className="flex flex-col gap-[1.81rem] items-center sm:items-start">
              <span className="text-center sm:text-left text-[1rem] text-[#aaa] font-medium leading-[1.44rem]">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
                tempor incididunt ut labore et dolore.
              </span>
            </div>
          </div>
          <Carousel
            customRightArrow={<CustomRightArrow />}
            customLeftArrow={<CustomLeftArrow />}
            showDots
            responsive={responsive}
            infinite={true}
            customDot={<CustomDot />}
            containerClass="carousel-container py-20 lg:-mt-[40px]"
            itemClass="carousel-item-padding-40-px flex items-center justify-center"
          >
            {teamGroup.map((team, key) => (
              <div>
                <img className="cursor-pointer" src={team.image} alt={`team-${key}`} />
                <div>
                  <h4 className="text-white text-[1.75rem] sm:text-[2rem] mt-4 font-semibold text-center sm:text-left">{team.name}</h4>
                  <p className="text-center sm:text-left text-[1rem] text-[#aaa] font-medium leading-[1.44rem]">{team.category}</p>
                </div>
              </div>
            ))}
          </Carousel>
        </div>
      </div>
    </div>
  );
};

export default Team;
