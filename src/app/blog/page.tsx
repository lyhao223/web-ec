"use client";
import React, { useEffect, useRef } from "react";
import { blog } from "./blog";
import { Pagination, Stack } from "@mui/material";
import Link from "next/link";
import RenderBlog from "../UI/Component/Blog/RenderBlog";
import ptitle__blog from "@/../../assets/blogpost/ptitle-blog-grid.webp";
import ContentFirstPage from "../UI/Reusable/ContentFirstPage";
import Head from "next/head";

const Page = () => {
  const [currentPage, setCurrentPage] = React.useState(1);
  const blogPerPages = 6;
  const totalPages = Math.ceil(blog.length / blogPerPages);
  const isInitialRender = useRef(true);
  const handleChange = (event: React.ChangeEvent<unknown>, value: number) => {
    setCurrentPage(value);
  };

  useEffect(() => {
    if (isInitialRender.current) {
      isInitialRender.current = false;
    } else {
      window.scrollTo(0, 200);
    }
  }, []);
  React.useEffect(() => {
    document.title = "Our blog - help you choose your style - Dunk Store";
  }, []);
  return (
    <>
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
    </>
  );
};

export default Page;
