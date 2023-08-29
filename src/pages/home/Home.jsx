import HomeDescription from "../../components/home/HomeDescription";
import HomeSummary from "../../components/home/HomeSummary";
import Navbar from "../../components/navbar/Navbar";

const Home = () => {
  return (
    <div className="max-w-[81.25rem] mx-auto pt-7 pb-28">
      <div className="px-4">
        <div className=" flex flex-col gap-[1.81rem]">
          <div className="flex items-center justify-between flex-col sm:flex-row">
            <h1 className="text-white text-xl leading-7 font-semibold">Sublim Mentor Favoritech</h1>
            <Navbar />
          </div>
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
