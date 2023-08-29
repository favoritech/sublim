import { BiMenu } from "react-icons/bi";

const ListItem = ({ menu, styles }) => {
  return (
    <li
      className={`${styles} uppercase leading-[1.4rem] text-[1rem] tracking-[0.07rem] font-semibold`}
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
  return (
    <div className="flex items-center gap-4 sm:gap-16">
      <ul className="flex gap-4 sm:gap-8">
        <ListItem menu="home" styles="text-[#e3b27d]" />
        <ListItem menu="about" styles="text-white" />
        <ListItem menu="service" styles="text-white" />
        <ListItem menu="Contact" styles="text-white" />
      </ul>
      <BiMenu
        className="text-white bg-[#222] cursor-pointer w-[2.81rem] h-[2.81rem] rounded-full p-3"
      />
    </div>
  );
};

export default Navbar;
