import BlogItem from "./BlogItem";

const blogsList = [
  {
    title: "Business",
    date: "07 Mar 2023",
    description: "What is Sublim Mentor Favoritech",
  },
  {
    title: "UI Design",
    date: "19 Feb 2023",
    description: "User Friendly Mobile Responsive Web Design",
  },
  {
    title: "IT Consultant",
    date: "08 Jan 2023",
    description: "Effective IT Consultant",
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
