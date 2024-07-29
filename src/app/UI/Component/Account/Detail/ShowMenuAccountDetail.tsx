import FlyOutLink from "@/app/UI/Animation/FlyOutLink";
import React from "react";
import { FaAngleDown } from "react-icons/fa6";
import ItemMenuServices from "../../ListDropDownMenu/ItemsMenuServices";
import AccountDetail from "../../ListDropDownMenu/AccountDetail";

const ShowMenuAccountDetail = (
  { children }: { children: React.ReactNode },
  { onClick }: { onClick: () => void }
) => {
  return (
    <>
      <FlyOutLink
        href="/accountdetail"
        FlyoutContent={AccountDetail}
        IconMenu={
          <FaAngleDown className="inline-block text-white text-sm md:text-lg md:mt-[0.2rem]  mt-[0.3rem]" />
        }>
        {children}
      </FlyOutLink>
    </>
  );
};

export default ShowMenuAccountDetail;
