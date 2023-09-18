import {useParams} from "react-router-dom";
import {useEffect, useState} from "react";
import {BLOG_LIST} from "../../constants";
import Navbar from "../../components/navbar/Navbar";
import Footer from "../../components/footer/Footer";

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
    <>
      <div className="max-w-[81.25rem] mx-auto pt-7 pb-7">
        <div className="px-4">
          <div className=" flex flex-col gap-[1.81rem]">
            <div className="flex items-center justify-between flex-col sm:flex-row">
              <h1 className="text-white text-xl leading-7 font-semibold">Sublim Mentor Favoritech</h1>
              <Navbar />
            </div>
          </div>
        </div>
      </div>
      <div className="bg-[#0c0c0c] relative">
        <div className="max-w-[1300px] mx-auto pb-24 pt-24">
          <div className="px-4">
            {
              blog && (
                <div className="flex flex-col mt-8">
                  <div className="flex flex-col gap-[1rem]">
                    <h3 className="text-white font-semibold leading-[4.21rem] text-2xl sm:text-4xl lg:text-[3.125rem]">
                      {blog.title}
                    </h3>
                    <div className="flex gap-2">
                      <span className="text-[#888] text-[0.81rem] font-medium leading-[1.12rem]">
                        {blog.tag} |
                      </span>
                      <span className="text-[#e3b27d] text-[0.81rem] font-medium leading-[1.12rem]">
                        {blog.date}
                      </span>
                    </div>
                  </div>
                  <span className="text-[1.2rem] text-white font-medium leading-[1.4rem] mt-4 mb-4">{blog.definition}</span>
                  <img src={blog.image} alt="" className="w-full h-full mt-4 mb-4" />
                  <div>
                    {blog.descriptions?.map((description, key) => (
                      <div className="p-4" key={key}>
                        <h4 className="text-white text-2xl md:text-[2.18rem] font-semibold leading-[2.95rem] pb-4">
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
      <Footer />
    </>
  );
};

export default Blog;