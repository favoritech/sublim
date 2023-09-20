import {Link} from "react-router-dom";

const BlogItem = ({ item }) => {
  return (
    <Link to={`/blog/${item.id}`} className="flex flex-col gap-[0.5rem] sm:gap-[1rem] pb-8 md:pb-[4.75rem]">
      <div className="flex gap-2 items-center justify-center sm:justify-start sm:items-start">
        <span className="text-[#888] text-[0.81rem] font-medium leading-[1.12rem]">
          {item.tag} |
        </span>
        <span className="text-[#e3b27d] text-[0.81rem] font-medium leading-[1.12rem]">
          {item.date}
        </span>
      </div>
      <h3 className="text-center sm:text-left text-white text-xl md:text-[2.18rem] font-semibold leading-[1.5rem] sm:leading-[2.95rem]">
        {item.title}
      </h3>
    </Link>
  );
};

export default BlogItem;
