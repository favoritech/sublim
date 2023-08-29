import PortfolioItem from "./PortfolioItem";

const portfolioList = [
  "Web & Mobile Development",
  "Interaction Design",
  "Digital Marketing",
  "Branding & Strategy",
];

const PortfolioList = () => {
  return (
    <>
      {portfolioList.map((portfolioItem, key) => (
        <PortfolioItem key={key} portfolioItem={portfolioItem} count={++key} />
      ))}
    </>
  );
};

export default PortfolioList;
