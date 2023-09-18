import About from "../../components/about/About";
import Features from "../../components/features/Features";
import Portfolio from "../../components/portfolio/Portfolio";
import Blogs from "../../components/blogs/Blogs";
import NewsLetter from "../../components/newsletter/NewsLetter";
import Footer from "../../components/footer/Footer";
import Home from "../../components/home/Home";

const Dashboard = () => {
  return (
    <>
      <Home />
      <About />
      <Features />
      <Portfolio />
      <Blogs />
      <NewsLetter />
      <Footer />
    </>
  );
};

export default Dashboard;
