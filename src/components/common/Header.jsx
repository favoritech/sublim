const Header = ({ title, subtitle }) => {
  return (
    <>
      <span className="text-[#888] text-[0.875rem] font-semibold uppercase tracking-[0.12rem] leading-[1.4rem] text-center sm:text-left">
        {title}
      </span>
      <span className="text-white text-[1.75rem] sm:text-[2.5rem] font-semibold text-center sm:text-left">
       {subtitle}
      </span>
    </>
  );
};

export default Header;
