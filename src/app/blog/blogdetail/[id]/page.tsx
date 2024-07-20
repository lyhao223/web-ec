import React, { Fragment } from "react";
import { blog } from "../../blog";
import RenderBlogDetail from "@/app/UI/Component/Blog/RenderBlogDetail/RenderBlogDetail";
import Comment from "@/app/UI/Component/Comment/Comment";
import FormPostComment from "@/app/UI/Component/Comment/FormPostComment/FormPostComment";
import Categories from "@/app/UI/Component/Blog/Categories/Categories";
import RecentBlog from "@/app/UI/Component/Blog/RecentBlog/RecentBlog";
const page = ({ params }: { params: { id: any } }) => {
  const blogFilter = blog.filter((item: any) => item.id == params.id);
  const blogSlice = blog.slice(0, 4);
  return (
    <div className="p-32 grid grid-cols-5 gap-y-4 gap-x-40">
      <RenderBlogDetail blog={blogFilter}>
        <div className="border-2 border-black shadow-md w-full h-64 p-10">
          <Comment />
        </div>
        <div className="flex flex-col items-start justify-start w-full my-12 space-y-4">
          <h1 className="text-3xl subpixel-antialiased tracking-wide font-medium">
            Leave A Reply
          </h1>
          <p className="text-sm text-gray-500">
            Your email address will not be published. Required fields are marked
            *
          </p>
          <FormPostComment />
        </div>
      </RenderBlogDetail>
      <div className="col-span-1 ">
        <Categories  />
        <RecentBlog blog={blogSlice} />
      </div>
    </div>
  );
};

export default page;
