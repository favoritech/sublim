const Header = ({ title, subtitle }) => {
  return (
    <>
      <span className="text-[#888] text-[0.875rem] font-semibold uppercase tracking-[0.12rem] leading-[1.4rem]">
        {title}
      </span>
      <span className="text-white text-[2.5rem] font-semibold">
       {subtitle}
      </span>
    </>
  );
};

export default Header;
