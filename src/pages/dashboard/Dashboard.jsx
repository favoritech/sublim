import About from "../../components/about/About";
import Features from "../../components/features/Features";
import Portfolio from "../../components/portfolio/Portfolio";
import Blogs from "../../components/blogs/Blogs";
import NewsLetter from "../../components/newsletter/NewsLetter";
import Home from "../../components/home/Home";
import Team from "../../components/team/Team";

const Dashboard = () => {
  return (
    <>
      <Home />
      <About />
      <Features />
      <Portfolio />
      <Team />
      <Blogs />
      <NewsLetter />
    </>
  );
};

export default Dashboard;
