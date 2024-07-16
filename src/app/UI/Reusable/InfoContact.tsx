import React, { Fragment } from "react";
import { MdOutlineMailOutline, MdPhoneEnabled } from "react-icons/md";
interface Props {
  children: React.ReactNode;
  firstContent?: string | any;
  secondContent?: string | any;
  firstIcon?: React.ReactNode;
  secondIcon?: React.ReactNode;
  toggle?: boolean;
}
const InfoContact = ({
  children,
  firstContent,
  secondContent,
  firstIcon,
  secondIcon,
}: Props) => {
  return (
    <Fragment>
      <p className="subpixel-antialiased tracking-wide font-semibold text-xl">
        {children}
      </p>
      <div className="flex flex-col items-start justify-start space-y-2">
        <div className="flex flex-row items-start justify-start space-x-2">
          {firstIcon}

          <p className="subpixel-antialiased tracking-wide text-sm">
            {firstContent}
          </p>
        </div>
        <div className="flex flex-row items-start justify-start space-x-2">
          {secondIcon}

          <p className="subpixel-antialiased tracking-wide text-sm">
            {secondContent}
          </p>
        </div>
      </div>
    </Fragment>
  );
};

export default InfoContact;
