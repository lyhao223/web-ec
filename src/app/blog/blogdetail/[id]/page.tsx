"use client";
import React, { Fragment, use } from "react";
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
    <div className="xl:p-32 xl:grid xl:grid-cols-5 xl:gap-y-4 xl:gap-x-36 lg:p-5 lg:grid lg:grid-cols-4  lg:gap-x-4 md:w-full">
      <RenderBlogDetail blog={blogFilter}>
        <div className="border-2 border-black shadow-md xl:w-full xl:h-64 h-full lg:h-64 lg:w-full w-96 p-5 lg:p-5 xl:p-10 xl:mx-0 mx-6 md:mx-48 lg:mx-0">
          <Comment />
        </div>
        <div className="flex flex-col items-start justify-start w-full my-12 space-y-4 xl:p-0 p-2">
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
      <div className="xl:col-span-1 p-4 xl:p-0 lg:col-span-1">
        <Categories />
        <RecentBlog blog={blogSlice} />
      </div>
    </div>
  );
};

export default page;
