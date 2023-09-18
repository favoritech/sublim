import {Link} from "react-router-dom";

const BlogItem = ({ item }) => {
  return (
    <Link to={`/blog/${item.id}`} className="flex flex-col gap-[1rem] pb-8 md:pb-[4.75rem]">
      <div className="flex gap-2">
        <span className="text-[#888] text-[0.81rem] font-medium leading-[1.12rem]">
          {item.tag} |
        </span>
        <span className="text-[#e3b27d] text-[0.81rem] font-medium leading-[1.12rem]">
          {item.date}
        </span>
      </div>
      <h3 className="text-white text-2xl md:text-[2.18rem] font-semibold leading-[2.95rem]">
        {item.title}
      </h3>
    </Link>
  );
};

export default BlogItem;
