const aboutCounters = [
  {
    description: "Working people",
    count: 300,
  },
  {
    description: "World Places",
    count: 20,
  },
];

const AboutCounterItem = ({ counter }) => {
  return (
    <div>
      <h3 className="text-white text-[3.12rem] font-semibold">
        {counter.count}+
      </h3>
      <p className="text-[#aaa] text-[1rem] font-medium">
        {counter.description}
      </p>
    </div>
  );
};

const AboutCounter = () => {
  return (
    <div
      className="flex justify-center bottom-[8%] px-[3.75rem] py-[3.25rem] bg-[#333] gap-[7.5rem] mt-8 lg:mt-0 lg:absolute md:left-[47%]"
    >
      {aboutCounters.map((counter, key) => (
        <AboutCounterItem counter={counter} key={key} />
      ))}
    </div>
  );
};

export default AboutCounter;
