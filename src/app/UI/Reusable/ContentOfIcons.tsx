import React from "react";
interface ContentOfIconsProps {
  children?: React.ReactNode;
}
const ContentOfIcons = ({ children }: ContentOfIconsProps) => {
  return (
    <div className="w-full p-2 bg-gray-600 text-xs text-white">{children}</div>
  );
};

export default ContentOfIcons;
