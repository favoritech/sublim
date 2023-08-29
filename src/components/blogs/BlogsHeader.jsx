import Header from "../common/Header";

const BlogsHeader = () => {
  return (
    <div className="grid grid-cols-1 pb-12 lg:grid-cols-2 gap-4 lg:gap-[19rem]">
      <div className="flex flex-col">
        <Header
          title="Latest updates"
          subtitle="Check Some of Our Latest Update blog"
        />
      </div>
      <div className="flex flex-col gap-[1.81rem]">
        <span className="text-[1rem] text-[#aaa] font-medium leading-[1.44rem]">
          Sublim Mentor Favoritech helped us build a custom software solution
          that has greatly improved our operations.
        </span>
        <div className="w-[3.75rem] h-[3.75rem] rounded-full bg-[#333]"></div>
      </div>
    </div>
  );
};

export default BlogsHeader;
