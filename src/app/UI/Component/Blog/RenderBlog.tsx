"use client";
import Link from "next/link";
import React, { Fragment } from "react";
import ReadMoreFly from "../../Animation/ReadMoreFly/ReadMoreFly";

interface BlogProps {
  blog: any;
  blogPerPageProp: number;
  currentPageProp: number;
}
const RenderBlog = ({ blog, blogPerPageProp, currentPageProp }: BlogProps) => {
  const startIndex = (currentPageProp - 1) * blogPerPageProp;
  const paginatedBlog = blog.slice(startIndex, startIndex + blogPerPageProp);

  return (
    <Fragment>
      {paginatedBlog.map((item: any) => (
        <div
          className="flex flex-col items-start justify-start p-4 space-y-2"
          key={item.id}>
          <Link
            href={`/blog/blogdetail/${item.id}`}
            className="flex flex-col items-start justify-start space-y-4"
            suppressHydrationWarning={true}>
            <div className="xl:w-96 relative overflow-hidden">
              <img
                src={item.image}
                alt={item.title}
                className="xl:w-96 xl:h-96 w-60 h-60 object-cover transform transition-transform duration-300 hover:scale-x-105 lg:w-96 lg:h-96"
              />
            </div>
            <h1 className="xl:text-xl text-lg font-semibold xl:w-96 subpixel-antialiased tracking-tight lg:w-96 w-72">
              {item.title}
            </h1>
            <p className="text-xs tracking-wide text-gray-600">{item.time}</p>
            <p className="text-sm tracking-tight xl:w-80 w-64 lg:w-96 text-start">
              {item.content}
            </p>
            <ReadMoreFly id={item.id}>Read More</ReadMoreFly>
          </Link>
        </div>
      ))}
    </Fragment>
  );
};

export default RenderBlog;
