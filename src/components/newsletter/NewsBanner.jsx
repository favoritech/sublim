const NewsBanner = () => {
  return (
    <div className="bg-[#222] py-12 px-12 xl:py-[3.75rem] xl:pr-[8.31rem] xl:pl-24 z-20">
      <div className="flex justify-between items-center md:gap-[9.62rem] flex-col sm:flex-row">
        <h3 className="text-center pb-4 sm:pb-0 sm:text-left text-white text-2xl leading-[2rem] md:text-5xl xl:text-6xl font-semibold sm:leading-[5.06rem]">
          Let’s Make Something Great
          <span className="text-[#E3B27D]"> Together!</span>
        </h3>
        <div className="bg-[#E3B27D] rounded-full w-40 h-40 p-4 xl:w-[15.62rem] xl:h-[15.62rem] flex flex-shrink-0 items-center justify-center">
          <p className="text-center text-white text-[1rem] font-bold leading-[1.4rem] tracking-[0.18rem] uppercase">
            <a href="mailto:favoritech@outlook.com">Contact with us</a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default NewsBanner;
