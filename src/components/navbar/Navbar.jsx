import { BiMenu } from "react-icons/bi";
import {useState} from "react";
import styles from "./Navbar.module.css";

const ListItem = ({ menu, styles, itemClick }) => {
  return (
    <li
      className={`${styles} uppercase leading-[1.4rem] text-[1rem] tracking-[0.07rem] font-semibold`}
      onClick={itemClick}
    >
      {
        menu === "Contact" ?
          <a href="mailto:favoritech@outlook.com" target="_blank">
            Contact
          </a> : <a href={`#${menu}`}>{menu}</a>
      }
    </li>
  );
};

const Navbar = () => {
  const [showNavbar, setShowNavbar] = useState(false);
  const handleNavbar = () => {
    const innerWidth = window.innerWidth;
    if (innerWidth < 640) {
      setShowNavbar(!showNavbar);
    }
  }

  return (
    <div className="flex items-center gap-4 sm:gap-16">
      <ul className={`hidden sm:flex gap-4 sm:gap-8 ${showNavbar ? styles.mobileMenu : ''}`}>
        <ListItem menu="home" styles="text-[#e3b27d]" itemClick={handleNavbar} />
        <ListItem menu="about" styles="text-white" itemClick={handleNavbar} />
        <ListItem menu="service" styles="text-white" itemClick={handleNavbar} />
        <ListItem menu="Contact" styles="text-white" itemClick={handleNavbar} />
      </ul>
      <BiMenu
        className="navbar-toggle block sm:hidden text-white bg-[#222] cursor-pointer w-[2.81rem] h-[2.81rem] rounded-full p-3"
        onClick={handleNavbar}
      />
    </div>
  );
};

export default Navbar;
