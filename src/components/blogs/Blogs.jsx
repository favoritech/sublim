import BlogsHeader from "./BlogsHeader";
import BlogsList from "./BlogsList";

const Blogs = () => {
  return (
    <div className="bg-[#181818] relative">
      <div className="max-w-[81.25rem] mx-auto pt-16 pb-[3.25rem]">
        <div className="px-4">
          <BlogsHeader />
          <BlogsList />
        </div>
      </div>
    </div>
  );
};

export default Blogs;
