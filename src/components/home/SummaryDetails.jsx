const SummaryDetails = ({ summary }) => {
  return (
    <div className="flex flex-col gap-[0.25rem] justify-center pb-12">
      <h3 className="text-white text-[2.5rem] font-semibold">{summary.count}+</h3>
      <p className="text-white text-[0.75rem] whitespace-nowrap">{summary.description}</p>
    </div>
  );
};

export default SummaryDetails;
