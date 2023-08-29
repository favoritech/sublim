import styles from "./SummaryCollaborators.module.css";

const collaboratorStyles = "border-4 h-[5.25rem] w-[5.25rem] rounded-full border-[#222] -ml-3 bg-cover"

const SummaryCollaborators = () => {
  return (
    <div className="flex items-center gap-[1.18rem]">
      <div className="flex relative">
        <div className={`${collaboratorStyles} ${styles.image1}`} />
        <div className={`${collaboratorStyles} ${styles.image2}`} />
        <div className={`${collaboratorStyles} ${styles.image3}`} />
      </div>
      <div className="flex flex-col">
        <span className="text-white text-[1.25rem] font-bold leading-7">100+ Collaborators</span>
        <span className="text-[#ccc] text-[1rem] leading-[1.4rem] font-medium">Already</span>
      </div>
    </div>
  );
};

export default SummaryCollaborators;
