const Footer = () => {
  return (
    <div className="max-w-[1300px] mx-auto pt-24">
      <div className="px-4">
        <div className="flex flex-col sm:flex-row gap-16 sm:gap-0 justify-between pb-20 border-b border-[#ffffff26]">
          <p className="max-w-[520px] text-base font-medium text-[#aaa] leading-[21px] text-center sm:text-left">
            Sublim Mentor Favoritech helped us build a custom software solution that has greatly improved our operations.
          </p>
          <div className="md:pr-32 text-center sm:text-left">
            <h3 className="text-white uppercase text-xl font-bold leading-7 pb-8">Quick Links</h3>
            <div className="grid grid-cols-1 text-[#aaa] sm:max-w-[300px]">
              <a href="#about" className="text-base font-medium leading-7 mb-6">About Us</a>
              <a href="#service" className="text-base font-medium leading-7 mb-6">Services</a>
              <a href="mailto:favoritech@outlook.com" target="_blank" className="text-base font-medium leading-7 mb-6">
                Contact Us
              </a>
            </div>
          </div>
        </div>
        <div className="text-center flex justify-between py-6 flex-col sm:text-left sm:flex-row">
          <span className="text-base font-medium text-[#aaa] leading-[21px] pb-4 sm:pb-0">© 2023 All Rights Reserved</span>
          <div className="text-base font-medium text-[#aaa] leading-[21px]">
            <span className="pr-8">Terms of Use</span>
            <span>Privacy Policy</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
