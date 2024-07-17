"use client";
import React from "react";
import { blog } from "./blog";
import { Pagination, Stack } from "@mui/material";
import Link from "next/link";
import RenderBlog from "../UI/Component/Blog/RenderBlog";
import ptitle__blog from "@/../../assets/blogpost/ptitle-blog-grid.webp";
import ContentFirstPage from "../UI/Reusable/ContentFirstPage";
const page = () => {
  const [currentPage, setCurrentPage] = React.useState(1);
  const blogPerPages = 6;
  const totalPages = Math.ceil(blog.length / blogPerPages);

  const handleChange = (event: React.ChangeEvent<unknown>, value: number) => {
    setCurrentPage(value);
  };
  return (
    <div className="relative top-0 w-full ">
      <ContentFirstPage
        img={ptitle__blog.src}
        contentTitle="Our Blog"
        linkText="Blog"
      />
      <div className="grid xl:grid-rows-10  grid-flow-row justify-center p-12 gap-y-2">
        <div className="xl:row-span-10">
          <div className="grid xl:grid-cols-3 grid-cols-1 items-center justify-center p-4 gap-y-3">
            <RenderBlog
              blog={blog}
              blogPerPageProp={blogPerPages}
              currentPageProp={currentPage}
            />
          </div>
        </div>
      </div>
      <div className="flex items-center justify-center my-12">
        <Stack>
          <Pagination
            count={totalPages}
            page={currentPage}
            onChange={handleChange}
            color="primary"
            size="large"
          />
        </Stack>
      </div>
    </div>
  );
};

export default page;
