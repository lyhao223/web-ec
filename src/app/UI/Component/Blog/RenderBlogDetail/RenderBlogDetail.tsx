import React, { Fragment } from "react";
interface BlogProps {
  blog: any;
}
const RenderBlogDetail = ({ blog }: BlogProps) => {
  return (
    <Fragment>
      {blog.map((item: any) => (
        <div className="grid grid-cols-5 gap-y-4 gap-x-4" key={item.id}>
          <div className="col-span-4 grid gap-y-5 grid-flow-row">
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
            <div className="border-b-2 my-12" />
            <div className="grid grid-cols-2">
              <div className="col-span-1 grid grid-cols-4 gap-x-28">
                {item.tags.map((tag: any, index: any) => (
                  <div
                    className="flex flex-col items-center justify-center border p-2 w-32"
                    key={index}>
                    <div key={index} className="text-sm">
                      {tag}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      ))}
    </Fragment>
  );
};

export default RenderBlogDetail;
