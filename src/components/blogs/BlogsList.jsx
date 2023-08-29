import BlogItem from "./BlogItem";

const blogsList = [
  {
    title: "UI Design",
    date: "15 Dec 2022",
    description: "What is Digital Agency Marketing",
  },
  {
    title: "Marketing",
    date: "15 Dec 2022",
    description: "A Simple Social Media Marketing Checklist",
  },
  {
    title: "Business",
    date: "15 Dec 2022",
    description: "Support During the Exponential Growth",
  },
  {
    title: "Marketing",
    date: "15 Dec 2022",
    description: "The Importance of Making Content Right Now",
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
