import React, { Fragment } from "react";
import { blog } from "../../blog";
import RenderBlogDetail from "@/app/UI/Component/Blog/RenderBlogDetail/RenderBlogDetail";

const page = ({ params }: { params: { id: any } }) => {
  const blogFilter = blog.filter((item: any) => item.id == params.id);
  const renderBlogDetailWithFilterId = <RenderBlogDetail blog={blogFilter} />;
  return <div className="p-32 ">{renderBlogDetailWithFilterId}</div>;
};

export default page;
