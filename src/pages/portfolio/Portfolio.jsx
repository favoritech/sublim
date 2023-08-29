import PortfolioHeader from "../../components/portfolio/PortfolioHeader";
import PortfolioList from "../../components/portfolio/PortfolioList";

const Portfolio = () => {
  return (
    <div className="bg-[#181818] relative">
      <div className="max-w-[81.25rem] mx-auto pb-24 pt-24 md:pt-40 md:pb-32">
        <div className="px-4">
          <div className="flex flex-col gap-[3.68rem]">
            <PortfolioHeader />
            <PortfolioList />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
