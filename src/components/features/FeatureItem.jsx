import { BiMinus } from "react-icons/bi";
import styles from "./FeatureItem.module.css";

const FeatureItem = ({ feature }) => {
  return (
    <div>
      <h2
        className={`text-[3.12rem] font-semibold leading-[4.21rem] ${styles.featureTitle}`}
      >
        {feature.title}
      </h2>
      <div className="flex items-center">
        <BiMinus color="white" className="text-[#aaa] text-[3.12rem]" />
        <h2 className="text-white text-[3.12rem] font-semibold leading-[4.21rem]">
          {feature.subtitle}
        </h2>
      </div>
      <span className="text-[1rem] text-[#aaa] font-medium leading-[1.4rem]">
        {feature.description}
      </span>
    </div>
  );
};

export default FeatureItem;
