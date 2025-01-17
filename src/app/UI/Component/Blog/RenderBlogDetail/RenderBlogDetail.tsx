"use client";
import React, { Fragment } from "react";
import { FaInstagramSquare } from "react-icons/fa";
import { FaFacebook, FaInstagram, FaTiktok, FaTwitter } from "react-icons/fa6";
import { TfiTwitter } from "react-icons/tfi";
import Comment from "../../Comment/Comment";

interface BlogProps {
  blog: any;
  children: React.ReactNode;
}
const icons = [
  { id: 1, icon: <FaFacebook size={20} /> },
  { id: 2, icon: <FaInstagram size={20} /> },
  { id: 3, icon: <FaTwitter size={20} /> },
  { id: 4, icon: <FaTiktok size={20} /> },
];

const RenderBlogDetail = ({ blog, children }: BlogProps) => {
  const tagsBlog = blog.map((item: any) => {
    return item.tags.length;
  });

  return (
    <Fragment>
      {blog.map((item: any) => (
        <div
          className="xl:col-span-4 lg:col-span-3 xl:grid xl:gap-y-5 xl:grid-flow-row"
          key={item.id}
          id={item.id}>
          <img
            src={item.image}
            className="xl:object-fill xl:h-[30rem] xl:w-full w-auto lg:w-full md:w-full"
          />
          <div className="text-base text-gray-500 subpixel-antialiased tracking-wider p-2 xl:p-0">
            {item.time}
          </div>
          <h1 className="xl:text-5xl text-2xl subpixel-antialiased tracking-wide font-medium xl:w-full w-96 p-2 xl:p-0 lg:w-[35rem] md:w-full">
            {item.title}
          </h1>
          <article className="xl:w-full w-96 grid gap-y-8 p-2 xl:p-0 lg:w-[35rem] md:w-full">
            {item.detailContent.split("\n").map((line: any, index: any) => (
              <p
                key={index}
                className="xl:text-base text-sm text-black tracking-wide">
                {line}
              </p>
            ))}
          </article>
          <div className="border-b-2 mt-12 xl:w-full w-auto" />
          <div className="flex xl:flex-row flex-col space-y-4 xl:items-center xl:justify-between items-start justify-start mb-12 p-1 xl:p-0">
            <div className="flex flex-row items-center justify-center space-x-4 my-5 xl:my-0">
              {item.tags.map((tag: any, index: any) => (
                <div
                  className="flex flex-row items-center justify-center border p-2 w-32 hover:underline cursor-pointer"
                  key={index}>
                  <div key={index} className="text-sm">
                    {tag}
                  </div>
                </div>
              ))}
            </div>
            <div className="flex flex-row items-center justify-center space-x-4">
              <span>Share</span>
              {icons.map((icon) => (
                <div key={icon.id}>{icon.icon}</div>
              ))}
            </div>
          </div>
          {children}
        </div>
      ))}
    </Fragment>
  );
};

export default RenderBlogDetail;
