import BlogItem from "./BlogItem";
import {BLOG_LIST} from "../../constants";

const BlogsList = () => {
  return (
    <div>
      <div className="grid grid-cols-1 md:grid-cols-2">
        {BLOG_LIST.map((blog, key) => (
          <BlogItem key={key} item={blog} />
        ))}
      </div>
    </div>
  );
};

export default BlogsList;
