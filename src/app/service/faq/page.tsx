import React, { Fragment } from "react";
import faq from "@/../../assets/content/faq.jpg";
import ContentFirstPage from "@/app/UI/Reusable/ContentFirstPage";
import FaqAccordion from "@/app/UI/Reusable/FaqAccordion";
import { Metadata } from "next";
export const metadata: Metadata = {
  title: "FAQ - Help you every step of the way",
};
const Page = () => {
  return (
    <Fragment>
      <ContentFirstPage
        img={faq.src}
        contentTitle="Help & FAQ"
        linkText="FAQ"
      />
      <div className="flex flex-col xl:items-start xl:justify-start 2xl:items-center 2xl:justify-center lg:items-start justify-start  space-y-24 xl:mx-96 xl:p-0 my-12">
        <div className="flex flex-col items-center justify-center space-y-2">
          <h1 className="subpixel-antialiased xl:text-4xl text-2xl tracking-widest">
            Orders & Shipping
            <FaqAccordion accordionTitle="How do I return my order?">
              If you would like to return your order, please fill out the
              attached return form that came with the package. Carefully seal
              the package and attach the shipping label to the package.
            </FaqAccordion>
            <FaqAccordion accordionTitle="All orders can be returned within 30 days.">
              If you would like to return your order, please fill out the
              attached return form that came with the package. Carefully seal
              the package and attach the shipping label to the package.
            </FaqAccordion>
            <FaqAccordion accordionTitle="Are there any shipping costs?">
              If you would like to return your order, please fill out the
              attached return form that came with the package. Carefully seal
              the package and attach the shipping label to the package.
            </FaqAccordion>
          </h1>
        </div>
        <div className="flex flex-col items-center justify-center space-y-2">
          <h1 className="subpixel-antialiased xl:text-4xl text-2xl tracking-widest">
            Payments & Discounts
            <FaqAccordion accordionTitle="What payment methods do you offer?">
              If you would like to return your order, please fill out the
              attached return form that came with the package. Carefully seal
              the package and attach the shipping label to the package.
            </FaqAccordion>
            <FaqAccordion accordionTitle="I forgot to add my discount code, can it still be add?">
              If you would like to return your order, please fill out the
              attached return form that came with the package. Carefully seal
              the package and attach the shipping label to the package.
            </FaqAccordion>
            <FaqAccordion accordionTitle="What payment methods are accepted?">
              If you would like to return your order, please fill out the
              attached return form that came with the package. Carefully seal
              the package and attach the shipping label to the package.
            </FaqAccordion>
          </h1>
        </div>
      </div>
    </Fragment>
  );
};

export default Page;
