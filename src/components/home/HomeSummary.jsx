import SummaryCollaborators from "./SummaryCollaborators";
import SummaryDetails from "./SummaryDetails";
import HomeLogo from "../../components/home/HomeLogo";
import Image from "../../assets/images/header/SummaryDetails.png";

const draftSummaries = [
  {
    description: "Project",
    count: 50,
  },
  {
    description: "Client",
    count: 30,
  },
  {
    description: "Years",
    count: 5,
  },
  {
    description: "Awards",
    count: 30,
  },
];

const HomeSummary = () => {
  return (
    <div className="bg-[#222] relative mt-4 lg:mt-0">
      <div className="w-full flex flex-col sm:flex-row">
        <img src={Image} alt="" className="object-cover flex-1 sm:w-3/4 xl:w-full" />
        <div className="flex flex-row flex-wrap justify-between sm:flex-col pt-8 px-4 xl:pt-12 xl:px-8">
          {draftSummaries.map((summary, key) => (
            <SummaryDetails key={key} summary={summary} />
          ))}
        </div>
      </div>
      <div className="px-[1.875rem] py-[1rem]">
        <SummaryCollaborators />
      </div>
      <HomeLogo />
    </div>
  );
};

export default HomeSummary;
