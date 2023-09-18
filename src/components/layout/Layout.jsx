import Navbar from "../navbar/Navbar";
import Footer from "../footer/Footer";
import {Link} from "react-router-dom";

const Layout = ({ children }) => {
  return (
    <>
      <div className="max-w-[81.25rem] mx-auto pt-7 pb-7">
        <div className="px-4">
          <div className=" flex flex-col gap-[1.81rem]">
            <div className="flex items-center justify-between flex-col sm:flex-row">
              <h1 className="text-white text-xl leading-7 font-semibold">
                <Link to={'/'}>Sublim Mentor Favoritech</Link>
              </h1>
              <Navbar />
            </div>
          </div>
        </div>
      </div>
      {children}
      <Footer />
    </>
  );
};

export default Layout;
