import BlogItem from "./BlogItem";

const blogsList = [
  {
    title: "Development",
    date: "07 Mar 2023",
    description: "How to improve website page speed?",
  },
  {
    title: "UI Design",
    date: "19 Feb 2023",
    description: "How to make responsive web design?",
  },
  {
    title: "Development",
    date: "08 Jan 2023",
    description: "What is MVC design pattern?",
  },
  {
    title: "Development",
    date: "15 Dec 2022",
    description: "What are HTTP  request methods?",
  },
];

const BlogsList = () => {
  return (
    <div>
      <div className="grid grid-cols-1 md:grid-cols-2">
        {blogsList.map((blog, key) => (
          <BlogItem key={key} item={blog} />
        ))}
      </div>
    </div>
  );
};

export default BlogsList;
