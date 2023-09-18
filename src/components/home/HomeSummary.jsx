import SummaryCollaborators from "./SummaryCollaborators";
import SummaryDetails from "./SummaryDetails";
import HomeLogo from "../../components/home/HomeLogo";
import Image from "../../assets/images/header/SummaryDetails.png";

const draftSummaries = [
  {
    description: "Project Complete",
    count: 100,
  },
  {
    description: "Hapy Client",
    count: 50,
  },
  {
    description: "Years Experience",
    count: 10,
  },
  {
    description: "Win Awards",
    count: 50,
  },
];

const HomeSummary = () => {
  return (
    <div className="bg-[#222] relative mt-4 lg:mt-0">
      <div className="w-full flex flex-col sm:flex-row">
        <img src={Image} alt="" className="object-cover flex-1 sm:w-3/4 xl:w-full" />
        <div className="flex flex-row justify-between sm:flex-col pt-8 px-4 xl:pt-12 xl:px-8">
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
