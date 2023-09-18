import Logo from "../../assets/images/logo.png";
import styles from './HomeLogo.module.css'

const HomeLogo = () => {
  return (
    <div className={`absolute ${styles.logoContainer} hidden lg:block`}>
      <img src={Logo} alt="" className={` w-[8.75rem]`} />
    </div>
  );
};

export default HomeLogo;
