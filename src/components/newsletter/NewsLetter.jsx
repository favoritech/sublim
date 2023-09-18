import NewsBanner from "./NewsBanner";
import NewsLetterImage from "./NewsLetterImage";
import NewsQuarterCircle from "./NewsQuarterCircle";

const NewsLetter = () => {
  return (
    <div className="bg-[#181818]">
      <div className="max-w-[90rem] mx-auto">
        <div className="px-4">
          <div className="relative">
            <div className="absolute right-0 top-0 z-10 hidden lg:block">
              <NewsQuarterCircle />
            </div>
            <NewsLetterImage />
            <div className="relative xl:pr-36 xl:-mt-52 z-20 md:block">
              <NewsBanner />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewsLetter;
