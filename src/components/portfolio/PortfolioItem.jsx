import { FaArrowRightLong } from "react-icons/fa6";

const PortfolioItem = ({ portfolioItem, count }) => {
  return (
    <div className="border-b border-[#fff3] flex gap-[0.81rem] pb-[2.37rem]">
      <span className="text-[#aaa] text-[1rem] font-medium leading-[1.34rem]">
        {`0${count}.`}
      </span>
      <div className="flex items-center w-full justify-between">
        <h3 className="text-white font-semibold leading-[4.21rem] text-2xl sm:text-4xl lg:text-[3.125rem]">
          {portfolioItem}
        </h3>
        <FaArrowRightLong className="text-white text-3xl" />
      </div>
    </div>
  );
};

export default PortfolioItem;
