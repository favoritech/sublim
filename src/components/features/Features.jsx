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
    description: `We assist your business to new heights with our cutting-edge cloud solutions. 
          Seamlessly integrate scalable infrastructure, enhance data security, and boost collaboration across your organization.`,
  },
  {
    title: "Network",
    subtitle: "Solution",
    description: `We offer your connectivity infrastructure, enhance data flow, and ensure reliability with our cutting-edge networking expertise. 
          Trust us to build, secure, and streamline your network, providing the backbone for your digital success in today's interconnected world.`,
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
