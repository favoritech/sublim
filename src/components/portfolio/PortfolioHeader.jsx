import Header from "../common/Header";

const PortfolioHeader = () => {
  return (
    <div className="grid grid:cols-1 lg:grid-cols-2 lg:gap-[4.62rem] gap-4">
      <div className="flex flex-col">
        <Header
          title="Portfolio"
          subtitle="We create places that connect, sustain & inspire"
        />
      </div>
      <div className="flex flex-col gap-[1.81rem] items-center sm:items-start">
        <span className="text-center sm:text-left text-[1rem] text-[#aaa] font-medium leading-[1.44rem]">
          Sublim Mentor Favoritech helped us build a custom software solution
          that has greatly improved our operations.
        </span>
        <div className="w-[3.75rem] h-[3.75rem] rounded-full bg-[#333]"></div>
      </div>
    </div>
  );
};

export default PortfolioHeader;
