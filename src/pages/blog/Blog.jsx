import {useParams} from "react-router-dom";
import {useEffect, useState} from "react";
import {BLOG_LIST} from "../../constants";

const Blog = () => {
  const { blogId } = useParams();
  const [blog, setBlog] = useState({});

  useEffect(() => {
    if (blogId) {
      const _blog = BLOG_LIST.find(item => Number(item.id) === Number(blogId));
      if (_blog) {
        setBlog(_blog);
      }
    }
  }, [blogId]);

  return (
    <div className="bg-[#0c0c0c] relative">
      <div className="max-w-[1300px] mx-auto pb-12 pt-12">
        <div className="px-4">
          {
            blog && (
              <div className="flex flex-col mt-8">
                <div className="flex flex-col gap-[1rem]">
                  <h3 className="text-center sm:text-left text-white font-semibold leading-[2rem] sm:leading-[4.21rem] text-3xl sm:text-4xl lg:text-[3.125rem]">
                    {blog.title}
                  </h3>
                  <div className="flex gap-2 justify-center sm:justify-start">
                    <span className="text-[#888] text-[0.81rem] font-medium leading-[1.12rem]">
                      {blog.tag} |
                    </span>
                    <span className="text-[#e3b27d] text-[0.81rem] font-medium leading-[1.12rem]">
                      {blog.date}
                    </span>
                  </div>
                </div>
                <span className="text-center sm:text-left text-[1.2rem] text-white font-medium leading-[1.4rem] mt-4 mb-4">{blog.definition}</span>
                <img src={blog.image} alt="" className="w-full h-full mt-4 mb-4" style={blog.imageStyle} />
                <div className="text-center sm:text-left">
                  {blog.descriptions?.map((description, key) => (
                    <div className="p-4" key={key}>
                      <h4 className="text-white text-2xl md:text-[2rem] font-semibold leading-[2rem] sm:leading-[2.95rem] pb-4">
                        {key + 1}.&nbsp;&nbsp;&nbsp;{description.title}
                      </h4>
                      <span className="text-[1rem] text-[#aaa] font-medium leading-[1.4rem]">{description.content}</span>
                    </div>
                  ))}
                </div>
              </div>
            )
          }
        </div>
      </div>
    </div>
  );
};

export default Blog;
