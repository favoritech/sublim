import FeatureItem from "./FeatureItem";

const featuresList = [
  {
    title: "Custom",
    subtitle: "Software",
    description: `We offer a wide range of services to meet your needs. Whether you need
          help with software development, cloud solutions, network solutions, or
          support consulting, we have the expertise to help you achieve your
          goals.`,
  },
  {
    title: "Cloud",
    subtitle: "Solution",
    description: `We offer a wide range of services to meet your needs. Whether you need
          help with software development, cloud solutions, network solutions, or
          support consulting, we have the expertise to help you achieve your
          goals.`,
  },
  {
    title: "Network",
    subtitle: "Solution",
    description: `We offer a wide range of services to meet your needs. Whether you need
          help with software development, cloud solutions, network solutions, or
          support consulting, we have the expertise to help you achieve your
          goals.`,
  },
];

const Features = () => {
  return (
    <div id="service" className="bg-[#222] relative">
      <div className="max-w-[1300px] mx-auto pb-24 pt-24 md:pt-40 md:pb-32">
        <div className="px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-[1.87rem]">
            {featuresList.map((feature, key) => (
              <FeatureItem key={key} feature={feature} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Features;
