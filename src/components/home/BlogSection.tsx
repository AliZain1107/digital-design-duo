import React from "react";
import { Link } from "react-router-dom";

interface BlogPost {
  id: number;
  title: string;
  date: string;
  image: string;
  slug: string;
}

const blogPosts: BlogPost[] = [
  {
    id: 1,
    title:
      "How Real Estate Agents Are Boosting Sales with AI-Powered Virtual Staging: The 2025 Market Reality",
    date: "Apr 14, 2025",
    image:
      "https://cdn.builder.io/api/v1/image/assets/a22916bd9acc4a4986d78d713f5de3db/4e7899ec47182b532c11c8e53fe263c5af7c96cc?placeholderIfAbsent=true",
    slug: "real-estate-agents-ai-virtual-staging",
  },
  {
    id: 2,
    title: "Gen Z's Ultimate Guide to Instagram-Worthy Interiors",
    date: "Jan 21, 2025",
    image:
      "https://cdn.builder.io/api/v1/image/assets/a22916bd9acc4a4986d78d713f5de3db/e9d8abaa9dba567923fb24e01a614d855a14d324?placeholderIfAbsent=true",
    slug: "gen-z-instagram-worthy-interiors",
  },
  {
    id: 3,
    title: "How to Build Your Own House with AI Tools Including Porch Design",
    date: "Jan 11, 2025",
    image:
      "https://cdn.builder.io/api/v1/image/assets/a22916bd9acc4a4986d78d713f5de3db/da3a923bbf34cff9019aca5b89d99ca6f1b83531?placeholderIfAbsent=true",
    slug: "build-house-ai-tools-porch-design",
  },
];

const BlogPostCard: React.FC<{ post: BlogPost }> = ({ post }) => {
  return (
    <Link
      to={`/blog/${post.slug}`}
      className="bg-[rgba(255,255,255,0.002)] shadow-[0px_1px_2px_rgba(0,0,0,0.25)] min-w-60 grow shrink w-[431px] rounded-[20px] max-md:max-w-full"
    >
      <div className="w-full rounded-[10px] max-md:max-w-full">
        <div className="flex flex-col items-stretch justify-center rounded-[10px] max-md:max-w-full">
          <img
            src={post.image}
            alt={post.title}
            className="aspect-[2.16] object-contain w-full flex-1 rounded-[10px] max-md:max-w-full"
          />
        </div>
      </div>
      <div className="min-w-[200px] w-full mt-6 pb-4 px-3 max-md:max-w-full">
        <div className="flex w-full flex-col items-stretch text-[21px] text-[rgba(51,51,51,1)] font-bold pr-[31px] pb-3 max-md:max-w-full max-md:pr-5">
          <h3 className="leading-[1.4] max-md:max-w-full">{post.title}</h3>
        </div>
        <div className="w-full text-[11px] text-[rgba(153,153,153,1)] font-normal tracking-[0.11px] leading-[23px] mt-[7px] max-md:max-w-full">
          {post.date}
        </div>
      </div>
    </Link>
  );
};

const BlogSection: React.FC = () => {
  return (
    <section className="bg-white flex w-full flex-col overflow-hidden items-center justify-center pt-10 pb-[60px] px-20 max-md:max-w-full max-md:px-5">
      <div className="w-[1663px] max-w-full overflow-hidden">
        <div className="text-black font-semibold px-8 max-md:max-w-full max-md:px-5">
          <div className="flex w-full flex-col items-center max-md:max-w-full">
            <div className="flex w-[768px] max-w-full flex-col items-center">
              <div className="w-[34px] text-base text-[rgba(250,111,64,1)] whitespace-nowrap pb-px">
                Blog
              </div>
              <h2 className="w-full text-4xl text-center tracking-[-0.72px] leading-none mt-[19px]">
                <div className="w-full pb-px max-md:max-w-full">New trends</div>
              </h2>
              <div className="w-full text-xl font-normal text-center mt-[19px]">
                <div className="w-full pb-px max-md:max-w-full">
                  The latest industry news, interviews, technologies, and
                  resources.
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="flex items-center overflow-hidden justify-center mt-[9px] py-10">
          <div className="self-stretch flex min-w-60 min-h-[488px] w-full items-stretch gap-6 flex-wrap flex-1 shrink basis-[0%] my-auto max-md:max-w-full">
            {blogPosts.map((post) => (
              <BlogPostCard key={post.id} post={post} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default BlogSection;
