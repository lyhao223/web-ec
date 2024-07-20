import React, { Fragment } from "react";
import { FaInstagramSquare } from "react-icons/fa";
import { FaFacebook, FaTiktok } from "react-icons/fa6";
import { TfiTwitter } from "react-icons/tfi";
import Comment from "../../Comment/Comment";
interface BlogProps {
  blog: any;
  children: React.ReactNode;
}
const icons = [
  <FaFacebook />,
  <FaInstagramSquare />,
  <FaTiktok />,
  <TfiTwitter />,
];

const RenderBlogDetail = ({ blog, children }: BlogProps) => {
  const tagsBlog = blog.map((item: any) => {
    return item.tags.length;
  });

  return (
    <Fragment>
      {blog.map((item: any) => (
        <div className="col-span-4 grid gap-y-5 grid-flow-row" key={item.id}>
          <img src={item.image} className="object-fill h-[30rem] w-full" />
          <div className="text-base text-gray-500 subpixel-antialiased tracking-wider">
            {item.time}
          </div>
          <h1 className="text-5xl subpixel-antialiased tracking-wide font-medium w-full">
            {item.title}
          </h1>
          <article className="w-full grid gap-y-8">
            {item.detailContent.split("\n").map((line: any, index: any) => (
              <p key={index} className="text-base text-black tracking-wide">
                {line}
              </p>
            ))}
          </article>
          <div className="border-b-2 mt-12" />
          <div className="flex flex-row items-center justify-between mb-12">
            <div className="flex flex-row items-center justify-center space-x-4">
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
              {icons.map((icon, index) => (
                <div key={index}>{icon}</div>
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
