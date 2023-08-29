const BlogItem = ({ item }) => {
  return (
    <div className="flex flex-col gap-[1rem] pb-8 md:pb-[4.75rem]">
      <div className="flex gap-2">
        <span className="text-[#888] text-[0.81rem] font-medium leading-[1.12rem]">
          {item.title} |
        </span>
        <span className="text-[#e3b27d] text-[0.81rem] font-medium leading-[1.12rem]">
          {item.date}
        </span>
      </div>
      <h3 className="text-white text-2xl md:text-[2.18rem] font-semibold leading-[2.95rem]">
        {item.description}
      </h3>
    </div>
  );
};

export default BlogItem;
