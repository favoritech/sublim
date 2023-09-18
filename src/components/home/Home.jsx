import HomeDescription from "./HomeDescription";
import HomeSummary from "./HomeSummary";

const Home = () => {
  return (
    <div className="max-w-[81.25rem] mx-auto pt-7 pb-28">
      <div className="px-4">
        <div className=" flex flex-col gap-[1.81rem]">
          <div className="flex justify-between flex-col lg:flex-row">
            <HomeDescription />
            <HomeSummary />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
