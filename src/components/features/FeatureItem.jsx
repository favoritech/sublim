import { BiMinus } from "react-icons/bi";
import styles from "./FeatureItem.module.css";

const FeatureItem = ({ feature }) => {
  return (
    <div>
      <div className="flex justify-center md:block">
        <h2
          className={`text-[2rem] md:text-[3.12rem] font-semibold leading-[4.21rem] ${styles.featureTitle}`}
        >
          {feature.title}
        </h2>
        <div className="flex items-center">
          <BiMinus color="white" className="text-[#aaa] text-[2rem] md:text-[3.12rem]" />
          <h2 className="text-white text-[2rem] md:text-[3.12rem] font-semibold leading-[4.21rem]">
            {feature.subtitle}
          </h2>
        </div>
      </div>
      <p className="text-center sm:text-left text-[1rem] text-[#aaa] font-medium leading-[1.4rem]">
        {feature.description}
      </p>
    </div>
  );
};

export default FeatureItem;
